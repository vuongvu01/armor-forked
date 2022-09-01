/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { CloseButton } from '../CloseButton';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/CloseButton',
    component: CloseButton,
    decorators: [withWrapper],
    parameters: {},
};

export const DefaultLayout = () => {
    return <CloseButton />;
};
