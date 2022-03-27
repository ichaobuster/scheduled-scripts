#!/bin/bash

# でぃーえる農場
curl -sIL -X GET "https://www.dlsite.com/books/event/dlfarm/ajax?act=draw" -H "Host:www.dlsite.com" -H "Referer:https://www.dlsite.com/books/" -H "Cookie:$1"

exit 0
