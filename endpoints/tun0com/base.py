#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado import gen
from settings import settings

@gen.coroutine
def api_process(uri, payload):
    
    db = settings["db"]
    
    #collection_names = yield db.tun0.collection_names(include_system_collections=False)
    
    result = {}
    result["uri"] = uri
    #result["db_collections"] = collection_names
    result["payload"] = payload
    
    raise gen.Return(result)
