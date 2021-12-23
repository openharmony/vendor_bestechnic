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
#include "common/screen.h"
#include "components/root_view.h"
#include "components/ui_image_view.h"
#include "components/ui_label.h"
#include "components/ui_label_button.h"
#include "components/ui_qrcode.h"
#include "components/ui_scroll_view.h"
#include "components/ui_view.h"
#include "ui_test.h"

#define IMAGE_DIR "/data/img/"
#define GIF_PATH1 (IMAGE_DIR "01.gif")
#define GIF_PATH2 (IMAGE_DIR "02.gif")
#define PNG_PATH (IMAGE_DIR "03.png")
#define JPG_PATH (IMAGE_DIR "04.jpg")

using namespace OHOS;

class ImageDemo : public UIView::OnClickListener
{
public:
    static ImageDemo *GetInstance()
    {
        static ImageDemo inst;
        return &inst;
    }

    void SetUp();
    UIView *GetView();

private:
    ImageDemo() {}
    ~ImageDemo();

    bool OnClick(UIView &view, const ClickEvent &event) override;

    void CreateImageSwitch();

    void SetUpButton(UILabelButton *btn, const char *title);

    UIScrollView *container_ = nullptr;

    UIImageView *gifImageView_ = nullptr;
    UILabelButton *gifToGif_ = nullptr;
    UILabelButton *gifToJpeg_ = nullptr;
    UILabelButton *gifToPng_ = nullptr;

    int16_t g_height = 0;
};

static void DeleteChildren(UIView *view)
{
    if (view == nullptr) {
        return;
    }
    while (view != nullptr) {
        UIView *tempView = view;
        view = view->GetNextSibling();
        if (tempView->IsViewGroup() && (tempView->GetViewType() != UI_DIGITAL_CLOCK)) {
            DeleteChildren(static_cast<UIViewGroup *>(tempView)->GetChildrenHead());
        }
        if (tempView->GetParent()) {
            static_cast<UIViewGroup *>(tempView->GetParent())->Remove(tempView);
        }
        delete tempView;
    }
}

void ImageDemo::SetUp()
{
    int16_t x = 25;
    int16_t y = 25;
    int16_t width = Screen::GetInstance().GetWidth() - 50;
    int16_t height = Screen::GetInstance().GetHeight() - 50;
    g_height = 0;
    if (container_ == nullptr) {
        container_ = new UIScrollView();
        container_->SetPosition(x, y, width, height);
        container_->SetHorizontalScrollState(false);
    }
}

ImageDemo::~ImageDemo()
{
    DeleteChildren(container_);
    container_ = nullptr;
    gifImageView_ = nullptr;
    gifToGif_ = nullptr;
    gifToJpeg_ = nullptr;
    gifToPng_ = nullptr;
}

UIView *ImageDemo::GetView()
{
    CreateImageSwitch();
    return container_;
}

void ImageDemo::CreateImageSwitch()
{
    int16_t x = 100;
    int16_t y = g_height;
    int16_t width = 200;
    int16_t height = 29;
    uint8_t size = 20;
    if (container_ == nullptr) {
        return;
    }
    UILabel *label = new UILabel();
    container_->Add(label);
    label->SetPosition(x, y, width, height);
    label->SetText("不同类型图片切换");
    label->SetFont(DEFAULT_VECTOR_FONT_FILENAME, size);
    g_height += 30;

    gifImageView_ = new UIImageView();
    x = 48;
    y = g_height;
    gifImageView_->SetPosition(x, y);
    gifImageView_->SetSrc(GIF_PATH1);
    width = 100;
    height = 100;
    gifImageView_->Resize(width, height);
    // gifImageView_->SetAutoEnable(false);
    container_->Add(gifImageView_);
    g_height += 150;

    gifToGif_ = new UILabelButton();
    SetUpButton(gifToGif_, "切换GIF");
    x = 48;
    y = g_height + 10;
    gifToGif_->SetPosition(x, y);
    gifToJpeg_ = new UILabelButton();
    SetUpButton(gifToJpeg_, "切换JPG");
    x = 48 + 120;
    y = g_height + 10;
    gifToJpeg_->SetPosition(x, y);
    gifToPng_ = new UILabelButton();
    SetUpButton(gifToPng_, "切换PNG");
    x = 48 + 240;
    y = g_height + 10;
    gifToPng_->SetPosition(x, y);
}

void ImageDemo::SetUpButton(UILabelButton *btn, const char *title)
{
    int16_t width = 100;
    int16_t height = 50;
    if (btn == nullptr) {
        return;
    }
    container_->Add(btn);
    btn->Resize(width, height);
    btn->SetText(title);
    btn->SetOnClickListener(this);
}

bool ImageDemo::OnClick(UIView &view, const ClickEvent &event)
{
    if (gifImageView_ == nullptr) {
        return false;
    }
    if (&view == gifToGif_) {
        gifImageView_->SetSrc(GIF_PATH2);
    } else if (&view == gifToJpeg_) {
        gifImageView_->SetSrc(JPG_PATH);
    } else if (&view == gifToPng_) {
        gifImageView_->SetSrc(PNG_PATH);
    }
    return true;
}

class QrcodeDemo
{
public:
    static QrcodeDemo *GetInstance()
    {
        static QrcodeDemo inst;
        return &inst;
    }

    void SetUp();
    UIView *GetView();

private:
    QrcodeDemo() {}
    ~QrcodeDemo()
    {
        DeleteChildren(container_);
        container_ = nullptr;
    }

    UIScrollView *container_ = nullptr;
};

void QrcodeDemo::SetUp()
{
    int16_t x = 25;
    int16_t y = 25;
    int16_t width = Screen::GetInstance().GetWidth() - 50;
    int16_t height = Screen::GetInstance().GetHeight() - 50;
    if (container_ == nullptr) {
        container_ = new UIScrollView();
        container_->SetPosition(x, y, width, height);
        container_->SetHorizontalScrollState(false);
    }
}

UIView *QrcodeDemo::GetView()
{
    int16_t x = 100;
    int16_t y = 100;
    int16_t width = 300;
    int16_t height = 30;
    if (container_ == nullptr) {
        return nullptr;
    }

    UILabel *titleLabel = new UILabel();
    titleLabel->SetPosition(x, y, width, height);
    titleLabel->SetText("qrcode");

    UIQrcode *qrcode = new UIQrcode();
    x = 100;
    y = 150;
    width = 200;
    height = 200;
    qrcode->SetPosition(100, 150, 200, 200);
    const char *str = "鸿蒙轻量级GUI";
    qrcode->SetQrcodeInfo(str);

    container_->Add(qrcode);
    container_->Add(titleLabel);
    return container_;
}

void ImageDemoStart()
{
    int16_t x = 0;
    int16_t y = 0;
    RootView *rootView_ = RootView::GetInstance();
    rootView_->SetPosition(x, y, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());

    ImageDemo *view = ImageDemo::GetInstance();
    // QrcodeDemo *view = QrcodeDemo::GetInstance();
    view->SetUp();
    rootView_->Add(view->GetView());
    rootView_->Invalidate();
}
