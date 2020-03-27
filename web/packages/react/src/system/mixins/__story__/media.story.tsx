import React from 'react';
import { css } from 'styled-components';
import { Button } from '../../../components';

export default {
    title: 'System/Media',
    component: Button,
    decorators: [],
    parameters: {},
};

export const BreakpointUp = () => (
    <Button
        styles={{
            root: ({ theme }) => css`
                ${theme.breakpoints.up(
                    'lg',
                    css`
                        color: yellow;
                    `,
                )};
                border: ${theme.span(1)} dashed red;
            `,
        }}
    >
        Hello world!
    </Button>
);
