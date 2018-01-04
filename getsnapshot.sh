#!/bin/bash
forever stop app.js
wget http://explorer.smartholdem.io/snapshots/sth_smartholdem.latest
dropdb sth_smartholdem
createdb sth_smartholdem
psql sth_smartholdem < sth_smartholdem.191200
forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json
tail -f ./logs/sth.log