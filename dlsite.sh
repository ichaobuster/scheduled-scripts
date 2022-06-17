#!/bin/bash

# でぃーえる農場
curl -sL -X GET "https://www.dlsite.com/books/event/dlfarm/ajax?act=draw" -H "Cookie:$1"

exit 0
