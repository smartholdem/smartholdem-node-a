forever stop app.js
echo 'Getting last snapshot for' $USER
wget http://snapshots.smartholdem.io/snapshot
dropdb sth_smartholdem
createdb -E UTF8 -T template0 --lc-collate=en_US.UTF-8 --lc-ctype=en_US.utf8 sth_smartholdem
echo 'DB recreate!'
echo 'Loading Full BlockChain, please wait..'
pg_restore -d sth_smartholdem --role=$USER snapshot >&- 2>&-
echo 'Success!'
rm snapshot
forever start app.js --config config.json --genesis genesisBlock.json
tail -f ./logs/sth.log
