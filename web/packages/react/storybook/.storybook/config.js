import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { defaultTheme, darkTheme } from '../../src/themes';

const themes = [
    {
        name: 'Default',
        backgroundColor: '#fff',
        ...defaultTheme,
    },
    {
        name: 'Dark',
        backgroundColor: '#000',
        ...darkTheme,
    },
];

addDecorator(withThemesProvider(themes));
