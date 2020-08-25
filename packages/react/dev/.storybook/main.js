const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { addDecorator, addParameters } = require('@storybook/react');
const { INITIAL_VIEWPORTS } = require('@storybook/addon-viewport');
const {
    withThemesProvider,
} = require('storybook-addon-styled-component-theme');

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});

module.exports = {
    stories: ['../../src/**/*.story.tsx'],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        'storybook-addon-styled-component-theme/dist/register',
        '@storybook/addon-viewport/register',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.plugins = [new TsconfigPathsPlugin({})];
        return config;
    },
};
