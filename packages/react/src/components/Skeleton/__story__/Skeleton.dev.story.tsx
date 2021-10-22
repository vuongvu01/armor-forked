/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { withWrapper } from '../../../helpers/Wrapper';

import { Skeleton } from '../Skeleton';

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    return <Skeleton>Hello world!</Skeleton>;
};
