#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}/../DataTable && yarn build
cd ${DIR}/../DatePicker && yarn build
cd ${DIR}/../HeaderNavigation && yarn build
cd ${DIR}/../Filter && yarn build

