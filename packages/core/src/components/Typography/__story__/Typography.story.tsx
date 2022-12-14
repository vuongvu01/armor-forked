import React from 'react';
import { loremIpsum } from '../../../helpers/LoremIpsum';
import { Typography } from '../Typography';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/Typography',
    component: Typography,
    decorators: [withWrapper],
    parameters: {},
};

export const AllStates = () => (
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

export const Basic = () => <Typography>Hello world!</Typography>;

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

export const CustomColor = () => (
    <>
        <Typography
            paragraph
            large
            marginBottom={0}
            marginTop={0}
            color="$color.neutral.07"
        >
            {loremIpsum}
        </Typography>
        <Typography
            paragraph
            medium
            marginBottom={0}
            marginTop={0}
            color="$color.error.main"
        >
            {loremIpsum}
        </Typography>
        <Typography
            paragraph
            small
            marginBottom={0}
            marginTop={0}
            color="$color.warning.main"
        >
            {loremIpsum}
        </Typography>
    </>
);

export const KindsOfProps = () => (
    <Typography data-forbidden-prop="true" aria-label="header">
        Hello world!
    </Typography>
);

export const MaxLines = () => (
    <Typography maxLines={2} paragraph>
        Hello world!
    </Typography>
);
