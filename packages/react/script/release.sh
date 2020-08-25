#!/usr/bin/env bash

./script/remove-d-ts.sh;

yarn run install-peers;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn run lint;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn run test;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn run test:visual:cicd;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn run build;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn publish;
