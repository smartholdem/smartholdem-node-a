forever stop app.js
echo 'Getting last snapshot..'
wget http://snapshots.smartholdem.io/snapshot.zip
unzip snapshot.zip
dropdb sth_smartholdem
createdb sth_smartholdem
echo 'DB recreate!'
echo 'Import Dump BlockChain..'
psql sth_smartholdem < snapshot_last
echo 'Success!'
rm snapshot.zip
rm snapshot_last
forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json
tail -f ./logs/sth.log