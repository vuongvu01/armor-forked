import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import { Message } from '../Message';
import { Typography } from '../../Typography';
import { MessageAction } from '../../MessageAction';
import { Rick } from '../../../helpers/Rick';
import { Box } from '../../Box';
import { loremIpsum } from '../../../helpers/LoremIpsum';

export default {
    title: 'Components/Message',
    component: Message,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => (
    <Message
        disableCloseButton={false}
        actions={<MessageAction useMessageColor>See details</MessageAction>}
        extra={<Rick />}
        level="error"
        disableIcon
    >
        <Typography label medium marginBottom={2}>
            Error message
        </Typography>
        {loremIpsum}
        <Box>
            <MessageAction marginTop={2} marginRight={4}>
                See details
            </MessageAction>
            <MessageAction>Report</MessageAction>
        </Box>
    </Message>
);

export const Complete = () => {
    return (
        <Message error>
            <Typography label medium marginBottom={2}>
                System failure
            </Typography>
            <Typography paragraph>
                We ran out of cake. <br />
                Please consider ordering more from one of our partner bakeries
                or get the ingredients from the D-Mart and bake at home.
            </Typography>

            <Box>
                <MessageAction marginRight={4}>Order cake</MessageAction>
                <MessageAction>Order ingredients</MessageAction>
            </Box>
        </Message>
    );
};

export const WithCustomAttributes = () => (
    <Message marginTop={30} disableCloseButton={false} disableIcon>
        Hello there!
    </Message>
);

export const AllTypes = () => (
    <>
        <Message info marginBottom={2}>
            Hello there!
        </Message>
        <Message error marginBottom={2}>
            Hello there!
        </Message>
        <Message warning marginBottom={2}>
            Hello there!
        </Message>
        <Message success>Hello there!</Message>
    </>
);
