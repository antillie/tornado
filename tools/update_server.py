#!/usr/local/bin/python2.7
# -*- coding: utf-8 -*-

from __future__ import print_function

import argparse
from argparse import RawTextHelpFormatter
import paramiko
import getpass
import os
import re
import warnings
from termcolor import cprint

parser = argparse.ArgumentParser(description="Performs a \"git pull\" on the web server and restarts tornado.\n\
Or you can supply a custom command to run.\n\
This custom command may optionally be run as root.\n\n\
Defaults to your local username and SSH key for authentication.\n\
Both of these paramaters can be overridden if needed.\n\
Password authentication is *not* supported.", formatter_class=RawTextHelpFormatter)
parser.add_argument("-u", help="Your username on the server. ex: -u myuser")
parser.add_argument("-k", help="Custom path to your SSH keyfile. ex: -k /some/strange/dir/id_rsa")
parser.add_argument("-c", help="Run a custom command instead. ex: -c who")
parser.add_argument("-r", action="store_true", help="Run the custom command from \"-c\" as root.")
args = parser.parse_args()

class ShellHandler:

    def __init__(self, ip, username, sshkey):
        
        print("Trying to connect to " + ip + " as " + username)
        self.ip = ip
        
        with warnings.catch_warnings():
            warnings.simplefilter("ignore")
            self.ssh = paramiko.SSHClient()
            self.ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            
            try:
                self.ssh.connect(ip, username=user, password="", key_filename=sshkey)
                self.connected = True
                print("Connected...")
                print("")
            except Exception as e:
                print("Connection Error: " + e)
                self.connected = False
                return
                
        channel = self.ssh.invoke_shell()
        self.stdin = channel.makefile('wb')
        self.stdout = channel.makefile('r')
        self.user = username

    def __del__(self):
        if self.connected:
            print("Closed connection to: " + self.ip)
            self.ssh.close()

    def execute(self, cmd):
        
        if "sudo su" in cmd:
            parts = cmd.split()
            if len(parts) > 3:
                new_user = parts[3]
            else:
                new_user = "root"
            cprint("Switching to user \"" + new_user + "\"", 'grey', 'on_blue')
        elif "exit" in cmd:
            cprint("Reverting to to user \"" + self.user + "\"", 'grey', 'on_blue')
        
        self.stdin.write(cmd + '\n')
        finish = "end of stdOUT buffer for " + cmd
        echo_cmd = 'echo {}'.format(finish)
        self.stdin.write(echo_cmd + '\n')
        shin = self.stdin
        self.stdin.flush()
        
        shout = []
        sherr = []
        
        for line in self.stdout:
            if str(line).startswith(cmd) or str(line).startswith(echo_cmd):
                # up for now filled with shell junk from stdin
                continue
            if finish in line:
                # Stop listening for output when the buffer ends.
                break
            else:
                # Get rid of coloring and formatting special characters
                shout.append(re.compile(r'(\x9B|\x1B\[)[0-?]*[ -/]*[@-~]').sub('', line).replace('\b', '').replace('\r', ''))
        for line in shout:
            if not "Last login" in line and not "end of stdOUT buffer for" in line:
                print(line, end="")

user = getpass.getuser()
homedir = os.path.expanduser('~')
sshkey = homedir + "/.ssh/id_rsa"

if args.u:
    user = args.u
    
if args.k:
    sshkey = args.k

if args.r and not args.c:
    print("-r requires a custom command from -c, ignoring -r")
    print("")

shell_list = []
server_ips = ["23.253.125.19"]

for ip in server_ips:
    shell_list.append(ShellHandler(ip, user, sshkey))
    
for shell in shell_list:
    
    if shell.connected:
        if args.c:
            cprint("Running \"" + args.c + "\" on: " + shell.ip, 'grey', 'on_green')
            if args.r:
                shell.execute("sudo su -")
            shell.execute(args.c)
        else:
            cprint("Running git pull and tornado restart command sequence on: " + shell.ip, 'grey', 'on_green')
            print("")
            shell.execute("cd tornado")
            shell.execute("git pull")
            shell.execute("sudo su -")
            shell.execute("supervisorctl restart all")
            
        print("")
        print("Done running commands on: " + shell.ip)
        print("")
    else:
        cprint("Not connected to: " + shell.ip, 'grey', 'on_yellow')
        cprint("Skipping...", 'grey', 'on_yellow')
        print("")

print("All done.")
print("")
