const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const { StatsWriterPlugin } = require('webpack-stats-plugin');

module.exports = {
    stories: ['../../src/**/*.story.tsx'],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions',
        // '@storybook/addon-links',
        'storybook-addon-styled-component-theme/dist/register',
        // '@storybook/addon-viewport/register',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.plugins = [new TsconfigPathsPlugin({})];
        config.parallelism = 1;

        config.plugins.pop(); // get rid of the docgen
        // config.plugins.push(
        //     new StatsWriterPlugin({
        //         stats: 'all',
        //         filename: 'stats.json', // Default
        //     }),
        // );

        if (config.mode === 'production') {
            delete config.devtool;
        }

        return config;
    },
};
