# SmartHoldem Full Node Level A

This full node level A SmartHoldem network

# Ubuntu Installation

Recommend 2 CPU 3.4Ghz / HDD SSD 60GB / RAM 4Gb / OS Ubuntu 16 LTS


from root user:

```shell
adduser smartholdem
usermod -a -G sudo smartholdem
cd /home/smartholdem
su smartholdem
sudo apt-get update && sudo apt-get dist-upgrade -y
```

ENTER smartholdem user password (if it is needed)

```shell
sudo apt-get install postgresql postgresql-contrib libpq-dev build-essential python git curl
sudo apt-get install jq libtool autoconf locales automake locate zip unzip htop nmon iftop -y
```

ENTER smartholdem user password (if it is needed)

```shell
sudo reboot
```

connect with smartholdem user to server

```shell
sudo -u postgres psql -c "CREATE USER $USER WITH PASSWORD 'password' CREATEDB;" >&- 2>&-
createdb sth_smartholdem
git clone -b master https://github.com/smartholdem/smartholdem-node-a.git
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
```

edit node config

```shell
nano config.smartholdem.json
```

insert your key into line 

```shell
"forging": {
    ...
        "secret": ["your delegate address secret passphrase"]
    ...
    }
```
  CTRL+o
  
  CTRL+x
  
```shell
forever start app.js
```  
    
for logs view: 
```shell
bash console.sh
```

update node sxcripts: 
```shell
bash update.sh
```


## Docs Generate

```shell
npm install -g docco
docco -t docs/template/smartholdemio.jst -c docs/template/smartholdemio.css modules/* app.js README.md
```

# Windows 7+

### Developer Installation Install essentials

```shell
Python(min version 2.7.0) URL -  https://www.python.org/downloads/ 
Visual Studio c++ 2010 express
```

```shell
Install Node.js (min version 6.9.5)
URL - https://nodejs.org/en/download/
```

```shell
Install PostgreSQL (min version 9.0)
URL -  http://www.postgresql.org/download/windows/
```

### Add following environment variable:

```shell
PATH as C:\Program Files\PostgreSQL\9.5\bin 
(Windows Start -> Right click on Computer → Advanced System settings → Environment variables)
Modify the file ‘pg_hba’, present at the location  C:\Program Files\PostgreSQL\9.5\data\pg_hba
Replace ‘md5’ with ‘trust’  under ‘METHOD’ column
```

### Restart psql:

```shell
My Computer → Manage → Services and Application → Services → Restart postgres service
Alter postgres user:
psql -U postgres
alter user postgres with password 'User Password'
Create database:
Create database ‘Database Name’ Name’  (this should match with the database name from config file)
```

### Clone repository:

```shell
git clone https://github.com/smartholdem/smartholdem-node-a.git (make sure you have git installed)
cd smartholdem-node-a
git checkout
```

### Install node modules:

```shell
npm install --global --production windows-build-tools 
npm install libpq secp256k1
npm install
```

### Add configurations for your node:

```shell
Change the following in config.mainnet.json:
“address“: “set your IP”
“database”: “set database name”
“user”: “set database user”
“password”: “set database password”
“list”: [
	{
		“ip”: “set your IP address”
		“port”: “set the port on which your node will be running”
},
{
//For 5 Windows nodes, seed IP is already configured in the shared 5 files so no need of adding this entry
		“ip”: “Set seed node IP address”
		“port”: “set the port on which seed node will be running”
}
]
```

### Launch node on mainnet:

```shell
npm run start:mainnet
```


# Dev Install

## Vagrant

Vagrant is a virtual development environment manager backed by a provider like VirtualBox.

To start the Vagrant environment:

```shell
vagrant up
```

All dependency installation and configuration for the dev environment is in the VagrantFile. After installation, smartholdem-node-a will automatically start and log all output to the console.

To log into the Vagrant environment:

```shell
vagrant ssh
```

To destroy and revert to the original state:

```shell
vagrant destroy
```

There will be a drive shared with the host machine inside the VM, mounted at /vagrant.

# Tests

Load git submodule

```shell
git submodule init
git submodule update
```

