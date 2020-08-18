import React from 'react';

import { Message } from '../../../src/components';
import { loremIpsum } from '../../../src/helpers/LoremIpsum';

export default {
    title: 'Message',
    component: Message,
};

export const Basic = () => <Message>Hello</Message>;
export const Warning = () => <Message warning>Hello</Message>;
export const Error = () => <Message error>Hello</Message>;
export const Success = () => (
    <Message success>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
    </Message>
);
export const LongContent = () => <Message success>{loremIpsum}</Message>;
