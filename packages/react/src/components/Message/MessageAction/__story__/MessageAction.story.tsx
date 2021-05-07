import React from 'react';
import {
    withKnobs,
    text,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';

import { MessageAction } from '../MessageAction';

export default {
    title: 'Components/MessageAction',
    component: MessageAction,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => (
    <MessageAction>{text('Children', 'Hello world!')}</MessageAction>
);
