import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved
import { action } from '@storybook/addon-actions';

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
