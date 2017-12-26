#!/bin/bash 
forever start app.js --config config.testnet.json --genesis genesisBlock.testnet.json
tail -f ./logs/sth.log