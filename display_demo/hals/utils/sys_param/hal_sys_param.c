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

const char* HalGetDeviceType(void)
{
    return OHOS_DEVICE_TYPE;
}

const char* HalGetManufacture(void)
{
    return OHOS_MANUFACTURE;
}

const char* HalGetBrand(void)
{
    return OHOS_BRAND;
}

const char* HalGetMarketName(void)
{
    return OHOS_MARKET_NAME;
}

const char* HalGetProductSeries(void)
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

const char* HalGetHardwareModel(void)
{
    return OHOS_HARDWARE_MODEL;
}

const char* HalGetHardwareProfile(void)
{
    return OHOS_HARDWARE_PROFILE;
}

const char* HalGetSerial(void)
{
    return OHOS_SERIAL;
}

const char* HalGetBootloaderVersion(void)
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
const char *GetDataPath()
{
    return "/data";
}
