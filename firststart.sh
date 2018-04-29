forever stop app.js
rm snapshot_dev.zip
rm snapshot_dev
echo 'Getting last snapshot..'
wget http://snapshots.smartholdem.io/snapshot_dev.zip
unzip snapshot_dev.zip
dropdb sth_devnet
createdb sth_devnet
echo 'DB recreate!'
echo 'Import Dump Blockchain..'
psql sth_devnet < snapshot_dev
echo 'Success!'
TOP=true forever start app.js --config config.devnet.json --genesis genesisBlock.devnet.json
tail -f ./logs/sth.log