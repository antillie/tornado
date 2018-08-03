#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

import cjson
from tornado import gen
from tornado.httpclient import HTTPRequest, AsyncHTTPClient
import platform

@gen.coroutine
def cpu_usage():
    
    try:
        if platform.node() == "sdf-3-galaxy":
            url = "http://minecraft.tun0.com:13300/cpu_usage"
        else:
            url = "http://192.168.200.55:13300/cpu_usage"
        
        request = HTTPRequest(url=url, method="POST", allow_nonstandard_methods=True)
        r = yield AsyncHTTPClient().fetch(request)
        response = cjson.decode(r.body)
        response["success"] = True
    
    except:
        response = {}
        response["success"] = False
    
    raise gen.Return(response)
