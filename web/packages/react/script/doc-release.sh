#!/usr/bin/env bash

cd ./doc || exit;
yarn build;
yarn deploy;
cd ..;
./script/remove-d-ts.sh;
