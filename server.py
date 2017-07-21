#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-


import tornado.httpserver
import tornado.ioloop
import tornado.web

from settings import settings
from urls import url_patterns

class TornadoApp(tornado.web.Application):

    def __init__(self):
        tornado.web.Application.__init__(self, url_patterns, **settings)

def main():
    https_app = TornadoApp()
    https_server = tornado.httpserver.HTTPServer(https_app, ssl_options=settings['ssl_options'])
    https_server.listen("443")

    # Another instance listening on port 80 for HTTP -> HTTPS redirection.
    http_app = TornadoApp()
    http_server = tornado.httpserver.HTTPServer(http_app)
    http_server.listen("80")

    tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
    main()
