import 'loki/configure-react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

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
