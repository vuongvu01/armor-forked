import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { defaultTheme, darkTheme } from '../../src/styling';

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

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
