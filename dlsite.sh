#!/bin/bash

# でぃーえる農場
curl -sIL -X GET "https://www.dlsite.com/books/event/dlfarm/ajax?act=draw" -H "Cookie:$1"

exit 0
