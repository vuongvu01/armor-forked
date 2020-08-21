import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved
// import { action } from '@storybook/addon-actions';

import { Dialog } from '../Dialog';
import { DialogTitle } from '../../DialogTitle';
import { DialogContent } from '../../DialogContent';
import { DialogActions } from '../../DialogActions';
import { Button } from '../../Button';
import { LoremIpsum } from '../../../helpers/LoremIpsum';
import { boke } from '../../../helpers/boke';

export default {
    title: 'Components/Dialog',
    component: Dialog,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth={text('Max width', 'sm')}
                wide={boolean('Wide', false)}
            >
                <DialogTitle description="Assign a new id to this location">
                    New location
                </DialogTitle>
                <DialogContent>
                    {text('Children', 'Hello world!')}
                </DialogContent>
                <DialogActions>
                    <Button tertiary onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={onClose}>Save</Button>
                </DialogActions>
            </Dialog>

            <LoremIpsum>
                <Button onClick={() => setOpen(true)}>Open modal!</Button>
            </LoremIpsum>
        </>
    );
};

export const NoOverlay = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} disableOverlay>
                <DialogTitle description="Assign a new id to this location">
                    New location
                </DialogTitle>
                <DialogContent>
                    {text('Children', 'Hello world!')}
                </DialogContent>
                <DialogActions>
                    <Button tertiary>Cancel</Button>
                    <Button>Save</Button>
                </DialogActions>
            </Dialog>

            <LoremIpsum>
                <Button onClick={() => setOpen(true)}>Open modal!</Button>
            </LoremIpsum>
        </>
    );
};

export const RedDawn = () => (
    <Dialog
        styles={{
            Overlay: () =>
                css`
                    background-color: darkred;
                `,
            CloseButton: () =>
                css`
                    color: darkred;
                `,
        }}
        open
        disableEffects
    >
        <DialogTitle description="Assign a new id to this location">
            New location
        </DialogTitle>
        <DialogContent>☀️☀️☀️</DialogContent>
        <DialogActions>
            <Button tertiary>Cancel</Button>
            <Button>Save</Button>
        </DialogActions>
    </Dialog>
);

const UltraExpressiveDialog = styled(Dialog)`
    & {
        .Dialog-Root {
            background: url(${boke});
        }
        .Dialog-Overlay {
            background-color: darkblue;
        }
        .Dialog-CloseButton {
            color: white;
        }
    }
`;

const WhiteTitle = styled(DialogTitle)`
    color: white;
`;

export const UltraExpressive = () => {
    const [open, setOpen] = useState(false);
    const [openB, setOpenB] = useState(false);

    return (
        <>
            <Dialog open={openB} onClose={() => setOpenB(false)}>
                <DialogContent>
                    <LoremIpsum />
                    <LoremIpsum />
                </DialogContent>
            </Dialog>
            <UltraExpressiveDialog open={open} onClose={() => setOpen(false)}>
                <WhiteTitle description="Assign a new id to this location">
                    Party time!!!
                </WhiteTitle>
                <DialogContent>🌈🌈🌈☀️☀️☀️🌧️🌧️🌧️</DialogContent>
                <DialogActions>
                    <Button tertiary>Cancel</Button>
                    <Button>Save</Button>
                </DialogActions>
            </UltraExpressiveDialog>

            <Button onClick={() => setOpen(true)}>Open modal!</Button>
            <Button onClick={() => setOpenB(true)}>Open modal B!</Button>
        </>
    );
};

export const LongText = () => (
    <LoremIpsum>
        <Dialog open disableEffects>
            <DialogContent>
                <LoremIpsum />
                <LoremIpsum />
            </DialogContent>
        </Dialog>
    </LoremIpsum>
);

export const LongTitle = () => (
    <LoremIpsum>
        <Dialog
            open
            disableEffects
            disableCloseButton={boolean('Close button', false)}
        >
            <DialogTitle description="Assign a new id to this location">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
            </DialogTitle>
            <DialogContent>
                <LoremIpsum />
            </DialogContent>
        </Dialog>
    </LoremIpsum>
);

export const ContentBlocks = () => (
    <LoremIpsum>
        <Dialog
            open
            disableEffects
            disableCloseButton={!boolean('Show close button', true)}
            maxWidth="md"
        >
            {boolean('Show title', true) && (
                <DialogTitle
                    description="Assign a new id to this location"
                    style={{ border: '1px solid red' }}
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </DialogTitle>
            )}
            {boolean('Show content', true) && (
                <DialogContent style={{ border: '1px solid red' }}>
                    <LoremIpsum />
                </DialogContent>
            )}
            {boolean('Show actions', true) && (
                <DialogActions style={{ border: '1px solid red' }}>
                    <Button tertiary>Cancel</Button>
                    <Button>Save</Button>
                </DialogActions>
            )}
        </Dialog>
    </LoremIpsum>
);

export const CustomContent = () => (
    <Dialog open disableEffects>
        Hi, is there somebody?
    </Dialog>
);

const Modal = ({
    open,
    title = 'Foo',
    children = '',
    onClose,
}: {
    open: boolean;
    title?: string;
    children?: ReactNode;
    onClose: () => void;
}) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle description="Assign a new id to this location">
            {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
    </Dialog>
);

export const OneOverAnother = () => {
    const [openModalA, setOpenModalA] = useState(false);
    const [openModalB, setOpenModalB] = useState(false);

    return (
        <>
            <Modal
                open={openModalB}
                title="Bar"
                onClose={() => setOpenModalB(false)}
            >
                I am a sub-modal!
            </Modal>
            <Modal
                open={openModalA}
                title="Foo"
                onClose={() => setOpenModalA(false)}
            >
                This is one modal inside another.
                <Button onClick={() => setOpenModalB(true)}>Open modal!</Button>
            </Modal>
            <LoremIpsum>
                <Button onClick={() => setOpenModalA(true)}>Open modal!</Button>
            </LoremIpsum>
        </>
    );
};

export const MountUnmount = () => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(true);

    return (
        <>
            <Button onClick={() => setMounted(!mounted)}>
                Mount / unmount!
            </Button>
            <br />
            <br />
            {mounted && (
                <>
                    <Button onClick={() => setOpen(true)}>Open modal!</Button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        Kawabanga!
                    </Modal>
                </>
            )}
        </>
    );
};

const scrollOptions = {
    Default: null,
    Document: 'document',
    Dialog: 'dialog',
};

export const ScrollData = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <LoremIpsum>
                <Dialog
                    open={open}
                    disableEffects
                    onClose={() => setOpen(false)}
                    scroll={select('Scroll', scrollOptions)}
                    maxWidth="sm"
                >
                    <DialogTitle description="Assign a new id to this location">
                        New location
                    </DialogTitle>
                    <DialogContent>
                        <LoremIpsum />
                        <LoremIpsum />
                    </DialogContent>
                    <DialogActions>
                        <Button tertiary>Cancel</Button>
                        <Button>Save</Button>
                    </DialogActions>
                </Dialog>
            </LoremIpsum>
            <LoremIpsum />
        </>
    );
};

export const FocusTrap = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <LoremIpsum>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    disableEffects
                    maxWidth="sm"
                >
                    <DialogTitle>Hi!</DialogTitle>
                    <DialogContent>
                        <input />
                        <br />
                        <input />
                        <br />
                        <input />
                        <br />
                        <input />
                        <br />
                    </DialogContent>
                </Dialog>
            </LoremIpsum>
            <LoremIpsum />
        </>
    );
};

export const ContentOnly = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <LoremIpsum>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    disableCloseButton={boolean('Disable close button', false)}
                >
                    <DialogContent>
                        <input />
                        <br />
                        <input />
                        <br />
                        <input />
                        <br />
                        <input />
                        <br />
                    </DialogContent>
                </Dialog>
            </LoremIpsum>
            <LoremIpsum />
        </>
    );
};

export const FixedZIndex = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth={text('Max width', 'sm')}
                wide={boolean('Wide', false)}
                zIndex={2000}
            >
                <DialogContent>
                    Z-index is custom 1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                </DialogContent>
            </Dialog>

            <LoremIpsum style={{ zIndex: 1500 }} />
            <Button onClick={() => setOpen(true)}>Open modal!</Button>
        </>
    );
};
