#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}/../HeaderNavigation/integration && yarn install 
cd ${DIR}/../HeaderNavigation && yarn test:integration:cicd
