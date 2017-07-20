#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

import motor.motor_tornado
import platform
import os

class async_db():
    def __init__(self):
        
        # Get our database credentials from the evironment variables passed in by supervisor. This way they aren't stored in the git repo. ;)
        self.db_user = os.environ.get('DB_USER', '')
        self.db_pass = os.environ.get('DB_PASS', '')
        
        # Local vs remote detection.
        if platform.node() == "sdf-3-galaxy": # Yes yes, it was really called Pioneer. I know.
            # Web server, connect with local IP.
            self.instance = motor.motor_tornado.MotorClient("mongodb://{0}:{1}@172.18.200.1:27017/admin".format(self.db_user, self.db_pass))
        else:
            # Somewhere else, connect with public IP. (Access to port 27017 is restricted to IPs that are whitelisted on the firewall.)
            self.instance = motor.motor_tornado.MotorClient("mongodb://{0}:{1}@23.253.90.75:27017/admin".format(self.db_user, self.db_pass))
        
        # Database instances. One per site.
        self.tun0 = self.instance["tun0"]
        self.markeloffdesign = self.instance["markeloffdesign"]
        self.kandridasjourney = self.instance["kandridasjourney"]
        self.thepathofcrimsonrain = self.instance["thepathofcrimsonrain"]
