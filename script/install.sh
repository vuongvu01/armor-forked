#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

yarn install
cd ${DIR}/../packages/react && yarn install
