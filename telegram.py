# -*- coding: utf-8 -*-
import sys
import os
import time
import base64
from telethon import TelegramClient, events, sync

api_id = int(sys.argv[1])
api_hash = str(sys.argv[2])

with open('telethon.session', 'wb') as session_file:
    session_file.write(base64.b64decode(str(sys.argv[3])))

# 发送给 Telegram Bot 签到
client = TelegramClient("telethon.session", api_id, api_hash)
client.start()
# 以下为签到逻辑
# 忍者云签到
client.send_message("@renzhecloudbot", '/checkin')

# 标记已读
time.sleep(3)
client.send_read_acknowledge("@renzhecloudbot")

client.disconnect()
