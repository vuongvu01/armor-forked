module.exports = {
    stories: ['../stories/**/*.integration.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    features: {
        interactionsDebugger: true,
    },
    framework: '@storybook/react',
};
