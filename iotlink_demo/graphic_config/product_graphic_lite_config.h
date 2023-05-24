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

#ifndef PRODUCT_GRAPHIC_LITE_CONFIG_H
#define PRODUCT_GRAPHIC_LITE_CONFIG_H


#define ENABLE_SHAPING 0
#define ENABLE_ICU 0
#define ENABLE_MULTI_FONT 0
#define ENABLE_WINDOW 0
#define ENABLE_FRAME_BUFFER 1
#define ENABLE_VECTOR_FONT 1
#define ENABLE_BITMAP_FONT 0
#define ENABLE_STATIC_FONT 0
#define ENABLE_JPEG_AND_PNG 1
#define FULLY_RENDER 1
#define ENABLE_HARDWARE_ACCELERATION 0
#define ENABLE_HARDWARE_ACCELERATION_FOR_TEXT 0
#define ENABLE_GFX_ENGINES 0
#define ENABLE_ARM_NEON 0
#define ENABLE_ROTATE_INPUT 1
#define ENABLE_VIBRATOR 0
#define ENABLE_FOCUS_MANAGER 1
#define LOCAL_RENDER 0

#if (defined(__ARM_NEON__) || defined(__ARM_NEON)) && ENABLE_ARM_NEON == 1
#define ARM_NEON_OPT
#endif

#define ENABLE_BUFFER_RGBA 1
#define ENABLE_DEBUG 1
#define ENABLE_MEMORY_HOOKS 0
#define ENABLE_FPS_SUPPORT 1
#define ENABLE_ANTIALIAS 1
#define ENABLE_RECT_ANTIALIAS 0
#define ENABLE_SPEC_FONT 0
#define ENABLE_GRAPHIC_LOG 1
#define ENABLE_DEBUG_PERFORMANCE_TRACE 0
#define ENABLE_AOD 0

#define GRAPHIC_LOG_LEVEL 5
#define COLOR_DEPTH 32
#define LAYER_PF_CODE 1
#define DEFAULT_VECTOR_FONT_FILENAME "font.ttf"

#ifdef CONFIG_DISPLAY_RM69330
#define HORIZONTAL_RESOLUTION 454
#define VERTICAL_RESOLUTION 454
#elif defined(CONFIG_DISPLAY_ICNA3311)
#define HORIZONTAL_RESOLUTION 280
#define VERTICAL_RESOLUTION 456
#elif defined(CONFIG_DISPLAY_A064)
#define HORIZONTAL_RESOLUTION 480
#define VERTICAL_RESOLUTION 480
#endif

#define VECTOR_FONT_DIR "/data/" // It must end with '/'.

#define IMG_CACHE_SIZE 8

#endif // PRODUCT_GRAPHIC_LITE_CONFIG_H
