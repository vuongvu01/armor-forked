#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}/../packages/icons
yarn
yarn install-peers
yarn build
cd ${DIR}/../packages/react
yarn
yarn install-peers
rm -rf node_modules/@deliveryhero/armor-icons
cd ${DIR}/../packages/react/dev
yarn
yarn build