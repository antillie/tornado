#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

def make_page_args(uri, user):
        
        if user is None:
            user = "invalid"
        
        page_args = {}
        page_args["content"] = "some dynamic content"
        page_args["user"] = user
        
        return page_args
