#!/bin/bash
forever stop app.js >&- 2>&-
forever cleanlogs
rm ./logs/sth.log
touch ./logs/sth.log
git fetch && git merge
forever start app.js --config config.json --genesis genesisBlock.json >&- 2>&-
tail -f ./logs/sth.log

