forever stop app.js
echo 'Getting last snapshot for' $USER
#wget http://snapshots.smartholdem.io/snapshot.zip
wget http://snapshots.smartholdem.io/snapshot
#unzip snapshot.zip
dropdb sth_smartholdem
createdb -E UTF8 -T template0 --lc-collate=en_US.UTF-8 --lc-ctype=en_US.utf8 sth_smartholdem
echo 'DB recreate!'
echo 'Loading Full BlockChain, please wait..'
#psql sth_smartholdem < snapshot_last
pg_restore -d sth_smartholdem --role=$USER snapshot >&- 2>&-
echo 'Success!'
#rm snapshot.zip
#rm snapshot_last
rm snapshot
forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json
tail -f ./logs/sth.log
