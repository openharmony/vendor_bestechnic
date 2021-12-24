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
#include <string.h>
#include "utils_file.h"
#define LOG_TAG "UtilsFile"
#include "log.h"

#define SEEK_COUNT 3
#define FILE_SIZE 64
#define READ_SIZE 4
#define SEEK_POS 2


void utils_file_test(void)
{
    const char *path = "/data/test.txt";
    const char *data = "utils_file_test";
    const int whence[3] = {SEEK_SET_FS, SEEK_CUR_FS, SEEK_END_FS};
    char buf[FILE_SIZE] = {0};
    unsigned int fileSize = 0;

    int ret;
    int fd = UtilsFileOpen(path, O_WRONLY_FS | O_CREAT_FS, 0664);
    if (fd < 0) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileOpen failed", __LINE__);
        return;
    }
    ret = UtilsFileWrite(fd, data, strlen(data));
    if (ret != strlen(data)) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileWrite failed", __LINE__);
        return;
    }
    ret = UtilsFileClose(fd);
    if (ret != 0) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileClose failed", __LINE__);
        return;
    }
    fd = UtilsFileOpen(path, O_RDONLY_FS, 0);
    if (fd < 0) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileOpen failed", __LINE__);
        return;
    }
    ret = UtilsFileStat(path, &fileSize);
    if (ret != 0) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileStat failed", __LINE__);
        return;
    }
    HILOG_DEBUG(HILOG_MODULE_APP, "fileSize %u", fileSize);

    for (int i = 0; i < SEEK_COUNT; i++) {
        ret = UtilsFileSeek(fd, 0, whence[i]);
        if (ret < 0) {
            HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileSeek failed", __LINE__);
            goto ERR;
        }
    }

    UtilsFileSeek(fd, 0, SEEK_SET_FS);
    ret = UtilsFileRead(fd, buf, READ_SIZE);
    if (ret != READ_SIZE) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileRead failed", __LINE__);
        return;
    }
    buf[READ_SIZE] = '\0';
    HILOG_DEBUG(HILOG_MODULE_APP, "read: %s", buf);
    UtilsFileSeek(fd, SEEK_POS, SEEK_SET_FS);
    ret = UtilsFileRead(fd, buf, READ_SIZE);
    if (ret != READ_SIZE) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileRead failed", __LINE__);
        return;
    }
    buf[READ_SIZE] = '\0';
    HILOG_DEBUG(HILOG_MODULE_APP, "read: %s", buf);

ERR:
    ret = UtilsFileClose(fd);
    if (ret != 0) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileClose failed", __LINE__);
        return;
    }
    ret = UtilsFileDelete(path);
    if (ret != 0) {
        HILOG_ERROR(HILOG_MODULE_APP, "%d: UtilsFileDelete failed", __LINE__);
        return;
    }
}
