const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        '../../src/**/*.story.tsx',
        '../../../extras/*/src/**/*.story.tsx',
    ],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions',
        'storybook-addon-styled-component-theme/dist/register',
    ],
    typescript: {
        check: false,
        reactDocgen: false,
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        transpileOnly: true,
                    },
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');

        if (config.mode === 'production') {
            delete config.devtool;
        }

        return config;
    },
};
