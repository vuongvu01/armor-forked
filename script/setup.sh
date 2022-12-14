#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

yarn

cd ${DIR}/../packages/system && yarn setup
cd ${DIR}/../packages/icons && yarn setup
cd ${DIR}/../packages/core && yarn setup
cd ${DIR}/../packages/vendors && yarn setup
cd ${DIR}/../packages/props-parser && yarn setup
cd ${DIR}/../packages/brands && yarn setup
cd ${DIR}/../packages/illustrations && yarn setup
cd ${DIR}/../packages/motion && yarn setup
cd ${DIR}/../packages/extras && ./script/setup.sh

cd ${DIR}
