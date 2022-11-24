module.exports = {
    source: ['data/tokens-transformed.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'src/tokens/scss/',
            files: [
                {
                    destination: '_variables.scss',
                    format: 'scss/variables',
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
                },
            ],
        },
        js: {
            transformGroup: 'js',
            buildPath: 'src/tokens/js/',
            files: [
                {
                    format: 'javascript/es6',
                    destination: 'index.ts',
                },
            ],
        },
    },
};
