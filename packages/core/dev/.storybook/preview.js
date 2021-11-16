import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { makeDefaultTheme } from '../../src';

const themes = [
    {
        name: 'Default',
        backgroundColor: '#fff',
        ...makeDefaultTheme(),
    },
    {
        name: 'Checker',
        backgroundColor: '#fff',
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
