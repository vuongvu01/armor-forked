#!/usr/bin/env bash

yarn;
yarn run install-peers;
cd doc/ || exit;
yarn;
cd ../dev || exit;
yarn;
