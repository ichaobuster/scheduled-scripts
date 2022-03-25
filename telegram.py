# -*- coding: utf-8 -*-
import os
import time
from telethon import TelegramClient, events, sync

api_id = 
api_hash = ""

# 发送给 Telegram Bot 签到
session_name = "id_" + str(api_id)
client = TelegramClient(session_name, api_id, api_hash)
client.start()
# 以下为签到逻辑
# 忍者云签到
client.send_message("@renzhecloudbot", '/checkin')
# Emby签到
client.send_message("@PronembyTGBot2_bot", '/start')
time.sleep(3)
messages = client.get_messages('@PronembyTGBot2_bot')
messages[0].click(1)
# 标记已读
client.send_read_acknowledge("@renzhecloudbot")
client.send_read_acknowledge("@PronembyTGBot2_bot")

client.disconnect()
