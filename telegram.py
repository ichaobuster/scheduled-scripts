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
# Emby签到
# client.send_message("@PronembyTGBot2_bot", '/start')
# time.sleep(15)
# messages = client.get_messages('@PronembyTGBot2_bot')
# messages[0].click(1)
client.send_message("@PronembyTGBot2_bot", '/checkin')
time.sleep(2)
messages = client.get_messages('@PronembyTGBot2_bot')
messages[0].click(0, 0)

# 标记已读
time.sleep(3)
client.send_read_acknowledge("@renzhecloudbot")
client.send_read_acknowledge("@PronembyTGBot2_bot")

client.disconnect()
