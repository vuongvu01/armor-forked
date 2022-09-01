import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AddIcon } from '@deliveryhero/armor-icons';
import { Message } from '../Message';
import { Typography } from '../../Typography';
import { MessageAction } from '../MessageAction';
import { Rick } from '../../../helpers/Rick';
import { Box } from '../../Box';
import { loremIpsum } from '../../../helpers/LoremIpsum';
import { withWrapper } from '../../../helpers/Wrapper';
import { Stack } from '../../Stack';

export default {
    title: 'Core/Message',
    component: Message,
    decorators: [withWrapper],
    parameters: {},
};

export const AllStates = () => (
    <Stack gutterSpacing={3}>
        <Message success>Hello there!</Message>
        <Message info>Hello there!</Message>
        <Message error>Hello there!</Message>
        <Message warning>Hello there!</Message>
    </Stack>
);

export const Basic = () => (
    <Message level="error">
        <Typography label medium marginBottom={2}>
            Error message
        </Typography>

        <Typography paragraph medium>
            {loremIpsum}
        </Typography>
    </Message>
);

export const LabelAndTextWithMessageActions = () => {
    return (
        <Message error>
            <Typography label medium marginBottom={2}>
                System failure
            </Typography>

            <Typography paragraph medium>
                We ran out of cake. <br />
                Please consider ordering more from one of our partner bakeries
                or get the ingredients from the D-Mart and bake at home.
            </Typography>

            <Box marginTop={2}>
                <MessageAction marginRight={4}>Order cake</MessageAction>
                <MessageAction>Order ingredients</MessageAction>
            </Box>
        </Message>
    );
};

export const LabelAndActions = () => {
    return (
        <Message
            error
            disableIcon
            disableCloseButton
            actions={<MessageAction>Action</MessageAction>}
        >
            <Typography paragraph medium>
                This is an error message written in one or two lines.
            </Typography>
        </Message>
    );
};

export const WithCustomAttributes = () => (
    <Message marginTop={30} disableCloseButton={false} disableIcon>
        Hello there!
    </Message>
);

export const WithCustomIconTag = () => (
    <Message marginTop={30} disableCloseButton={false} iconTag={AddIcon}>
        Hello there!
    </Message>
);
