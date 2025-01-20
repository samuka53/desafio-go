#!/bin/bash
set -e

# run migrations before initializing the app
node /app/src/migrate.js
# start the app on port 3000
node /app/src/index.js
