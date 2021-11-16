import React from 'react';

import {
    Box,
    Message,
    MessageAction,
    Typography,
} from '../../../src/components';
import { loremIpsum } from '../../../src/helpers/LoremIpsum';

export default {
    title: 'Message',
    component: Message,
};

export const Basic = () => <Message>Hello</Message>;
export const Warning = () => <Message warning>Hello</Message>;
export const Error = () => <Message error>Hello</Message>;
export const Complete = () => {
    return (
        <Message error>
            <Typography marginBottom={1}>System failure</Typography>
            <Typography paragraph>
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
export const Success = () => (
    <Message success>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
    </Message>
);
export const LongContent = () => <Message success>{loremIpsum}</Message>;
