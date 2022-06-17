#!/bin/bash

# でぃーえる農場
curl -siL -X GET "https://www.dlsite.com/books/event/dlfarm/ajax?act=draw" -H "Cookie:$1"

exit 0
