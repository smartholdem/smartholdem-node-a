# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 6000, host: 6000
  config.vm.synced_folder  ".", "/vagrant", type: "rsync", rsync__auto: true,  rsync__exclude: [".git/", ".idea/", "node_modules", ".vagrant"]
  config.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
      vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end

  config.vm.provision :shell, privileged: false, inline: <<-SHELL
    log="smartholdem-install.log"

    sudo apt-get update
    echo -e "Installing tools... "
    sudo apt-get install -yyq build-essential wget python git curl jq htop nmon iftop

    if [ $(dpkg-query -W -f='${Status}' postgresql 2>/dev/null | grep -c "ok installed") -eq 0 ];
    then
      echo -e "Installing postgresql... "
      sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
      wget -q https://www.postgresql.org/media/keys/ACCC4CF8.asc -O - | sudo apt-key add -
      sudo apt-get update
      sudo apt-get install -yyq postgresql postgresql-contrib libpq-dev
    else
      echo -e "Postgresql is already installed."
    fi

    if ! sudo pgrep -x "ntpd" > /dev/null; then
        echo -e "No NTP found. Installing... "
        sudo apt-get install ntp -yyq &>> $log
        sudo service ntp stop &>> $log
        sudo ntpd -gq &>> $log
        sudo service ntp start &>> $log
        if ! sudo pgrep -x "ntpd" > /dev/null; then
          echo -e "NTP failed to start! It should be installed and running for SmartHoldem.\n Check /etc/ntp.conf for any issues and correct them first! \n Exiting."
          exit 1
        fi
        echo -e "NTP was successfuly installed and started with PID:" `grep -x "ntpd"`
    else echo "NTP is up and running with PID:" `pgrep -x "ntpd"`

    fi # if sudo pgrep

    echo "-------------------------------------------------------------------"

    # Installing node
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install nodejs
    sudo npm install -g n

    sudo n 6.9.1
    sudo npm install forever -g

    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

    # Creating DB and user
    sudo -u postgres psql -c "CREATE USER $USER WITH PASSWORD 'password';"
    #sudo -u postgres createuser --createdb --password $USER
    sudo -u postgres createdb -O $USER sth_smartholdem
    sudo service postgresql start
    cd /vagrant
    npm install grunt-cli
    npm install
  SHELL

  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
    v.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
    v.name = "smartholdem_mainnet_vm"
  end


end
