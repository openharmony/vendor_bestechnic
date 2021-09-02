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
#include <errno.h>
#include "ohos_init.h"
#include "hal_trace.h"
#include "hilog_lite/hiview_log.h"
#include "driver_test.h"

void DemoSdkMain(void)
{
    HILOG_INFO(HILOG_MODULE_APP, "HILOG_INFO %s\r\n", __func__);
    touch_test();
}

SYS_RUN(DemoSdkMain);
