# SmartHoldem Full Node Level A

This full node level A SmartHoldem network

# Ubuntu Installation

Recomend 2 CPU 3.4Ghz / HDD SSD 60GB / RAM 4Gb

adduser smartholdem

usermod -a -G sudo smartholdem

cd /home/smartholdem

su smartholdem

sudo apt-get update && sudo apt-get dist-upgrade

sudo apt-get install postgresql postgresql-contrib libpq-dev build-essential python git curl jq libtool autoconf locales automake locate zip unzip htop nmon iftop
