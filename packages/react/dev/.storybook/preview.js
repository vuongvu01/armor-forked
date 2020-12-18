import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { makeDarkTheme, makeDefaultTheme } from '../../src/styling/themes';

const themes = [
    {
        name: 'Default',
        backgroundColor: '#fff',
        ...makeDefaultTheme(),
    },
    {
        name: 'Dark',
        backgroundColor: '#262626',
        ...makeDarkTheme(),
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
