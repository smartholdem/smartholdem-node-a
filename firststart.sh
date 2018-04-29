forever stop app.js
echo 'Getting last snapshot..'
#wget http://snapshots.smartholdem.io/snapshot.zip
wget http://snapshots.smartholdem.io/snapshot
#unzip snapshot.zip
dropdb sth_smartholdem
createdb sth_smartholdem
echo 'DB recreate!'
echo 'Import Dump BlockChain..'
#psql sth_smartholdem < snapshot_last
pg_restore -d sth_smartholdem --role=$USER snapshot
echo 'Success!'
#rm snapshot.zip
#rm snapshot_last
rm snapshot
forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json
tail -f ./logs/sth.log