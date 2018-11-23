#!/bin/bash
forever stop app.js
forever cleanlogs
git fetch && git merge
forever start app.js --config config.json --genesis genesisBlock.json
tail -f ./logs/sth.log
