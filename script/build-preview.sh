#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

yarn
yarn install-peers

cd ${DIR}/../packages/system
yarn

cd ${DIR}/../packages/icons
yarn

cd ${DIR}/../packages/core
yarn

cd ${DIR}/../packages/core/dev
yarn
yarn build
