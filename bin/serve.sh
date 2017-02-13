#!/bin/sh
DIR=server
export STATIC_FOLDER=$(pwd)/$1

if [ -z "$PORT" ]; then
  export PORT=$2
fi

cd $DIR
echo "************************************"
echo "** Building and Running UI-Server **"
echo "************************************"
npm start
