import React from 'react';

import { css } from 'styled-components';
import { Box } from '../Box';

export default {
    title: 'Components/Box',
    component: Box,
    decorators: [],
    parameters: {},
};

export const Playground = () => <Box>Hello, world!</Box>;
export const SpacingPassed = () => (
    <Box padding="2rem" margin={20} marginTop={0}>
        Hello world!
    </Box>
);
export const SizingPassed = () => <Box height={5}>Hello world!</Box>;
