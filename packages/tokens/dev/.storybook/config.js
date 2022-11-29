import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { FontLoader } from '@deliveryhero/armor';

const fontDecorator = (Story) => (
    <>
        <FontLoader />
        <Story />
    </>
);

addDecorator(fontDecorator);
