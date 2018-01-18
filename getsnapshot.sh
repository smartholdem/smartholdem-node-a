#!/bin/bash
forever stop app.js
rm current
wget http://explorer.smartholdem.io/snapshots/current
dropdb sth_smartholdem
createdb sth_smartholdem
psql sth_smartholdem < current
forever start app.js
tail -f ./logs/sth.log