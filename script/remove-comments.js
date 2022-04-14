#!/usr/bin/env node

const fs = require('fs');
const decomment = require('decomment');
const glob = require('glob');

try {
    //glob to search files ignoring node_modules directory
    glob(
        'packages/!(props-parser)/build*/**/*.js',
        { ignore: '**/node_modules/**' },
        function (error, files) {
            files.forEach((file) => {
                // console.log('Removing from ' + file);
                const fd = fs.openSync(file, 'r+');
                const data = fs.readFileSync(file, 'utf8');
                const strings = decomment(data, {
                    ignore: /\/\/# sourceMappingURL=.*/g,
                });
                fs.writeFileSync(file, strings);
                fs.closeSync(fd);
            });
        },
    );
} catch (error) {
    console.log(error);
}
