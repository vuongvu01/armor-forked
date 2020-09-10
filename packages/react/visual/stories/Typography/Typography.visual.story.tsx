import React from 'react';

import { Typography } from '../../../src/components';
import { loremIpsum } from '../../../src/helpers/LoremIpsum';

export default {
    title: 'Typography',
    component: Typography,
};

export const MaxLines = () => (
    <Typography paragraph maxLines={2} style={{ width: '500px' }}>
        {loremIpsum}
    </Typography>
);
