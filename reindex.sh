#!/bin/bash
sh stop.sh
echo "BlockChain Optimize Started please wait.."
psql "postgresql://$USER:password@127.0.0.1/sth_smartholdem" -c 'REINDEX DATABASE sth_smartholdem'
psql "postgresql://$USER:password@127.0.0.1/sth_smartholdem" -c 'vacuum full analyze'
sh run.sh
