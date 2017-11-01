#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado import gen
import tornado.web
import random
import cjson
from settings import settings

class EndpointHandler(tornado.web.RequestHandler):
    
    # Make the database object.
    def initialize(self):
        self.db = settings["db"]
    
    ## Redirect all HTTP requests to HTTPS except for LetsEncrypt certbot challenges.
    def prepare(self):
        token = self.xsrf_token
        if self.request.protocol == "http":
            if not ".well-known" in self.request.uri:
                self.redirect("https://%s" % self.request.full_url()[len("http://"):], permanent=True)
    
    # Use our secure cookie to detect authenticated users.
    def get_current_user(self):
        return self.get_secure_cookie("user")
    
    @gen.coroutine
    def post(self, uri):
        
        payload = cjson.decode(self.request.body)
        
        if "tun0.com" in self.request.host:
            from endpoints.tun0com.base import api_process
        
        result = yield api_process(uri, payload, self.current_user, self.request.remote_ip)
        
        if result["bad_captcha"]:
            self.write_error(400)
        elif result["login"]:
            # If this was a sucessful login then set the session cookie.
            self.set_secure_cookie("user", result["user"], secure=True, httponly=True)
            del result["bad_captcha"]
            self.write(result)
        else:
            del result["bad_captcha"]
            self.write(result)
        
        
    # Override the builtin set_default_headers function to add our custom response headers.
    def set_default_headers(self):
        # Enable HSTS and X-Frame-Options as mandated by tinfoil hat protocol.
        if self.request.protocol == "https":
            # HSTS only for HTTPS connections.
            self.set_header("Strict-Transport-Security", "max-age=31536000; includeSubDomains;")
        
        self.set_header("X-Frame-Options", "SAMEORIGIN")
        # We are an imaginary server... wooOOOooOOOooooOOoo...
        self.set_header("Server", "Imaginary...wooOOOooOOOooooOOoo...")
        
    # Override the builtin write_error function to make all errors 404 errors and add funny response headers.
    def write_error(self, status_code, **kwargs):
        
        taunts = []
        taunts.append("Now go away or I will taunt you a second time.")
        taunts.append("My server is full of eels...")
        taunts.append("Ni!")
        taunts.append("It's just an HTTP request. I've had worse.")
        taunts.append("This server is an anarcho-syndicalist commune.")
        taunts.append("...The server of aaarrrrhhg.")
        taunts.append("THIS IS AN EX-SERVER!!")
        taunts.append("I'm sorry to have kept you waiting, but I'm afraid this server has become rather sillier recently.")
        taunts.append("You can't expect to weild supreme executive power just beause some monopolistic search engine threw an nmap guide at you.")
        taunts.append("Nobody expects the Spanish Inquisition!")
        taunts.append("Let's not bicker and argue over who scanned who.")
         
        self.set_header("Answer", random.choice(taunts))
        if status_code == 400:
            self.set_status(400)
        else:
            self.set_status(404)
        self.render("404.htm")

