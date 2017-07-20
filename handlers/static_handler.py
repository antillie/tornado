#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado.web import StaticFileHandler
from tornado import gen
import random

class StaticHandler(StaticFileHandler):
    
    ## Redirect all HTTP requests to HTTPS except for LetsEncrypt certbot challenges.
    #def prepare(self):
    #    if self.request.protocol == "http":
    #        if not ".well-known" in self.request.uri:
    #            self.redirect("https://%s" % self.request.full_url()[len("http://"):], permanent=True)
    
    @gen.coroutine
    def get(self, path, include_body=True):
        self.path = self.parse_url_path(path)
        
        # Default index filename.
        if self.path == "":
            self.path = "index.htm"
        
        # Build the filesystem path to the site.
        self.absolute_path = self.root + "/" + self.request.host + "/" + self.path
        try:
            self.render(self.absolute_path)
        except:
            self.write_error(404)
            
    # Override the builtin set_default_headers function to add our custom response headers.
    def set_default_headers(self):
        # Enable HSTS and X-Frame-Options as mandated by tinfoil hat protocol.
        if self.request.protocol == "https":
            # HSTS only for HTTPS connections.
            self.set_header("Strict-Transport-Security", "max-age=315360000;")
        
        self.set_header("X-Frame-Options", "SAMEORIGIN")
        # We are an imaginary server... wooOOOooOOOooooOOoo...
        self.set_header("Server", "Imaginary...wooOOOooOOOooooOOoo...")
    
    def get_cache_time(self, path, modified, mime_type):
        # Normal static content should only be cached for one hour.
        return self.CACHE_MAX_AGE if "v" in self.request.arguments else 3600
    
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
        
        self.set_status(404)
        self.render("404.htm")
