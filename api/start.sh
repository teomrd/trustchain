#!/usr/bin/env bash

 title="iDentist.pro API"
echo "Starting Mongo..."
cd /usr/local/var/mongodb/
mongod &

echo "Mongo started"

echo "Starting API..."
cd ~/Projects/identist.pro/api/
npm run start &