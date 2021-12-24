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
#include <ability_info.h>
#include <ability_manager.h>
#include <element_name.h>
#include <module_info.h>
#include <want.h>
#include "launcher.h"
#include "ability_test.h"

void StartLauncherApp(void)
{
    InstallLauncher();
    Want want = {nullptr};
    ElementName element = {nullptr};
    const char *launcherBundleName = "com.huawei.launcher";
    SetElementBundleName(&element, launcherBundleName);
    SetWantElement(&want, element);
    StartAbility(&want);
    ClearElement(&element);
    ClearWant(&want);
}

void StartJSApp(void)
{
    Want want = {nullptr};
    ElementName element = {nullptr};
    const char *jsBundleName = "com.app.example";
    SetElementBundleName(&element, jsBundleName);
    SetWantElement(&want, element);
    const char *jsAppPath = "/data/js";
    SetWantData(&want, (const void *)jsAppPath, strlen(jsAppPath) + 1);
    StartAbility(&want);
    ClearElement(&element);
    ClearWant(&want);
}
