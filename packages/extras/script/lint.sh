#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}/../DataTable && yarn lint
cd ${DIR}/../DatePicker && yarn lint
cd ${DIR}/../HeaderNavigation && yarn lint
cd ${DIR}/../Filter && yarn lint

