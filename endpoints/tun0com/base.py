#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado import gen
import bcrypt
from settings import settings

@gen.coroutine
def api_process(uri, payload):
    
    # Load our database object.
    db = settings["db"]
    
    #if user is None:
    #    user = "invalid"
    
    result = {}
    result["login"] = False
    
    if uri == "login":
    
        # Compute the hash of the provided password.
        pw_hash = bcrypt.hashpw(payload["password"], bcrypt.gensalt())
        
        # Find the user in the DB and see if the password hashes match. # TODO.
        db_user = yield db.tun0["users"].find_one({"name": payload["user"]}, projection={'_id': False})
        
        if pw_hash == db_user["password"]:
            result["user"] = payload["user"]
            result["login"] = True
        else:
            result["user"] = None
            result["hash"] = pw_hash
    
    elif uri == "get_user":
        result["user"] = self.current_user
    
    # Return the resulting JSON object to the front end.
    raise gen.Return(result)
