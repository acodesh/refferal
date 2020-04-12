#!/bin/bash 
set -e

source ~/.nvm/nvm.sh

# go to the directory
echo "Going to directory"
cd <LIVE_SERVER_PATH>

echo "Removing the server"
rm -rf node_modules

echo "Installing node"
node -v

echo "Installing node modules"
npm install
 
echo "installing pm2"
npm install pm2

#Restart the node server  
echo "server reset"
npm start
