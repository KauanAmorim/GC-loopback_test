#!/bin/sh

export NODE_ENV=

export DB_HOST=
export DB_PORT=
export DB_USER=
export DB_DATABASE=
export DB_SCHEMA=
export DB_SSL=

export PORT=

export DEBUG='loopback:connector:postgresql'

npm run start:watch
