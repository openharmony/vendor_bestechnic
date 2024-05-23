/*
 * Copyright (c) 2021 Bestechnic (Shanghai) Co., Ltd. All rights reserved.
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

#include "cmsis_os2.h"
#include "ohos_init.h"
#include "wifi_device.h"
#include "wifi_error_code.h"
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

#define SELECT_WIFI_SSID "test_wifi"
#define SELECT_WIFI_PASSWORD  "12345678"
#define SELECT_WIFI_SECURITYTYPE WIFI_SEC_TYPE_PSK

static void WifiSTATask(void)
{
    WifiErrorCode error;
    WifiDeviceConfig select_ap_config = {0};
    strcpy(select_ap_config.ssid, SELECT_WIFI_SSID);
    strcpy(select_ap_config.preSharedKey, SELECT_WIFI_PASSWORD);
    select_ap_config.securityType = SELECT_WIFI_SECURITYTYPE;

    osDelay(2000);
    printf("<--WifiSTATask Init-->\r\n");

    if (EnableWifi() != WIFI_SUCCESS) {
        printf("EnableWifi failed\r\n");
        return;
    }

    if (IsWifiActive() == WIFI_STA_NOT_ACTIVE) {
        printf("Wifi station is not activated.\n");
        return;
    }
    // SetCountryCode("CN");
    if (Scan() != WIFI_SUCCESS) {
        printf("[%s:%d]\n",__func__, __LINE__);
        return;
    }
    WifiScanInfo* info = malloc(sizeof(WifiScanInfo) * WIFI_SCAN_HOTSPOT_LIMIT);
    if (info == NULL) {
        printf("WifiScanStateTask:malloc fail.\n");
        return;
    }
    unsigned int checkSize = WIFI_SCAN_HOTSPOT_LIMIT;
    error = GetScanInfoList(info, &checkSize);
    if (error != WIFI_SUCCESS) {
        printf("WifiScanStateTask:get info fail, error is %d.\n", error);
    }
    int result;
    if (AddDeviceConfig(&select_ap_config, &result) != WIFI_SUCCESS) {
        printf("AddDeviceConfig failed!\r\n");
        return;
    }
    printf("Connecting to %s...\r\n", SELECT_WIFI_SSID);
    error = ConnectTo(result); ///< block and retry
    printf("WiFi connect %s!\r\n", (error == WIFI_SUCCESS) ? "succeed" : "failed");

    for (;;) {
        osDelay(100);
    }
}

static void WifiClientSTA(void)
{
    printf("[%s:%d]\n", __func__, __LINE__);

    osThreadAttr_t attr;
    attr.name = "WifiSTATask";
    attr.attr_bits = 0U;
    attr.cb_mem = NULL;
    attr.cb_size = 0U;
    attr.stack_mem = NULL;
    attr.stack_size = 10240;
    attr.priority = 24;

    if (osThreadNew((osThreadFunc_t)WifiSTATask, NULL, &attr) == NULL) {
        printf("Failed to create WifiSTATask!\n");
    }
}

APP_FEATURE_INIT(WifiClientSTA);
