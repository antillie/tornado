#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado import gen
import bcrypt
from settings import settings
from tornado.httpclient import HTTPRequest, AsyncHTTPClient
import cjson
import json
import urllib

@gen.coroutine
def api_process(uri, payload, current_user, remote_ip):
    
    # Load our database object.
    db = settings["db"]
    
    result = {}
    result["login"] = False
    result["bad_captcha"] = False
    
    if uri == "login":
        ## Check if the user passed the captcha check.
        #google_url = "https://www.google.com/recaptcha/api/siteverify"
        #google_query = urllib.urlencode({
        #                    "secret": settings["captcha_secret"],
        #                    "response": payload["captcha"],
        #                    "remoteip": remote_ip
        #                    })
        #request = HTTPRequest(url=google_url, method='POST', body=google_query, validate_cert=False)
        #r = yield AsyncHTTPClient().fetch(request)
        #google_response = cjson.decode(r.body)
        #
        #if google_response["success"]:
        
        # Check if the user passed the captcha check.
        passed_captcha = yield check_captcha(payload["captcha"], remote_ip)
        if passed_captcha:
            # If they did then find the user in the DB and see if the password hashes match.
            db_user = yield db.tun0["users"].find_one({"name": payload["user"]}, projection={'_id': False})
            
            if db_user is not None:
                if bcrypt.hashpw(payload["password"], db_user["password"].encode('utf8')):
                    result["user"] = payload["user"]
                    result["login"] = True
        else:
            result["bad_captcha"] = True
    
    elif uri == "register":
        
    
    elif uri == "get_user":
        result["user"] = current_user
    
    # Return the resulting JSON object to the front end.
    raise gen.Return(result)

def print_json(blob):
    print(json.dumps(blob, sort_keys=True, indent=4, separators=(',', ': ')))

@gen.coroutine
def check_captcha(payload, remote_ip):
    
    google_url = "https://www.google.com/recaptcha/api/siteverify"
        google_query = urllib.urlencode({
                            "secret": settings["captcha_secret"],
                            "response": payload,
                            "remoteip": remote_ip
                            })
        request = HTTPRequest(url=google_url, method='POST', body=google_query, validate_cert=False)
        r = yield AsyncHTTPClient().fetch(request)
        google_response = cjson.decode(r.body)
        
        if google_response["success"]:
            raise gen.Return(True)
        else:
            raise gen.Return(False)
