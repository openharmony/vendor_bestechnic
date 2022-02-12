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

#include <stdlib.h>
#include <string.h>
#include "cmsis_os2.h"
#include "ohos_init.h"
#include "lwip/tcpip.h"
#include "lwip/netif.h"

#define LWIP_NSC_IPSTATUS_CHANGE          0xf0

static void DSoftBus(void)
{
    printf("[%s:%d]: %s\n", __FILE__, __LINE__, __func__);

    osThreadAttr_t attr;
    attr.name = "dsoftbus task";
    attr.attr_bits = 0U;
    attr.cb_mem = NULL;
    attr.cb_size = 0U;
    attr.stack_mem = NULL;
    attr.stack_size = 65536;
    attr.priority = 24;

    extern void InitSoftBusServer(void);
    if (osThreadNew((osThreadFunc_t) InitSoftBusServer, NULL, &attr) == NULL) {
        printf("Falied to create WifiSTATask!\n");
    }
}

static void DSoftBusWifiDHCPSucCB(struct netif *netif, netif_nsc_reason_t reason,
                                  const netif_ext_callback_args_t *args)
{
    printf("%s %d\n", __FUNCTION__, __LINE__);
    (void) args;
    if (netif == NULL) {
        printf("%s %d, error: input netif is NULL!\n", __FUNCTION__, __LINE__);
        return;
    }
    if (reason == LWIP_NSC_IPSTATUS_CHANGE) {
        printf("%s %d\n", __FUNCTION__, __LINE__);
        if (netif_is_up(netif) && !ip_addr_isany(&netif->ip_addr)) {
            printf("%s %d\n", __FUNCTION__, __LINE__);
            DSoftBus();
        }
    }
}

static void WifiDHCPDSoftBusCB(void)
{
    printf("%s %d\n", __FUNCTION__, __LINE__);
    NETIF_DECLARE_EXT_CALLBACK(WifiReadyDSoftBusCallback);
    netif_add_ext_callback(&WifiReadyDSoftBusCallback, DSoftBusWifiDHCPSucCB);
}

APP_FEATURE_INIT(WifiDHCPDSoftBusCB);
