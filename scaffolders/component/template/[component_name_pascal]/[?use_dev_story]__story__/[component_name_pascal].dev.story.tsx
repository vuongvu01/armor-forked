/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { <%- component_name_pascal %> } from '../<%- component_name_pascal %>';

export default {
    title: 'Components/<%- component_name_pascal %>',
    component: <%- component_name_pascal %>,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => {
    return (
        <<%- component_name_pascal %>>
            {text('Children', 'Hello world!')}
        </<%- component_name_pascal %>>
    );
};
