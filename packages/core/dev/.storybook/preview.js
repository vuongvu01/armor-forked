import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { makeDefaultTheme } from '../../src';
import { makeDarkTheme } from '@deliveryhero/armor-brands';

const themes = [
    {
        name: 'Default',
        ...makeDefaultTheme(),
    },
    {
        name: 'Dark theme',
        ...makeDarkTheme(),
    },
    {
        name: 'Checker',
        backgroundChecker: true,
        ...makeDefaultTheme(),
    },
];

addDecorator(withThemesProvider(themes));

// addParameters({
//     viewport: {
//         viewports: INITIAL_VIEWPORTS,
//     },
// });
