#!/bin/sh
forever stop app.js
forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json