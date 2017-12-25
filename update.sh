#!/bin/bash
forever stop app.js
git fetch && git merge
forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json
tail -f ./logs/sth.log