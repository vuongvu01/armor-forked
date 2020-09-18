#!/usr/bin/env node

const promisify = require('util').promisify;

const find = require('findit');
const mkdir = promisify(require('fs').mkdir);
const unlink = promisify(require('fs').unlink);
const readFile = promisify(require('fs').readFile);
const writeFile = promisify(require('fs').writeFile);
const { basename, extname, normalize, join } = require('path');
const render = require('ejs').render;
const parse = require('svg-parser').parse;
const createHtmlDom = require('htmldom');

const sourceFolder = normalize(`${__dirname}/../src/`);
const destinationFolder = normalize(
    `${__dirname}/../../packages/react-icons/src/icons`,
);
const templateFolder = normalize(`${__dirname}/../templates/`);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

const getFolderContent = async path => {
    const finder = find(path);
    const folders = [];
    const files = [];

    // todo: add timeout here with Promise.race()
    const onEnd = new Promise(resolve => {
        finder.on('end', () => {
            resolve({
                folders,
                files,
            });
        });
    });

    finder.on('directory', (dir, stat, stop) => {
        const relative = dir.substr(path.length, dir.length - path.length);
        if (relative) {
            folders.push(relative);
        }
    });

    finder.on('file', file => {
        const relative = file.substr(path.length, file.length - path.length);
        if (relative) {
            files.push(relative);
        }
    });

    return onEnd;
};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

(async () => {
    const reactTemplate = (
        await readFile(join(templateFolder, 'ReactIcon.ejs'))
    ).toString('utf8');

    const source = await getFolderContent(sourceFolder);

    for (const folder of source.folders) {
        const folderName = join(destinationFolder, folder);
        await mkdir(folderName).catch(e => {
            console.log(
                `Was not able to make a directory ${folderName}: ${e.message}`,
            );
        });
    }

    for (const file of source.files) {
        console.log(file);

        const srcFile = join(sourceFolder, file);
        const dstFile = join(destinationFolder, file.replace('.svg', '.tsx'));
        const componentName = basename(dstFile).replace('.tsx', '');

        try {
            const fileContents = (await readFile(srcFile)).toString('utf8');
            const $ = createHtmlDom(fileContents);
            const p = $('svg').find('path');

            const d = p.attr('d');
            const transform = p.attr('transform');

            const content = render(reactTemplate, {
                name: componentName,
                shape: d,
                transform,
            });

            await unlink(dstFile).catch(() => {});
            await writeFile(dstFile, new Uint8Array(Buffer.from(content)));
        } catch (e) {
            console.log(`Cannot process file ${file}`);
            console.log(e);
        }
    }

    console.log('DONE');
})();
