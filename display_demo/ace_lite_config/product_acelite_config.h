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

#ifndef PRODUCT_ACELITE_CONFIG_H
#define PRODUCT_ACELITE_CONFIG_H

#define JERRY_PORTING_DEPENDENCY 0
#define FEATURE_FEATURE_ABILITY_MODULE 0
#define FEATURE_LOCALIZATION_MODULE 0
#define FEATURE_ACELITE_HI_LOG_PRINTF 1
#define FEATURE_ACELITE_MC_LOG_PRINTF 0
#define FEATURE_ACELITE_MC_EVENT_ERROR_CODE_PRINT 0
#define FEATURE_USER_MC_LOG_PRINTF 0
#define FEATURE_DATE_FORMAT 0
#define FEATURE_API_VERSION 0
#define JS_ENGINE_STATIC_MULTI_CONTEXTS_ENABLED 0
#define FEATURE_MODULE_STORAGE 1
#define FEATURE_MODULE_DEVICE 1
#define FEATURE_ACELITE_DFX_MODULE 0
#define FEATURE_ACELITE_LITE_DFX_MODULE 0
#define DEFAULT_PROFILER_MSG_PATH "/log/"
#define PROFILER_ENABLE_FLAG_FILE "/data/profiler_enable"
#define RUNTIME_MODE_FILE_PATH "/data/jsparser_enable"

#endif // PRODUCT_ACELITE_CONFIG_H
