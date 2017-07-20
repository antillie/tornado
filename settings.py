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
CERT_ROOT = path(ROOT, "cert")

# TLSv1.2 only.
ssl_context = ssl.SSLContext(protocol=ssl.PROTOCOL_TLSv1_2)

# PFS only, AES only, GCM before CBC.
ssl_context.set_ciphers("ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA")

# Enforce cipher prefernce order server side.
ssl_context.options += ssl.OP_CIPHER_SERVER_PREFERENCE

# Generate new ECDH seeding material for each and every TLS handshake.
ssl_context.options += ssl.OP_SINGLE_ECDH_USE

# Load up our cert and key.
#ssl_context.load_cert_chain(certfile=os.path.join(CERT_ROOT, "tun0.crt"), keyfile=os.path.join(CERT_ROOT, "tun0.key"))

settings = {}
settings["template_path"] = SITE_ROOT
settings["cookie_secret"] = "ety6hFH25kfw245Jfhn7eth^weg235Ee345GFE%UYJA"
settings["xsrf_cookies"] = False
settings['ssl_options'] = ssl_context
settings["db"] = async_db()
