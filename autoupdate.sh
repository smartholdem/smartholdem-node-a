#!/bin/bash
forever stop app.js
git fetch && git merge
npm install
forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json