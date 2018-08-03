#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado import gen
from tornado.httpclient import HTTPRequest, AsyncHTTPClient

@gen.coroutine
def get_cpu_usage():
    
    try:
        url = "http://minecraft.tun0.com/cpu_usage:13300"
        request = HTTPRequest(url=url, method="POST")
        r = yield AsyncHTTPClient().fetch(request)
        response = cjson.decode(r.body)
        raise gen.Return(response)
    except:
        raise gen.Return(None)
