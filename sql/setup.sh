#!/bin/bash

# For Fedora
#apt-get install postgresql-dev postgresql-server
#npm install pg 

# Fedora:
# sudo service postgresql initdb
# sudo systemctl start postgresql

# The following line has not been tested yet... ! (psql manual insertion has been tested, script has been tested,
# stdin "<" operator has not)
sudo su postgres -c 'psql -d postgres < ./setup.sql'

# Replace the configuration by our md5 passwords for all local users.
sudo cp ./pg_hba.conf /etc/postgresql/9.1/main/pg_hba.conf
sudo su postgres -c 'psql -d postgres -U velovunchained -W < ./schema.sql'
sudo su postgres -c 'psql -d postgres -U velovunchained -W < ./data.sql'
