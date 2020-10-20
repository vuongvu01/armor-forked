import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { makeDefaultTheme, makeDarkTheme } from '../../src/styling/themes';

const themes = [
    {
        name: 'Default',
        backgroundColor: '#fff',
        ...makeDefaultTheme(),
    },
    {
        name: 'Dark',
        backgroundColor: '#000',
        ...makeDarkTheme(),
    },
];

addDecorator(withThemesProvider(themes));

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
