#include "driver_test.h"
#include "cmsis_os2.h"
#include "ohos_init.h"

static void driver_test_task(void *arg)
{
    (void)arg;
#ifdef GPIO_TEST
    gpio_test();
#elif defined(I2C_TEST)
    i2c_test();
#elif defined(SPI_TEST)
    spi_test();
#elif defined(TOUCH_TEST)
    touch_test();
#elif defined(DISP_TEST)
    display_test();
#endif
}

static void driver_test(void)
{
    HILOG_INFO(HILOG_MODULE_APP, "HILOG_INFO %s\r\n", __func__);
    osThreadAttr_t attr = {0};
    attr.stack_size = 4096;
    attr.priority = osPriorityNormal;
    attr.name = "driver_test";
    if (osThreadNew((osThreadFunc_t)driver_test_task, NULL, &attr) == NULL) {
        HILOG_ERROR(HILOG_MODULE_APP, "Failed to create driver_test_task\r\n");
    }
}

APP_FEATURE_INIT(driver_test);
