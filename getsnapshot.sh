#!/bin/bash
forever stop app.js
wget http://explorer.smartholdem.io/snapshots/sth_smartholdem.191200
dropdb sth_smartholdem
createdb sth_smartholdem
psql sth_smartholdem < sth_smartholdem.191200