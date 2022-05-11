#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}/../DataTable/visual && yarn install 
cd ${DIR}/../DataTable && yarn test:visual:cicd

cd ${DIR}/../DatePicker/visual && yarn install 
cd ${DIR}/../DatePicker && yarn test:visual:cicd

