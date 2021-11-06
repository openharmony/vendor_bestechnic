/*
 * Copyright (c) 2021 bestechnic (Shanghai) Technologies CO., LIMITED.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
#include <stdlib.h>
#include <string.h>
#include "cmsis_os2.h"
#include "hal_trace.h"
#include "ohos_init.h"
#include "wifi_device.h"
#include "wifi_error_code.h"
#ifndef LWIP_ETHERNETIF
#define LWIP_ETHERNETIF 1
#endif
#include "bwifi_interface.h"
#include "lwip/dhcp.h"
#include "lwip/netif.h"
#include "lwip/inet.h"

#define STATIC_IP_ENABLE 0
#define SELECT_WIFI_SSID "test_wifi"
#define SELECT_WIFI_PASSWORD "12345678"
#define SELECT_WIFI_SECURITYTYPE WIFI_SEC_TYPE_PSK

#if SCAN_OPTION
#define SCAN_SUCCESS_FLAGS 1U
osEventFlagsId_t eventId;
#endif
WifiEvent g_wifiEventHandler = {0};
WifiErrorCode error;

static void OnWifiScanStateChangedHandler(int state, int size)
{
    (void)state;
    if (state > 0) {
#if SCAN_OPTION
        osEventFlagsSet(eventId, SCAN_SUCCESS_FLAGS);
#endif
        printf("wifi scan result %d\r\n", size);
    } else {
        printf("wifi scan failed\r\n");
    }
}

static void OnWifiConnectionChangedHandler(int state, WifiLinkedInfo *info)
{
    (void)info;
    if (state > 0) {
        printf("callback function for wifi connect\r\n");
    } else {
        printf("connect error,please check password\r\n");
    }
}

static void OnHotspotStaJoinHandler(StationInfo *info)
{
    (void)info;
    printf("STA join AP\n");
}

static void OnHotspotStaLeaveHandler(StationInfo *info)
{
    (void)info;
    printf("HotspotStaLeave:info is null.\n");
}

static void OnHotspotStateChangedHandler(int state)
{
    printf("HotspotStateChanged:state is %d.\n", state);
}

static WifiErrorCode WiFiInit(void)
{
    g_wifiEventHandler.OnWifiScanStateChanged = OnWifiScanStateChangedHandler;
    g_wifiEventHandler.OnWifiConnectionChanged = OnWifiConnectionChangedHandler;
    g_wifiEventHandler.OnHotspotStaJoin = OnHotspotStaJoinHandler;
    g_wifiEventHandler.OnHotspotStaLeave = OnHotspotStaLeaveHandler;
    g_wifiEventHandler.OnHotspotStateChanged = OnHotspotStateChangedHandler;
    return RegisterWifiEvent(&g_wifiEventHandler);
}

#if SCAN_OPTION
static int WifiScan(uint32_t timeoutMs)
{
    uint32_t flags = 0;
    if (Scan() == ERROR_WIFI_IFACE_INVALID)
        return -1;

    flags = osEventFlagsWait(eventId, SCAN_SUCCESS_FLAGS, osFlagsWaitAny, timeoutMs);
    return (flags == SCAN_SUCCESS_FLAGS) ? 0 : -1;
}
#endif

static void dhcp_timer_handler(void *arg)
{
    printf("dhcp timeout");
}

static osTimerId_t dhcp_timer;
static void netif_link_callback(struct netif *netif)
{
    if (netif_is_up(netif) && !ip_addr_isany(&netif->ip_addr)) {
        if (dhcp_timer) {
            osTimerStop(dhcp_timer);
        }
#ifndef inet_ntoa
#define inet_ntoa(addr) ip4addr_ntoa((const ip4_addr_t *)&(addr))
#endif
        printf("ip %s\n", inet_ntoa(netif->ip_addr));
        printf("netmask %s\n", inet_ntoa(netif->netmask));
        printf("gw %s\n", inet_ntoa(netif->gw));

        struct ip_info ipinfo;
        memcpy(&ipinfo.ip, &netif->ip_addr, 4);
        memcpy(&ipinfo.gw, &netif->gw, 4);
        memcpy(&ipinfo.netmask, &netif->netmask, 4);
        bwifi_set_ip_addr(WIFI_IF_STATION, &ipinfo);
    }
}

static void WifiSTATask(void)
{
    WifiDeviceConfig select_ap_config = {0};
    strcpy(select_ap_config.ssid, SELECT_WIFI_SSID);
    strcpy(select_ap_config.preSharedKey, SELECT_WIFI_PASSWORD);
    select_ap_config.securityType = SELECT_WIFI_SECURITYTYPE;

    osDelay(3000);
    printf("<--WifiSTATask Init-->\r\n");

    if (WiFiInit() != WIFI_SUCCESS) {
        printf("WiFiInit failed!\r\n");
        return;
    }

    if (EnableWifi() != WIFI_SUCCESS) {
        printf("EnableWifi failed\r\n");
        return;
    }

    if (IsWifiActive() == WIFI_STA_NOT_ACTIVE) {
        printf("Wifi station is not actived.\n");
        return;
    }

#if SCAN_OPTION
    eventId = osEventFlagsNew(NULL);
    if (eventId == NULL) {
        printf("Falied to create EventFlags!\n");
        return;
    }
    if (WifiScan(10000) < 0) {
        printf("WifiScan failed\r\n");
        return;
    }
    unsigned int size = WIFI_SCAN_HOTSPOT_LIMIT;
    WifiScanInfo *info = (WifiScanInfo *)malloc(sizeof(WifiScanInfo) * WIFI_SCAN_HOTSPOT_LIMIT);
    if (info == NULL) {
        printf("malloc failed\r\n");
        return;
    }
    if (GetScanInfoList(info, &size) != WIFI_SUCCESS) ///< size = scan_result_len
    {
        printf("GetScanInfoList failed\r\n");
        free(info);
        return;
    }
    printf("********************\r\n");
    for (unsigned int i = 0; i < size; i++) {
        printf("no:%03u, ssid:%-30s, rssi:%5d\r\n", i + 1, info[i].ssid, info[i].rssi);
    }
    printf("********************\r\n");
    free(info);
#endif

    int result;
    if (AddDeviceConfig(&select_ap_config, &result) != WIFI_SUCCESS) {
        printf("AddDeviceConfig failed!\r\n");
        return;
    }
    printf("Connecting to %s...\r\n", SELECT_WIFI_SSID);
    error = ConnectTo(result); ///< block and retry
    printf("WiFi connect %s!\r\n", (error == WIFI_SUCCESS) ? "succeed" : "failed");
    if (error != WIFI_SUCCESS) {
        printf("ConnectTo error\r\n");
        return;
    }
#if !STATIC_IP_ENABLE
    printf("<--start dhcp-->\r\n");
    struct netif *netif = bwifi_get_netif(WIFI_IF_STATION);
    if (netif == NULL) {
        printf("bwifi_get_netif error\r\n");
        return;
    }
    printf("bwifi_get_netif %p\r\n", netif);
    if (netif->hwaddr_len != 6) {
        printf("netif->hwaddr_len %u error\r\n", netif->hwaddr_len);
        return;
    }
    netif_set_default(netif);
    netif_set_link_up(netif);
    netif_set_up(netif);
    netif_set_status_callback(netif, netif_link_callback);
    dhcp_timer = osTimerNew(dhcp_timer_handler, osTimerOnce, NULL, NULL);
    dhcp_start(netif);
    osTimerStart(dhcp_timer, 30 * 1000);
#else
    printf("<-- use static ip -->\r\n");
    struct netif *netif = bwifi_get_netif(WIFI_IF_STATION);
    if (netif == NULL) {
        printf("bwifi_get_netif error\r\n");
        return;
    }
    printf("%s: netif %p, size %u, name %c%c, hwaddr_len %u, flags 0x%x\n", __func__,
           netif, sizeof(struct netif), netif->name[0], netif->name[1], netif->hwaddr_len, netif->flags);
    netif_set_default(netif);
    netif_set_link_up(netif);
    netif_set_up(netif);
    ip4_addr_t ip, netmask, gw;
    int ret = inet_aton("192.168.170.190", &ip);
    ret += inet_aton("255.255.255.0", &netmask);
    ret += inet_aton("192.168.170.1", &gw);
    if (ret != 3) {
        printf("inet_aton error\n");
        return;
    }
    netif_set_addr(netif, &ip, &netmask, &gw);
#endif

    for (;;) {
        osDelay(100);
    }
}

static void WifiClientSTA(void)
{
    printf("[%s:%d]: %s\n", __FILE__, __LINE__, __func__);

    osThreadAttr_t attr = {0};
    attr.name = "WifiSTATask";
    attr.stack_size = 10240;
    attr.priority = osPriorityNormal;
    if (osThreadNew((osThreadFunc_t)WifiSTATask, NULL, &attr) == NULL) {
        printf("Falied to create WifiSTATask!\n");
    }
}

APP_FEATURE_INIT(WifiClientSTA);
