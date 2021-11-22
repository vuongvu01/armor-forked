import React from 'react';
import { Typography } from '@deliveryhero/armor';

import { loremIpsum } from '../../../src/utils/LoremIpsum';

export default {
    title: 'Typography',
    component: Typography,
};

export const Titles = () => (
    <>
        <Typography pageTitle>Quick brown fox jumps over a lazy dog</Typography>
        <Typography sectionTitle>
            Quick brown fox jumps over a lazy dog
        </Typography>
        <Typography subSectionTitle>
            Quick brown fox jumps over a lazy dog
        </Typography>
    </>
);

export const Paragraph = () => (
    <>
        <Typography paragraph large>
            {loremIpsum}
        </Typography>
        <Typography paragraph medium>
            {loremIpsum}
        </Typography>
        <Typography paragraph small>
            {loremIpsum}
        </Typography>
    </>
);

export const Label = () => (
    <>
        <Typography label large>
            Quick brown fox jumps over a lazy dog
        </Typography>
        <Typography label medium>
            Quick brown fox jumps over a lazy dog
        </Typography>
        <Typography label small>
            Quick brown fox jumps over a lazy dog
        </Typography>
    </>
);

export const MaxLines = () => (
    <Typography paragraph maxLines={2} style={{ width: '500px' }}>
        {loremIpsum}
    </Typography>
);
