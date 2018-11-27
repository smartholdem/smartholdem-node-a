#!/bin/bash
forever stop app.js
forever cleanlogs
git fetch && git merge
forever start app.js --config config.json --genesis genesisBlock.json >&- 2>&-
tail -f ./logs/sth.log
