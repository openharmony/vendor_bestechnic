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
#include <dirent.h>
#include <errno.h>
#include <fcntl.h>
#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>
#include "hal_trace.h"

static void dir_test(const char *path)
{
    DIR *dir;
    struct dirent *dp;
    if ((dir = opendir(path)) == NULL) {
        printf("opendir %s failed, %s\n", path, strerror(errno));
        return;
    }
    while ((dp = readdir(dir)) != NULL) {
        if (strcmp(dp->d_name, ".") == 0 || strcmp(dp->d_name, "..") == 0) {
            continue;
        }
        struct stat st_buf = {0};
        char realpath[128];
        snprintf(realpath, sizeof(realpath), "%s/%s", path, dp->d_name);
        if (stat(realpath, &st_buf) != 0) {
            printf("can not access %s\n", realpath);
            closedir(dir);
            return;
        }
        if ((st_buf.st_mode & S_IFMT) == S_IFDIR) {
            printf("DIR %s\n", realpath);
        } else {
            printf("FILE %s, %ld bytes\n", realpath, st_buf.st_size);
        }
    }
    closedir(dir);
}

static void read_file(const char *file, bool print_str)
{
    int fd = open(file, O_RDONLY);
    if (fd < 0) {
        printf("open file '%s' failed, %s\r\n", file, strerror(errno));
        return;
    }
    int bytes = 0;
    char buf[513];
    while (1) {
        memset(buf, 0, sizeof(buf));
        int rc = read(fd, buf, sizeof(buf) - 1);
        if (rc > 0)
            bytes += rc;

        if (print_str) {
            buf[rc] = '\0';
            printf("%s", buf);
        }

        if (rc < sizeof(buf) - 1)
            break;
    }
    close(fd);
    printf("read file '%s' total bytes: %d\r\n", file, bytes);
}

static void fread_file(const char *file, bool print_str)
{
    FILE *fp = fopen(file, "rb");
    if (fp == NULL) {
        printf("fopen file '%s' failed, %s\r\n", file, strerror(errno));
        return;
    }
    int bytes = 0;
    char buf[513];
    while (1) {
        memset(buf, 0, sizeof(buf));
        int rc = fread(buf, 1, sizeof(buf) - 1, fp);
        if (rc > 0)
            bytes += rc;

        if (print_str) {
            buf[rc] = '\0';
            printf("%s", buf);
        }
        if (rc < sizeof(buf) - 1)
            break;
    }
    fclose(fp);
    printf("fread file '%s' total bytes: %d\r\n", file, bytes);
}

static void fwrite_file(const char *file)
{
    FILE *fp = fopen(file, "w");
    if (fp == NULL) {
        printf("fopen file '%s' failed, %s\r\n", file, strerror(errno));
        return;
    }
    const char *buf = "fs write test";
    int bytes = fwrite(buf, 1, strlen(buf), fp);
    fclose(fp);
    printf("fwrite file '%s' total bytes: %d, %s\r\n", file, bytes, buf);
}

void fs_test(void)
{
    dir_test("/data");
    read_file("/data/test.txt", true);
    fwrite_file("/data/test.txt");
    fread_file("/data/font.ttf", false);
}
