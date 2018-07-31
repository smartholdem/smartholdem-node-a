# SmartHoldem Full Node Level A

This full node level A SmartHoldem network

# Ubuntu Installation

Recommend 2 CPU 3.4Ghz / HDD SSD 40GB / RAM 4Gb / OS Ubuntu 16 LTS


from root user:

```shell
sudo apt-get update && sudo apt-get dist-upgrade -y
adduser smartholdem
usermod -a -G sudo smartholdem
cd /home/smartholdem
su smartholdem
```

ENTER smartholdem user password (if it is needed)

```shell
sudo apt-get install postgresql postgresql-contrib libpq-dev build-essential g++ python git curl ntp -y
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
nvm install 8.11.1 >>install.log
nvm use 8.11.1 >>install.log
nvm alias default 8.11.1
npm install -g npm forever grunt-cli
npm install
```

- Edit Secret config

```shell
nano secret.json
```

insert your key

```json
{
    "secret": ["your delegate address secret pass phrase twelve words"]
}
```
  CTRL+o (save file)
  
  CTRL+x (exit editor)

- To quickly load the block chain & start your Node-A, use the command:

```shell
sh firststart.sh
sh console.sh
```

- For standard start, if you did not use the previous item:

```shell
forever start app.js
```
    
- For logs view:

```shell
bash console.sh
```

- Update Node-A scripts:
```shell
bash update.sh
```


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
app.js --genesis genesisBlock.smartholdem.json --config config.smartholdem.json
```

To destroy and revert to the original state:

```shell
vagrant destroy
```

# Tests

Load git submodule

```shell
git submodule init
git submodule update
```

Run the test suite:

```shell
npm test
```

Run individual tests:

```shell
npm test -- test/api/accounts.js
```


# IMPORTANT NOTE

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.