/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { withWrapper } from '../../../helpers/Wrapper';

import { FontLoader } from '../FontLoader';
import { Button } from '../../Button';

export default {
    title: 'Components/FontLoader',
    component: FontLoader,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <>
            <FontLoader />
            <Button>Hello</Button>
        </>
    );
};
