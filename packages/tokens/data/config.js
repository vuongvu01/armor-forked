const { formatHelpers } = require('style-dictionary');
const { ALL_CATEGORIES, getIndexContent, tokenFilter } = require('./helper');

module.exports = {
    source: ['data/tokens-transformed.json'],
    format: {
        indexFile: ({ file, dictionary }) => {
            let output = formatHelpers.fileHeader(file);
            output += getIndexContent(dictionary.allTokens);
            return output;
        },
    },
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'src/tokens/scss/',
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
            buildPath: 'src/tokens/css/',
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
            buildPath: 'src/tokens/',
            files: [
                ...ALL_CATEGORIES.map((category) => ({
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
