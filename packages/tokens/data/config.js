const { formatHelpers } = require('style-dictionary');
const { AllCategories, getIndexContent, tokenFilter } = require('./helper');

module.exports = {
    source: ['data/tokens-transformed.json'],
    format: {
        cssLiterals: (opts) => {
            // const { dictionary, file } = opts;
            // let output = formatHelpers.fileHeader(file);
            const output = `export * from './js'`;

            // dictionary.allTokens.forEach((token) => {
            //     const { path, original } = token;

            //     // Use the path of the token to create the variable name, skip the first item
            //     const [, ..._path] = path;
            //     const name = _path.reduce((acc, str, index) => {
            //         // converts to camelCase
            //         const _str =
            //             index === 0
            //                 ? str
            //                 : str.charAt(0).toUpperCase() + str.slice(1);
            //         return acc.concat(_str);
            //     }, '');

            //     output += `export const ${name} = css\`${original.value}\`;\n`;
            // });

            return output;
        },
        indexFile: ({ file, dictionary }) => {
            let output = formatHelpers.fileHeader(file);
            output += getIndexContent();

            return output;
        },
    },
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'src/scss/',
            files: [
                {
                    destination: '_variables.scss',
                    format: 'scss/variables',
                    options: {
                        outputReferences: true,
                    },
                },
            ],
        },
        css: {
            transformGroup: 'css',
            buildPath: 'src/css/',
            files: [
                {
                    destination: '_variables.css',
                    format: 'css/variables',
                    options: {
                        outputReferences: true,
                    },
                },
            ],
        },
        js: {
            transformGroup: 'js',
            buildPath: 'src/',
            files: [
                ...Object.entries(AllCategories).map(([_, category]) => ({
                    filter: tokenFilter(category),
                    format: 'javascript/es6',
                    destination: `js/${category}.ts`,
                })),
                {
                    format: 'indexFile',
                    destination: 'index.ts',
                },
            ],
        },
    },
};
