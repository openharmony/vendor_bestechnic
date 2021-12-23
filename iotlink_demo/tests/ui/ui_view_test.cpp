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
#include "components/ui_digital_clock.h"
#include "components/ui_label.h"
#include "components/ui_label_button.h"
#include "components/ui_scroll_view.h"
#include "components/ui_swipe_view.h"
#include "components/ui_view_group.h"
#include "graphic_config.h"
#include "graphic_timer.h"
#include "hilog/log.h"
#include "ui_test.h"

#undef LOG_TAG
#define LOG_TAG "ViewDemo"

using namespace OHOS;

static void DeleteChildren(UIView *view)
{
    if (view == nullptr) {
        return;
    }
    while (view) {
        UIView *tempView = view;
        view = view->GetNextSibling();
        if (tempView->IsViewGroup()) {
            DeleteChildren(static_cast<UIViewGroup *>(tempView)->GetChildrenHead());
        }
        if (tempView->GetParent()) {
            static_cast<UIViewGroup *>(tempView->GetParent())->Remove(tempView);
        }
        delete tempView;
    }
}

class ViewDemo : public UIView::OnClickListener
{
public:
    static ViewDemo *GetInstance()
    {
        static ViewDemo instance;
        return &instance;
    }
    void SetUp();
    UIView *GetView();

private:
    ViewDemo() {}
    ~ViewDemo();

    void GetView0();
    void GetView1();
    void GetView2();

    bool OnClick(UIView &view, const ClickEvent &event) override;
    void SetUpNav(const char *text, int x, int y, UIViewGroup *parent);
    static void TimerCb(void *arg)
    {
        UIDigitalClock *clock = reinterpret_cast<UIDigitalClock *>(arg);
        if (clock) {
            clock->IncOneSecond();
        }
    }
    UIScrollView *container_ = nullptr;
    UIViewGroup *view0_ = nullptr;
    UIViewGroup *view1_ = nullptr;
    UIViewGroup *view2_ = nullptr;
    GraphicTimer *timer_ = nullptr;
    int g_height = 50;
};

ViewDemo::~ViewDemo()
{
    DeleteChildren(container_);
    container_ = nullptr;
    view0_ = nullptr;
    view1_ = nullptr;
    view2_ = nullptr;
    if (timer_) {
        delete timer_;
        timer_ = nullptr;
    }
}

void ViewDemo::SetUp()
{
    if (container_ != nullptr) {
        return;
    }
    container_ = new UIScrollView();
    container_->SetPosition(0, 0, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());
    container_->SetYScrollBarVisible(true);
    container_->SetHorizontalScrollState(false);
    container_->SetReboundSize(50);
}

UIView *ViewDemo::GetView()
{
    GetView0();
    GetView1();
    GetView2();
    return container_;
}

void ViewDemo::SetUpNav(const char *text, int x, int y, UIViewGroup *parent)
{
    int16_t width = 50;
    int16_t height = 50;
    int64_t value = 90;
    UILabelButton *btn = new UILabelButton();
    btn->SetText(text);
    btn->SetPosition(x, y, width, width);
    btn->SetStyle(STYLE_BORDER_RADIUS, value);
    parent->Add(btn);
}

void ViewDemo::GetView0()
{
    if (view0_ != nullptr || timer_ != nullptr) {
        return;
    }
    view0_ = new UIViewGroup();
    view0_->SetPosition(0, g_height, Screen::GetInstance().GetWidth(), 200);
    g_height += view0_->GetHeight();
    SetUpNav("1", 80, 0, view0_);

    UIDigitalClock *dClock_ = new UIDigitalClock();
    dClock_->SetPosition(150, 0, 250, 64);
    dClock_->SetFont(DEFAULT_VECTOR_FONT_FILENAME, 20);
    dClock_->SetTime24Hour(15, 14, 50);
    view0_->Add(dClock_);
    container_->Add(view0_);

    timer_ = new GraphicTimer(1000, TimerCb, dClock_, true);
    timer_->Start();
}

void ViewDemo::GetView1()
{
    if (view1_ != nullptr) {
        return;
    }
    view1_ = new UIViewGroup();
    view1_->SetPosition(0, g_height, Screen::GetInstance().GetWidth(), 200);
    g_height += view0_->GetHeight();
    SetUpNav("2", 80, 0, view1_);

    UILabel *label_ = new UILabel();
    label_->SetPosition(150, 0, 250, 64);
    label_->SetText("图形UI组件实现了一套系统级的图形引擎，为应用开发提供UIKit接口，包括了动画、布局、图形转换、事件处理，以及丰富的UI组件。");
    label_->SetLineBreakMode(UILabel::LINE_BREAK_WRAP);
    label_->SetFont(DEFAULT_VECTOR_FONT_FILENAME, 20);
    view1_->Add(label_);
    container_->Add(view1_);
}

void ViewDemo::GetView2()
{
    int16_t x = 0;
    int16_t y = 0;
    int16_t width = 0;
    int16_t height = 200;
    int8_t size = 20;
    if (view2_ != nullptr) {
        return;
    }
    view2_ = new UIViewGroup();
    view2_->SetPosition(x, g_height, Screen::GetInstance().GetWidth(), height);
    g_height += view0_->GetHeight();
    x = 80;
    SetUpNav("3", x, y, view2_);

    UILabelButton *button_ = new UILabelButton();
    x = 150;
    width = 120;
    height = 64;
    button_->SetPosition(x, y, width, height);
    button_->SetText("Play");
    button_->SetFont(DEFAULT_VECTOR_FONT_FILENAME, size);
    button_->SetOnClickListener(this);
    view2_->Add(button_);
    container_->Add(view2_);
}

bool ViewDemo::OnClick(UIView &view, const ClickEvent &event)
{
    if (view.GetViewType() != UI_LABEL_BUTTON) {
        return true;
    }
    UILabelButton *button_ = reinterpret_cast<UILabelButton *>(&view);
    if (strcmp(button_->GetText(), "Play") == 0) {
        button_->SetText("Pause");
    } else if (strcmp(button_->GetText(), "Pause") == 0) {
        button_->SetText("Play");
    }
    return true;
}

/****************************************************/
class MyScrollView
{
public:
    static MyScrollView *GetInstance()
    {
        static MyScrollView inst;
        return &inst;
    }

    void SetUp();
    UIView *GetView();

private:
    MyScrollView() {}
    ~MyScrollView();

    void GetScrollView();

    UIScrollView *container_ = nullptr;
};

void MyScrollView::SetUp()
{
    int16_t size = 0;
    BaseGfxEngine::GetInstance()->SetScreenShape(ScreenShape::CIRCLE);

    if (container_ == nullptr) {
        container_ = new UIScrollView();
    }

    container_->SetPosition(0, 0, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());
    container_->SetYScrollBarVisible(true);
    container_->SetHorizontalScrollState(false);
    container_->SetReboundSize(size);
}

MyScrollView::~MyScrollView()
{
    DeleteChildren(container_);
    container_ = nullptr;
}

UIView *MyScrollView::GetView()
{
    GetScrollView();
    return container_;
}

void MyScrollView::GetScrollView()
{
    int16_t g_height = 0;
    int16_t x = 0;
    int16_t y = 0;
    int16_t width = 0;
    int16_t height = 0;
    int8_t value = 90;
    UILabelButton *button1 = new UILabelButton();
    container_->Add(button1);
    x = 180;
    y = 100 + g_height;
    width = 100;
    height = 100;
    button1->SetPosition(x, y, width, height);
    button1->SetStyle(STYLE_BORDER_RADIUS, value);
    button1->SetText("button1");

    UILabelButton *button2 = new UILabelButton();
    container_->Add(button2);
    x = 180;
    y = 250 + g_height;
    button2->SetPosition(x, y, width, height);
    button2->SetStyle(STYLE_BORDER_RADIUS, value);
    button2->SetText("button2");
    y = 400 + g_height;
    UILabelButton *button3 = new UILabelButton();
    container_->Add(button3);
    button3->SetPosition(x, y, width, height);
    button3->SetStyle(STYLE_BORDER_RADIUS, value);
    button3->SetText("button3");

    UILabelButton *button4 = new UILabelButton();
    container_->Add(button4);
    y = 550 + g_height;
    button4->SetPosition(x, y, width, height);
    button4->SetStyle(STYLE_BORDER_RADIUS, value);
    button4->SetText("button4");

    UILabelButton *button5 = new UILabelButton();
    container_->Add(button5);
    y = 700 + g_height;
    button5->SetPosition(x, y, width, height);
    button5->SetStyle(STYLE_BORDER_RADIUS, value);
    button5->SetText("button5");
}

class ViewSwitchDemo : public UIView::OnClickListener
{
public:
    static ViewSwitchDemo *GetInstance()
    {
        static ViewSwitchDemo instance;
        return &instance;
    }
    void SetUp();
    UIView *GetView();

private:
    ViewSwitchDemo() {}
    ~ViewSwitchDemo();

    void GetView0();
    void GetView1();
    void GetView2();

    bool OnClick(UIView &view, const ClickEvent &event) override;
    void SetUpNav(UIViewGroup *parent);

    UIViewGroup *container_ = nullptr;
    UIViewGroup *view0_ = nullptr;
    UIViewGroup *view1_ = nullptr;
    UIViewGroup *view2_ = nullptr;
};

ViewSwitchDemo::~ViewSwitchDemo()
{
    DeleteChildren(container_);
    container_ = nullptr;
    view0_ = nullptr;
    view1_ = nullptr;
    view2_ = nullptr;
}

void ViewSwitchDemo::SetUp()
{
    int x = 0;
    int y = 0;
    if (container_ != nullptr) {
        return;
    }
    container_ = new UIViewGroup();
    container_->SetPosition(x, y, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());
}

UIView *ViewSwitchDemo::GetView()
{
    GetView0();
    container_->Add(view0_);
    return container_;
}

void ViewSwitchDemo::SetUpNav(UIViewGroup *container)
{
    int16_t x = 100;
    int16_t y = 350;
    int16_t width = 120;
    int16_t height = 50;
    UILabelButton *btn1 = new UILabelButton();
    btn1->SetPosition(x, y, width, height);
    btn1->SetText("上一页");
    btn1->SetOnClickListener(this);

    UILabelButton *btn2 = new UILabelButton();
    x = 250;
    btn2->SetPosition(x, y, width, height);
    btn2->SetText("下一页");
    btn2->SetOnClickListener(this);

    container->Add(btn1);
    container->Add(btn2);
}

void ViewSwitchDemo::GetView0()
{
    int16_t x = 0;
    int16_t y = 0;
    int16_t width = 0;
    int16_t height = 0;
    int8_t size = 20;
    if (view0_ != nullptr) {
        return;
    }
    view0_ = new UIViewGroup();
    view0_->SetPosition(x, y, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());

    UILabel *label_ = new UILabel();
    label_->SetPosition(x, y, width, height);
    label_->SetText("图形UI组件实现了一套系统级的图形引擎。");
    label_->SetLineBreakMode(UILabel::LINE_BREAK_WRAP);
    label_->SetFont(DEFAULT_VECTOR_FONT_FILENAME, size);

    view0_->Add(label_);
    SetUpNav(view0_);
}

void ViewSwitchDemo::GetView1()
{
    int16_t x = 0;
    int16_t y = 0;
    int16_t width = 0;
    int16_t height = 0;
    uint8_t size = 20;
    if (view1_ != nullptr) {
        return;
    }
    view1_ = new UIViewGroup();
    view1_->SetPosition(x, y, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());

    UILabel *label_ = new UILabel();
    x = 100;
    y = 100;
    width = 250;
    height = 64;
    label_->SetPosition(x, y, width, height);
    label_->SetText("该组件为应用开发提供UIKit接口，包括了动画、布局、图形转换、事件处理，以及丰富的UI组件。"
                    "组件内部直接调用HAL接口，或者使用WMS(Window Manager Service)提供的客户端与硬件交互，以完成事件响应、图像绘制等操作。");
    label_->SetLineBreakMode(UILabel::LINE_BREAK_WRAP);
    label_->SetFont(DEFAULT_VECTOR_FONT_FILENAME, size);

    view1_->Add(label_);
    SetUpNav(view1_);
}

void ViewSwitchDemo::GetView2()
{
    int16_t x = 0;
    int16_t y = 0;
    int16_t width = 0;
    int16_t height = 0;
    int16_t size = 20;
    if (view2_ != nullptr) {
        return;
    }
    view2_ = new UIViewGroup();
    view2_->SetPosition(x, y, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());

    UILabel *label_ = new UILabel();
    x = 100;
    y = 100;
    width = 250;
    height = 64;
    label_->SetPosition(x, y, width, height);
    label_->SetText("组件分为基础组件和容器组件"
                    "- 基础组件：仅实现组件自身单一功能，比如按钮、文字、图片等；"
                    "- 容器组件：可将其他组件作为自己的子组件，通过组合实现复杂功能。");
    label_->SetLineBreakMode(UILabel::LINE_BREAK_WRAP);
    label_->SetFont(DEFAULT_VECTOR_FONT_FILENAME, size);

    view2_->Add(label_);
    SetUpNav(view2_);
}

bool ViewSwitchDemo::OnClick(UIView &view, const ClickEvent &event)
{
    if (view.GetViewType() != UI_LABEL_BUTTON) {
        return true;
    }
    UILabelButton *button_ = reinterpret_cast<UILabelButton *>(&view);
    UIView *parent_ = button_->GetParent();
    if (parent_ == view0_) {
        if (strcmp(button_->GetText(), "下一页") == 0) {
            container_->RemoveAll();
            GetView1();
            container_->Add(view1_);
            container_->Invalidate();
        }
    } else if (parent_ == view1_) {
        if (strcmp(button_->GetText(), "上一页") == 0) {
            container_->RemoveAll();
            GetView0();
            container_->Add(view0_);
            container_->Invalidate();
        } else if (strcmp(button_->GetText(), "下一页") == 0) {
            container_->RemoveAll();
            GetView2();
            container_->Add(view2_);
            container_->Invalidate();
        }
    } else if (parent_ == view2_) {
        if (strcmp(button_->GetText(), "上一页") == 0) {
            container_->RemoveAll();
            GetView1();
            container_->Add(view1_);
            container_->Invalidate();
        }
    }
    return true;
}

void ViewDemoStart(void)
{
    int16_t x = 0;
    int16_t y = 0;
    RootView *rootView_ = RootView::GetInstance();
    rootView_->SetPosition(x, y, Screen::GetInstance().GetWidth(), Screen::GetInstance().GetHeight());
    ViewDemo *view = ViewDemo::GetInstance();
    // MyScrollView *view = MyScrollView::GetInstance();
    // ViewSwitchDemo *view = ViewSwitchDemo::GetInstance();
    view->SetUp();
    rootView_->Add(view->GetView());
    rootView_->Invalidate();
}
