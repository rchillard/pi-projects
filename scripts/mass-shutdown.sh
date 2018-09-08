#!/bin/bash
source pi-ip-addresses

echo "The following Pi targets will be shutdown:"

for ip in ${IPs[*]}
do
  echo "$ip"
done

echo "----------------"

read -p "Continue with shutdown procedure (y/n)?" choice
case "$choice" in
  y|Y )
    for ip in ${IPs[*]}
    do
      echo "Shutting down Raspberry Pi @ $ip"
      ssh -o ConnectTimeout=1 pi@$ip 'sudo shutdown -h now'
      echo "Raspberry Pi @ $ip closed connection"
    done
    ;;
  n|N )
    echo "Aborting shutdown operation"
    ;;
  * )
    echo "Invalid input, aborting"
    ;;
esac
