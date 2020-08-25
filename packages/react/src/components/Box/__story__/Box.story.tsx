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
export const StylesAndSpacingPassed = () => (
    <Box
        classNames={{
            Root: 'blah',
        }}
        styles={{
            Root: () => css`
                border: 1px dashed red;
            `,
        }}
        padding="2rem"
        margin={20}
        marginTop={0}
    >
        Hello world!
    </Box>
);
export const SizingPassed = () => (
    <Box
        styles={{
            Root: () => css`
                border: 1px dashed red;
            `,
        }}
        height={5}
    >
        Hello world!
    </Box>
);
