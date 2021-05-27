/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import {withWrapper} from '../../../helpers/Wrapper';

import { <%- component_name_pascal %> } from '../<%- component_name_pascal %>';

export default {
    title: 'Components/<%- component_name_pascal %>',
    component: <%- component_name_pascal %>,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <<%- component_name_pascal %>>
            Hello world!
        </<%- component_name_pascal %>>
    );
};
