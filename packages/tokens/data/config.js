// import StyleDictionary from 'style-dictionary';

// const { formatHelpers } = StyleDictionary;

const tokenFilter = (cat) => (token) => token.attributes.category === cat;

module.exports = {
    source: ['./tokens-transformed.json'],
    format: {
        cssLiterals: (opts) => {
            // const { dictionary, file } = opts;
            // let output = formatHelpers.fileHeader(file);
            const output = `export const test = () => {}`;

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
    },
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'src/scss/',
            files: [
                {
                    destination: '_variables.scss',
                    format: 'scss/variables',
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
                },
            ],
        },
        js: {
            transformGroup: 'js',
            buildPath: 'src/',
            files: [
                {
                    format: 'javascript/es6',
                    destination: 'js/index.ts',
                },
                {
                    filter: tokenFilter('color'),
                    format: 'javascript/es6',
                    destination: 'js/colors.ts',
                },
                {
                    format: 'cssLiterals',
                    destination: 'index.ts',
                },
            ],
        },
    },
};
