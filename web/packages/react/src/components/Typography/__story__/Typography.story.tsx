import React from 'react';
import {
    withKnobs,
    text,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved

import { loremIpsum } from 'src/helpers';
import { Typography } from '../Typography';

export default {
    title: 'Components/Typography',
    component: Typography,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => (
    <Typography>{text('Children', 'Hello world!')}</Typography>
);

export const AllOfThem = () => (
    <>
        <Typography pageTitle>Page title: Top secret document</Typography>
        <Typography sectionTitle>Section Title: Space race mission</Typography>
        <Typography subSectionTitle>
            Sub section title: How we made it. It was fun. Too long to explain.
            Too long to explain. Too long to explain. Too long to explain. Too
            long to explain.
        </Typography>
        <Typography paragraph large>
            {loremIpsum}
        </Typography>
        <Typography paragraph medium>
            {loremIpsum}
        </Typography>
        <Typography paragraph small>
            {loremIpsum}
        </Typography>
        <Typography label large>
            Label large
        </Typography>
        <Typography label medium>
            Label medium
        </Typography>
        <Typography label small>
            Label small
        </Typography>
    </>
);

export const NoMargin = () => (
    <>
        <Typography paragraph large marginBottom={0} marginTop={0}>
            {loremIpsum}
        </Typography>
        <Typography paragraph medium marginBottom={0} marginTop={0}>
            {loremIpsum}
        </Typography>
        <Typography paragraph small marginBottom={0} marginTop={0}>
            {loremIpsum}
        </Typography>
    </>
);
