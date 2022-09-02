#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

yarn build;

cd ${DIR}/../dev && yarn;
cd ${DIR}/../dev2 && yarn;
cd ${DIR}/../visual && yarn;
cd ${DIR}/../integration && yarn;
