#!/usr/bin/env bash

find ./src/components/ -name "*.d.ts" -type f -delete
find ./src/themes/ -name "*.d.ts" -type f -delete
find ./src/icons/ -name "*.d.ts" -type f -delete
find ./src/styling/ -name "*.d.ts" -type f -delete
find ./src/system/ -name "*.d.ts" -type f -delete
find ./src/utils/ -name "*.d.ts" -type f -delete
rm ./src/index.d.ts
rm ./src/type.d.ts
