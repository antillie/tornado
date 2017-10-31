#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado import gen
import bcrypt
from settings import settings

@gen.coroutine
def api_process(uri, payload, current_user):
    
    # Load our database object.
    db = settings["db"]
    
    #if user is None:
    #    user = "invalid"
    
    result = {}
    result["login"] = False
    
    if uri == "login":
    
        # Find the user in the DB and see if the password hashes match.
        db_user = yield db.tun0["users"].find_one({"name": payload["user"]}, projection={'_id': False})
        
        if bcrypt.hashpw(payload["password"], db_user["password"].encode('utf8')):
            result["user"] = payload["user"]
            result["login"] = True
        else:
            result["user"] = None
    
    elif uri == "get_user":
        result["user"] = current_user
    
    # Return the resulting JSON object to the front end.
    raise gen.Return(result)
