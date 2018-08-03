#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from tornado import gen
from mcstatus import MinecraftServer

def mc_query():
    
    result = {}
    result["up"] = False
    
    server = MinecraftServer.lookup("minecraft.tun0.com")
    
    try:
        query = server.query()
        result["up"] = True
        result["online"] = query.players.online
        result["max"] = query.players.max
        result["players"] = query.players.names
        result["motd"] = query.motd
    except:
        pass
        
    return result
