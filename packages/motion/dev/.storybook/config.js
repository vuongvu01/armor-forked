import { addParameters, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { makeDefaultTheme } from '@deliveryhero/armor-system';
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
];

addDecorator(withThemesProvider(themes));
