#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

import os
import ssl
from tornado.options import define
from db import async_db

# Make filepaths relative to settings.
path = lambda root, *a: os.path.join(root, *a)
ROOT = os.path.dirname(os.path.abspath(__file__))

define("config", default=None, help="tornado config file")
define("debug", default=True, help="debug mode")

SITE_ROOT = path(ROOT, "sites")
CERT_ROOT = "/etc/letsencrypt/live/www.tun0.com/"

# TLSv1.2 only.
ssl_context = ssl.SSLContext(protocol=ssl.PROTOCOL_TLSv1_2)

# PFS only, AES only, GCM before CBC.
ssl_context.set_ciphers("ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA")

# Enforce cipher prefernce order server side.
ssl_context.options += ssl.OP_CIPHER_SERVER_PREFERENCE

# Generate new ECDH seeding material for each and every TLS handshake.
ssl_context.options += ssl.OP_SINGLE_ECDH_USE

# Load up our cert and key.
ssl_context.load_cert_chain(certfile=os.path.join(CERT_ROOT, "fullchain.pem"), keyfile=os.path.join(CERT_ROOT, "privkey.pem"))

settings = {}
settings["template_path"] = SITE_ROOT
settings["cookie_secret"] = "IxOF8YVhQ3im5Kwts+lVBUQ2MbCNlEC2pgazG9TsmYI="
settings["xsrf_cookies"] = True
settings['ssl_options'] = ssl_context
settings["db"] = async_db()
settings['websocket_ping_interval'] = 250
settings['websocket_ping_timeout'] = 10
