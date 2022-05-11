#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}/../DataTable && yarn setup
cd ${DIR}/../DatePicker && yarn setup

