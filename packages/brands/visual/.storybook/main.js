module.exports = {
    stories: ['../stories/**/*.visual.story.tsx'],
    addons: ['@storybook/addon-viewport'],

    typescript: {
        check: false,
        reactDocgen: false,
    },

    webpackFinal: async (config) => {
        config.resolve.extensions.push('.ts', '.tsx');

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

        return config;
    },
};
