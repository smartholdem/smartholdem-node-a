# SmartHoldem Full Node Level A

This full node level A SmartHoldem network

# Ubuntu Installation

Recomend 2 CPU 3.4Ghz / HDD SSD 60GB / RAM 4Gb / OS Ubuntu 16 LTS


from root user:

adduser smartholdem

usermod -a -G sudo smartholdem

cd /home/smartholdem

su smartholdem

sudo apt-get update && sudo apt-get dist-upgrade -y

sudo apt-get install postgresql postgresql-contrib libpq-dev build-essential python git curl jq libtool autoconf locales automake locate zip unzip htop nmon iftop -y

sudo reboot

connect with smartholdem user to server

sudo -u postgres psql -c "CREATE USER $USER WITH PASSWORD 'password' CREATEDB;" >&- 2>&-

createdb sth_smartholdem

git clone https://github.com/smartholdem/smartholdem-node-a.git

cd smartholdem-node-a

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh 2>/dev/null | bash

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install 6.9.5 >>install.log

nvm use 6.9.5 >>install.log

nvm alias default 6.9.5

npm install -g npm

npm install forever -g

npm install grunt-cli -g

npm install

nano config.smartholdem.json

insert your key into line 

"forging": {
    ...
    "secret": ["your_secret_passphrase"]
    ...
    }
  
  CTRL+o
  
  CTRL+x
  
  forever start app.js --config config.smartholdem.json --genesis genesisBlock.smartholdem.json
  
  for log view: tail -f ./logs/sth.log
