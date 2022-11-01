#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

yarn

cd ${DIR}/../packages/system
yarn build

cd ${DIR}/../packages/icons
yarn build

cd ${DIR}/../packages/core
yarn build

cd ${DIR}/../packages/brands
yarn build

cd ${DIR}/../packages/extras
./script/build.sh

cd ${DIR}/../packages/illustrations
yarn
yarn build

cd ${DIR}/../packages/motion
yarn
yarn build

cd ${DIR}/../packages/core/dev
yarn
yarn build
