#!/bin/bash

# 刷新Emby播放天数（测试）
curl -X GET "$1/emby/Users/$2?X-Emby-Token=$3"

exit 0
