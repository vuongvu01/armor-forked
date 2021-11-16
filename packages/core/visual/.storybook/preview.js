import React from 'react';
import { addDecorator } from '@storybook/react';
import 'loki/configure-react';

import { FontLoader } from '../../src';

export const parameters = {
    viewport: {
        viewports: {
            mobileSmall: {
                name: 'Small mobile',
                styles: {
                    height: '896px',
                    width: '540px',
                },
                type: 'mobile',
            },
            mobileLarge: {
                name: 'Large mobile',
                styles: {
                    height: '1112px',
                    width: '720px',
                },
                type: 'mobile',
            },
        },
    },
};

const fontDecorator = Story => (
    <>
        <FontLoader />
        <Story />
    </>
);

addDecorator(fontDecorator);
