#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

def api_process(uri, payload):
    
    result = {}
    result["uri"] = uri
    result["value1"] = "A text string."
    result["value2"] = ["a", "list", "item"]
    result["payload"] = payload
    
    return result
