#!/bin/bash
forever stop app.js >&- 2>&-
forever start app.js --config config.json --genesis genesisBlock.json >&- 2>&-
tail -f ./logs/sth.log
