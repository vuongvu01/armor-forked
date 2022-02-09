/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import { withWrapper } from '../../../helpers/Wrapper';
import { Divider } from '../Divider';

import { Dialog } from '../../Dialog/Dialog';
import { DialogTitle } from '../../Dialog/DialogTitle';
import { DialogContent } from '../../Dialog/DialogContent';
import { Button } from '../../Button';

export default {
    title: 'Components/Divider',
    component: Divider,
    decorators: [withWrapper],
    parameters: {},
};

export const HorizontalDivider = () => {
    return <Divider />;
};

export const VerticalDivider = () => {
    return (
        <div
            style={{
                height: '10rem',
                border: '1px solid black',
            }}
        >
            <Divider vertical marginLeft={10} />
        </div>
    );
};

export const DividerWithSpacing = () => {
    return (
        <Divider
            marginTop={10}
            marginBottom={10}
            marginLeft={10}
            marginRight={10}
        />
    );
};

export const DividerDividingTexts = () => {
    return (
        <div
            style={{
                height: '10rem',
                display: 'flex',
            }}
        >
            <div> Div Left </div>
            <Divider vertical marginLeft={10} marginRight={10} />
            <div> Div Right </div>
        </div>
    );
};

export const DividerOnDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open modal!</Button>
            <Dialog
                wide
                open={open}
                onClose={() => setOpen(false)}
                enableCloseOnBackdropClick={false}
            >
                <DialogTitle>Title</DialogTitle>
                <DialogContent>
                    <Divider marginLeft={10} />
                </DialogContent>
            </Dialog>
        </>
    );
};
