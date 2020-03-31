import React from 'react';

import { css } from 'styled-components';
import { Dialog } from '../Dialog';

export default {
    title: 'Components/Dialog',
    component: Dialog,
    decorators: [],
    parameters: {},
};

export const Playground = () => <Dialog>Hello, world!</Dialog>;
export const StylesPassed = () => (
    <Dialog
        styles={{
            root: props => css`
                border: ${props.theme.span(1)} dashed red;
            `,
            buttonYes: {
                root: props => css`
                    border: ${props.theme.span(1)} dashed red;
                    margin: 0 !important;
                `,
            },
        }}
        attributes={{
            buttonNo: {
                primary: true,
            },
        }}
    >
        Hello world!
    </Dialog>
);
