#!/bin/bash
forever stop app.js
git fetch && git merge
forever start app.js --config config.testnet.json --genesis genesisBlock.testnet.json
tail -f ./logs/sth.log