#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

yarn
yarn install-peers

cd ${DIR}/../packages/system
yarn build

cd ${DIR}/../packages/icons
yarn build

cd ${DIR}/../packages/core
yarn build

cd ${DIR}/../packages/core/dev
yarn
yarn build

cd ${DIR}/../packages/illustrations
yarn
yarn build