#!/bin/bash
forever stop app.js
sudo apt-get update -y
git fetch && git merge
git pull
npm install -g npm forever grunt-cli
npm install
forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json