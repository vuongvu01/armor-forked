import React from 'react';

import { Box } from '../Box';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Box',
    component: Box,
    decorators: [withWrapper],
    parameters: {},
};

export const Playground = () => <Box>Hello, world!</Box>;
export const SpacingPassed = () => (
    <Box padding="2rem" margin={20} marginTop={0}>
        Hello world!
    </Box>
);
export const SizingPassed = () => <Box height={5}>Hello world!</Box>;
