#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

yarn;
yarn run install-peers;
cd ${DIR}/../dev || exit;
yarn;
cd ${DIR}/../visual || exit;
yarn;
