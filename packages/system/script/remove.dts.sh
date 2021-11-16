#!/usr/bin/env bash

find ./src/hooks/ -name "*.d.ts" -type f -delete
find ./src/mixins/ -name "*.d.ts" -type f -delete
find ./src/properties/ -name "*.d.ts" -type f -delete
find ./src/theme/ -name "*.d.ts" -type f -delete
find ./src/tokens/ -name "*.d.ts" -type f -delete
find ./src/types/ -name "*.d.ts" -type f -delete
find ./src/util/ -name "*.d.ts" -type f -delete
rm ./src/index.d.ts
rm ./src/type.d.ts
