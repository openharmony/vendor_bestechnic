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
#include "launcher.h"
#include "log.h"

#define X_AXIS 25
#define Y_AXIS 75
#define POS_WIDTH 400
#define POS_HEIGHT 300

namespace OHOS {
void Launcher::InitUI()
{
    rootView_ = RootView::GetInstance();
    rootView_->SetPosition(0, 0, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());
    HILOG_DEBUG(HILOG_MODULE_APP, "rootView %d-%d", rootView_->GetWidth(), rootView_->GetHeight());

    gifImageView_ = new UIImageView();
    gifImageView_->SetPosition(X_AXIS, Y_AXIS, POS_WIDTH, POS_HEIGHT);
    const char *launcherGifPath = "/data/img/launcher.gif";
    gifImageView_->SetSrc(launcherGifPath);
    rootView_->Add(gifImageView_);
    rootView_->Invalidate();
}

void Launcher::DeleteUI()
{
    HILOG_DEBUG(HILOG_MODULE_APP, "%s", __func__);
    if (gifImageView_ != nullptr) {
        delete gifImageView_;
        gifImageView_ = nullptr;
    }
}

Launcher::~Launcher()
{
    DeleteUI();
}

void Launcher::OnStart(const Want &want)
{
    HILOG_DEBUG(HILOG_MODULE_APP, "%s", __func__);
}

void Launcher::OnInactive()
{
    HILOG_DEBUG(HILOG_MODULE_APP, "%s", __func__);
}

void Launcher::OnActive(const Want &want)
{
    HILOG_DEBUG(HILOG_MODULE_APP, "%s", __func__);
    InitUI();
}

void Launcher::OnBackground()
{
    HILOG_DEBUG(HILOG_MODULE_APP, "%s", __func__);
    DeleteUI();
}

void Launcher::OnStop()
{
    HILOG_DEBUG(HILOG_MODULE_APP, "%s", __func__);
    DeleteUI();
}
} // namespace OHOS

extern "C" int InstallNativeAbility(const AbilityInfo *abilityInfo, const OHOS::SliteAbility *ability);
extern "C" void InstallLauncher()
{
    OHOS::Launcher *launcher = OHOS::Launcher::GetInstance();
    InstallNativeAbility(NULL, launcher);
}
