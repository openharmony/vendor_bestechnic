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

#include "hal_sys_param.h"

#define OHOS_DEVICE_TYPE "liteWearable"
#define OHOS_DISPLAY_VERSION "OpenHarmony-2.2-Beta2"
#define OHOS_MANUFACTURE "Bestechnic"
#define OHOS_BRAND "Bestechnic"
#define OHOS_MARKET_NAME "****"
#define OHOS_PRODUCT_SERIES "****"
#define OHOS_PRODUCT_MODEL "****"
#define OHOS_SOFTWARE_MODEL "****"
#define OHOS_HARDWARE_MODEL "bes2600w"
#define OHOS_HARDWARE_PROFILE "aout:true,display:true"
#define OHOS_BOOTLOADER_VERSION "bootloader"
#define OHOS_ABI_LIST "****"
#define OHOS_SERIAL "1234567890"
#define OHOS_FIRST_API_VERSION  1
static const char OHOS_SECURITY_PATCH_TAG[] = {"0.0.0.1"};
static const int OHOS_SDK_API_VERSION = 1;
static const char OHOS_VERSION_ID[] = {"0.0.0.1"};
static const char OHOS_BUILD_ROOT_HASH[] = {"de259d62a5dee08a2ee02fd7fc02caf8"};
static const char OHOS_OS_FULL_NAME[] = {"OpenHarmony"};

const char *GetOSFullName(void)
{
    return OHOS_OS_FULL_NAME;
}
const char *GetBuildRootHash(void)
{
    return OHOS_BUILD_ROOT_HASH;
}

const char *GetBuildTime(void)
{
    return BUILD_TIME;
}
const char *GetBuildHost(void)
{
    return BUILD_HOST;
}

const char *GetBuildUser(void)
{
    return BUILD_USER;
}
const char *GetBuildType(void)
{
    return BUILD_TYPE;
}

const char *GetVersionId(void)
{
    return OHOS_VERSION_ID;
}

const char *GetProductModel(void)
{
    return OHOS_PRODUCT_MODEL;
}
const char *GetIncrementalVersion(void)
{
    return INCREMENTAL_VERSION;
}

int GetFirstApiVersion(void)
{
    return OHOS_FIRST_API_VERSION;
}

int GetSdkApiVersion(void)
{
    return OHOS_SDK_API_VERSION;
}

const char* HalGetDeviceType(void)
{
    return OHOS_DEVICE_TYPE;
}

const char* GetDeviceType(void)
{
    return OHOS_DEVICE_TYPE;
}


const char* HalGetManufacture(void)
{
    return OHOS_MANUFACTURE;
}

const char* GetManufacture(void)
{
    return OHOS_MANUFACTURE;
}

const char* HalGetBrand(void)
{
    return OHOS_BRAND;
}

const char* GetBrand(void)
{
    return OHOS_BRAND;
}

const char* HalGetMarketName(void)
{
    return OHOS_MARKET_NAME;
}

const char* GetMarketName(void)
{
    return OHOS_MARKET_NAME;
}

const char* HalGetProductSeries(void)
{
    return OHOS_PRODUCT_SERIES;
}

const char* GetProductSeries(void)
{
    return OHOS_PRODUCT_SERIES;
}

const char* HalGetProductModel(void)
{
    return OHOS_PRODUCT_MODEL;
}

const char* HalGetSoftwareModel(void)
{
    return OHOS_SOFTWARE_MODEL;
}
const char* GetSoftwareModel(void)
{
    return OHOS_SOFTWARE_MODEL;
}
const char* HalGetHardwareModel(void)
{
    return OHOS_HARDWARE_MODEL;
}
const char* GetHardwareModel(void)
{
    return OHOS_HARDWARE_MODEL;
}
const char* HalGetHardwareProfile(void)
{
    return OHOS_HARDWARE_PROFILE;
}
const char* GetHardwareProfile(void)
{
    return OHOS_HARDWARE_PROFILE;
}
const char* HalGetSerial(void)
{
    return OHOS_SERIAL;
}
const char* GetSerial(void)
{
    return OHOS_SERIAL;
}
const char* HalGetBootloaderVersion(void)
{
    return OHOS_BOOTLOADER_VERSION;
}

const char* GetBootloaderVersion(void)
{
    return OHOS_BOOTLOADER_VERSION;
}

const char* HalGetAbiList(void)
{
    return OHOS_ABI_LIST;
}

const char* HalGetDisplayVersion(void)
{
    return OHOS_DISPLAY_VERSION;
}
const char* GetDisplayVersion(void)
{
    return OHOS_DISPLAY_VERSION;
}

const char* HalGetIncrementalVersion(void)
{
    return INCREMENTAL_VERSION;
}

const char* HalGetBuildType(void)
{
    return BUILD_TYPE;
}

const char* HalGetBuildUser(void)
{
    return BUILD_USER;
}

const char* HalGetBuildHost(void)
{
    return BUILD_HOST;
}

const char* HalGetBuildTime(void)
{
    return BUILD_TIME;
}

int HalGetFirstApiVersion(void)
{
    return OHOS_FIRST_API_VERSION;
}

/**
 * @brief implement for js kvstorekit/filekit
 */
const char *GetDataPath(void)
{
    return "/data";
}

const char *GetSecurityPatchTag(void)
{
    return OHOS_SECURITY_PATCH_TAG;
}

const char *GetAbiList(void)
{
    return OHOS_ABI_LIST;
}


typedef enum InitLogLevel {
    INIT_DEBUG = 0,
    INIT_INFO,
    INIT_WARN,
    INIT_ERROR,
    INIT_FATAL
} InitLogLevel;

void StartupLog(InitLogLevel logLevel, unsigned int domain, const char *tag, const char *fmt, ...)
{
    return;
}

int SystemReadParam(const char *name, char *value,  unsigned int *len)
{
    return len;
}