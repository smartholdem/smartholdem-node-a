forever stop app.js
rm snapshot_dev.zip
rm snapshot_dev
wget http://snapshots.smartholdem.io/snapshot_dev.zip
dropdb sth_devnet
createdb sth_devnet
psql sth_devnet < snapshot_dev
TOP=true forever start app.js --config config.devnet.json --genesis genesisBlock.devnet.json
tail -f ./logs/sth.log