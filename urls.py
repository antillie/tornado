#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from handlers.static_handler import StaticHandler
from handlers.dynamic_handler import DynamicHandler
from handlers.endpoint_handler import EndpointHandler

from settings import settings

url_patterns = [

    (r'/dyn(.*)', DynamicHandler),
    (r'/endpoints/(.*)', EndpointHandler),
    (r'/(.*)', StaticHandler, {'path': settings['template_path'], "default_filename": "index.htm"})
]
