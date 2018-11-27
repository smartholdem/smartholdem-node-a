#!/bin/bash
forever stop app.js
forever start app.js --config config.json --genesis genesisBlock.json >&- 2>&-
