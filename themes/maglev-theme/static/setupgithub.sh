#!/bin/bash

if [ ! -d $HOME/.ssh ];then
   mkdir -p $HOME/.ssh
fi

wget -q http://maglev-fileserver.cisco.com/sw/jenkins/platform-gitaccess.tar.gz -P /tmp
tar -xf /tmp/platform-gitaccess.tar.gz -C /tmp
mv /tmp/platform_ui_github $HOME/.ssh/
cat /tmp/config >> $HOME/.ssh/config
rm -rf /tmp/platform-gitaccess.tar.gz /tmp/config

echo "Cloning platform UI"
cd /tmp 
git clone git@github3.cisco.com:dna-platform-ui/platform_ui.git
if [ $? == 0 ];then
   echo "# successfully cloned repo under /tmp/platform_ui"
fi
