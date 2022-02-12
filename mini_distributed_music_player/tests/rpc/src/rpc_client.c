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
#include <stdint.h>
#include <pthread.h>

#include "cmsis_os2.h"
#include "ohos_init.h"
#include "lwip/tcpip.h"
#include "lwip/netif.h"
#include "rpc_mini_samgr.h"
#include "ipc_skeleton.h"
#include "serializer.h"
#include "rpc_log.h"
#include "rpc_errno.h"
#include "samgr_lite.h"
#include "hiview_service.h"
#include "iproxy_client.h"

#define SAID 16
#define DEVICEID "192.168.137.171"
#define DEFAULT_THREAD_STACK_SIZE 10240
#define TEST_DELAY_MILLISECONDS 20000
#define TEST_CLIENT_DELAY_MILLISECONDS 10000
#define NUMBER_A 12
#define NUMBER_B 17

#define IPC_LENGTH 64
#define IPC_LENGTH_LONG 128
#define LWIP_NSC_IPSTATUS_CHANGE          0xf0

enum {
    OP_ADD = 1,
    OP_SUB = 2,
    OP_MULTI = 3,
};

static void RpcClientMain(void)
{
    pthread_setname_np(pthread_self(), "rpc_client");
    sleep(10);
    printf("%s %d\n", __FUNCTION__, __LINE__);
    static IClientProxy *hiviewInfterface = NULL;

    if (hiviewInfterface == NULL) {
        IUnknown *hiviewDefApi = SAMGR_GetInstance()->GetRemoteDefaultFeatureApi(DEVICEID, "hiview");
        if (hiviewDefApi == NULL) {
            printf("[%s:%d]: %s\n", __FILE__, __LINE__, __func__);
            return;
        }
        printf("[%s:%d]: %s\n", __FILE__, __LINE__, __func__);
        hiviewDefApi->QueryInterface(hiviewDefApi, 0, (void **) &hiviewInfterface);
    }
    IpcIo reply2;
    uint8_t tmpData2[IPC_LENGTH];
    IpcIoInit(&reply2, tmpData2, IPC_LENGTH, 0);
    hiviewInfterface->Invoke(hiviewInfterface, 1, &reply2, NULL, NULL);
    printf("[%s:%d]: %s\n", __FILE__, __LINE__, __func__);
    printf("RpcClientTest\n");
    return;
}

static void RpcClientTest(void)
{
    pthread_t threadId2;
    pthread_attr_t threadAttr2;
    int ret = pthread_attr_init(&threadAttr2);
    if (ret != 0) {
        RPC_LOG_ERROR("pthread_attr_init failed %d", ret);
        return ERR_FAILED;
    }

    if (pthread_attr_setstacksize(&threadAttr2, DEFAULT_THREAD_STACK_SIZE) != 0) {
        RPC_LOG_ERROR("pthread_attr_setstacksize failed");
        return ERR_FAILED;
    }

    ret = pthread_create(&threadId2, &threadAttr2, RpcClientMain, NULL);
    if (ret != 0) {
        RPC_LOG_ERROR("pthread_create failed %d", ret);
        return ERR_FAILED;
    }
    pthread_detach(threadId2);
}

static void RpcClientWifiDHCPSucCB(struct netif *netif,
                                   netif_nsc_reason_t reason, const netif_ext_callback_args_t *args)
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
            RpcClientTest();
        }
    }
}

static void WifiDHCPRpcClientCB(void)
{
    printf("%s %d\n", __FUNCTION__, __LINE__);
    NETIF_DECLARE_EXT_CALLBACK(WifiReadyRpcClientCallback);
    netif_add_ext_callback(&WifiReadyRpcClientCallback, RpcClientWifiDHCPSucCB);
}

APP_FEATURE_INIT(WifiDHCPRpcClientCB);