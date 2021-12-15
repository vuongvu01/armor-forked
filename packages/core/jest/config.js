module.exports = {
    verbose: true,
    rootDir: '../src',
    setupFiles: ['<rootDir>/../jest/setup.ts'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        'jest-styled-components',
        '<rootDir>/../jest/matchers/index',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    },
    testRegex: '\\.test\\.tsx?$',
    testEnvironment: 'jsdom'
};
