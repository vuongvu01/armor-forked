const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../stories/**/*.visual.story.tsx'],
    addons: ['@storybook/addon-viewport'],
    webpackFinal: async (config) => {
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
        config.profile = true;
        return config;
    },
};
