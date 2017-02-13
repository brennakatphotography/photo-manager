#!/bin/sh
REPO=https://github.com/brennakatphotography/ui-server.git
DIR=server

if [ ! -d "$DIR" ]; then
  git clone $REPO $DIR
fi

cd $DIR
echo "**************************************"
echo "** Pulling latest UI-Server Changes **"
echo "**************************************"
git reset --hard HEAD
git checkout master
git pull -r
echo "***************************************"
echo "** Installing UI-Server dependencies **"
echo "***************************************"
npm install
cd - > /dev/null