# vendor_bestechnic

## 介绍

该仓库托管恒玄公司开发的轻量带屏显示产品样例代码，主要包括图形、软总线等特性
产品的开发。

## 软件架构

支持基于恒玄BES2600W SoC 的欧智通的单板进行开发的智能中控开关面板的图形显示产
品显示样例。

代码路径：

```
vendor/bestechnic/                    --- vendor_bestechnic 仓库路径
└── display_demo                      --- 轻量带屏显示样例，智能开关面板
```

## 安装教程

参考 [安装调试教程](https://gitee.com/openharmony/device_soc_bestechnic/blob/master/README.md)

## 使用说明
OpenHarmony-v4.1-release 分支使用说明：
1. bestechnic 没在主干门禁，所以后期维护是bes自己适配,以前功能很多无法使用，一切以每个分支官方使用说明为准
2. 下载代码 不能直接以root 权限现在编译，遇到编译问题，都是建议切到普通user 用户
3. bes 验证下载方法：
    a. 按照官方文档下载[OpenHarmony-v4.1-release分支](https://gitee.com/openharmony/docs/blob/master/zh-cn/release-notes/OpenHarmony-v4.1-release.md) 准备好环境，到这一步会出现编译报错
    b. 按照bes方法打上补丁： python3 vendor/bestechnic/patch_process.py vendor/bestechnic/display_demo/
    c. 按照bes方法编译：python3 build.py -p display_demo@bestechnic -f

## 贡献

[如何参与](https://gitee.com/openharmony/docs/blob/HEAD/zh-cn/contribute/%E5%8F%82%E4%B8%8E%E8%B4%A1%E7%8C%AE.md)

[Commit message规范](https://gitee.com/openharmony/device_qemu/wikis/Commit%20message%E8%A7%84%E8%8C%83?sort_id=4042860)

## 相关仓

[device_soc_bestechnic](https://gitee.com/openharmony/device_soc_bestechnic/blob/master/README.md)

