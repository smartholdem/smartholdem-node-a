# SmartHoldem Full Node Level A

This full node level A SmartHoldem network

# Ubuntu Installation

Recommend 2xCPU 2Ghz / HDD SSD 40GB / RAM 4Gb / OS Ubuntu 18-20


from root user:

```shell
sudo apt-get update && sudo apt-get dist-upgrade -y
adduser smartholdem
usermod -a -G sudo smartholdem
cd /home/smartholdem
su smartholdem
```

ENTER user password (if it is needed)

```shell
sudo apt-get install postgresql postgresql-contrib libpq-dev build-essential g++ python git curl ntp -y
sudo apt-get install jq libtool autoconf locales automake locate zip unzip htop nmon iftop nano -y
```

ENTER user password (if it is needed)

```shell
sudo locale-gen en_US.UTF-8
sudo -u postgres psql -c "CREATE USER $USER WITH PASSWORD 'password' CREATEDB;" >&- 2>&-
createdb sth_smartholdem
git clone -b master https://github.com/smartholdem/smartholdem-node-a.git node
cd node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh 2>/dev/null | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 12.22.7
nvm use 12.22.7
nvm alias default 12.22.7
npm install -g npm forever grunt-cli
npm install
```

### Blockchain synchronization in 5 minutes

```shell
sh firststart.sh
```


### Edit Secret config (add your delegate)

```shell
mv sample.secret.json secret.json
nano secret.json
```

insert your key

```json
{
    "secret": ["delegate secret pass phrase twelve words"]
}
```
  CTRL+o (save file)

  CTRL+x (exit editor)


### Standard start in background process/restart/update:

```shell
sh update.sh
```

### For logs view:

```shell
sh log.sh
```

### Simple Update Node-A scripts:
```shell
sh update.sh
```

# Node-A Upgrade

```shell
cd node
sh stop.sh
git checkout -p
git pull
rm -rf node_modules
nvm install 8.16.0
nvm use 8.16.0
nvm alias default 8.16.0
npm install -g npm forever grunt-cli
npm install
sh update.sh
```

reenter pass phrase if nessesary

```
nano secret.json
```

insert pass phrase

```json
{
    "secret": ["your delegate address secret phrase twelve words"]
}
```

CTRL+o, CTRL+x

## Docs Generate

```shell
npm install -g docco
docco -t docs/template/smartholdemio.jst -c docs/template/smartholdemio.css modules/* app.js README.md
```

---

# Dev Install

## Vagrant

Vagrant is a virtual development environment manager backed by a provider like VirtualBox.

To start the Vagrant environment:

```shell
vagrant up
```

All dependency installation and configuration for the dev environment is in the VagrantFile.
After installation, your current folder will be sync with folder /vagrant.

To log into the Vagrant environment:

```shell
vagrant ssh
```

To start node:

```shell
app.js --genesis genesisBlock.json --config config.json
```

To destroy and revert to the original state:

```shell
vagrant destroy
```

## Licenses

The MIT License (MIT)

Copyright (c) 2018-2021 SmartHoldem
Copyright (c) 2016 Ark
Copyright (c) 2016 Lisk
Copyright (c) 2014-2015 Crypti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


# IMPORTANT NOTE

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

    Русские братья идут...
