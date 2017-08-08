#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado import gen
import bcrypt
from settings import settings

@gen.coroutine
def api_process(uri, payload, user):
    
    # Load our database object.
    db = settings["db"]
    
    if user is None:
        user = "invalid"
    
    result = {}
    result["login"] = False
    
    if uri == "login":
    
        # Compute the hash of the provided password.
        pw_hash = bcrypt.hashpw(payload["password"], bcrypt.gensalt())
        
        # Find the user in the DB and see if the password hashes match. # TODO.
        #collection_names = yield db.tun0.collection_names(include_system_collections=False)
        
        result["uri"] = uri
        #result["db_collections"] = collection_names
        result["user"] = payload["user"]
        result["pw_hash"] = pw_hash
        result["login"] = True
    
    elif uri == "get_user":
        result["user"] = user
    
    # Return the resulting JSON object to the front end.
    raise gen.Return(result)
