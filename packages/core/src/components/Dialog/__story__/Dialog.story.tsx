import React, { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import { PortalToBody } from '@deliveryhero/armor-system';

import { Dialog } from '../Dialog';
import { DialogTitle } from '../DialogTitle';
import { DialogContent } from '../DialogContent';
import { DialogActions } from '../DialogActions';
import { Button } from '../../Button';
import { LoremIpsum } from '../../../helpers/LoremIpsum';
import { boke } from '../../../helpers/boke';
import { TextInput } from '../../TextInput';
import { withWrapper } from '../../../helpers/Wrapper';
import { Tooltip } from '../../Tooltip';
import { ContextMenu } from '../../ContextMenu';

export default {
    title: 'Core/Dialog',
    component: Dialog,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth={'sm'} wide={false}>
                <DialogTitle description="Assign a new id to this location">
                    New location
                </DialogTitle>
                <DialogContent>
                    <p>
                        Delivery Hero SE is a European multinational online
                        food-delivery service based in Berlin, Germany. The
                        company operates in 40+ countries internationally in
                        Europe, Asia, Latin America and the Middle East and
                        partners with 500,000+ restaurants. Delivery Hero
                        processed more than 666 million orders in 2019
                    </p>
                    <p>
                        Delivery Hero SE is a European multinational online
                        food-delivery service based in Berlin, Germany. The
                        company operates in 40+ countries internationally in
                        Europe, Asia, Latin America and the Middle East and
                        partners with 500,000+ restaurants. Delivery Hero
                        processed more than 666 million orders in 2019
                    </p>
                    <p>
                        Delivery Hero SE is a European multinational online
                        food-delivery service based in Berlin, Germany. The
                        company operates in 40+ countries internationally in
                        Europe, Asia, Latin America and the Middle East and
                        partners with 500,000+ restaurants. Delivery Hero
                        processed more than 666 million orders in 2019
                    </p>
                    <p>
                        Delivery Hero SE is a European multinational online
                        food-delivery service based in Berlin, Germany. The
                        company operates in 40+ countries internationally in
                        Europe, Asia, Latin America and the Middle East and
                        partners with 500,000+ restaurants. Delivery Hero
                        processed more than 666 million orders in 2019
                    </p>
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
            <LoremIpsum />
            <LoremIpsum />
        </>
    );
};

export const NoBackdrop = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} disableOverlay>
                <DialogTitle description="Assign a new id to this location">
                    New location
                </DialogTitle>
                <DialogContent>{'Hello world!'}</DialogContent>
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

export const WithBackdropNoClose = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                enableCloseOnBackdropClick={false}
            >
                <DialogTitle description="Assign a new id to this location">
                    New location
                </DialogTitle>
                <DialogContent>Hello world!</DialogContent>
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

const RedDawnDialog = styled(Dialog)`
    .Dialog-Overlay {
        background-color: darkred;
    }
    .Dialog-CloseButton {
        color: darkred;
    }
`;

export const RedDawn = () => (
    <RedDawnDialog open disableEffects>
        <DialogTitle description="Assign a new id to this location">
            New location
        </DialogTitle>
        <DialogContent>??????????????????</DialogContent>
        <DialogActions>
            <Button tertiary>Cancel</Button>
            <Button>Save</Button>
        </DialogActions>
    </RedDawnDialog>
);

const UltraExpressiveDialog = styled(Dialog)`
    .Dialog-Window {
        background: url(${boke});
    }

    .DialogTitle-Text,
    .DialogTitle-Description {
        color: white;
    }

    .Dialog-Overlay {
        background-color: darkblue;
    }
    .Dialog-CloseButton {
        color: white;
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
                <DialogContent>???????????????????????????????????????????????????</DialogContent>
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
    <>
        <LoremIpsum>
            <Dialog open disableEffects>
                <DialogContent>
                    1111
                    <LoremIpsum />
                    <LoremIpsum />
                </DialogContent>
            </Dialog>
        </LoremIpsum>
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
    </>
);

export const LongTitle = () => (
    <div>
        <LoremIpsum>
            <Dialog open disableEffects disableCloseButton={false}>
                <DialogTitle description="Assign a new id to this location">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </DialogTitle>
                <DialogContent>
                    <LoremIpsum />
                </DialogContent>
            </Dialog>
        </LoremIpsum>
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
    </div>
);

export const ContentBlocks = () => (
    <LoremIpsum>
        <Dialog open disableEffects disableCloseButton={false} maxWidth="md">
            <DialogTitle
                description="Assign a new id to this location"
                style={{ border: '1px solid red' }}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
            </DialogTitle>
            <DialogContent style={{ border: '1px solid red' }}>
                <LoremIpsum />
            </DialogContent>
            <DialogActions style={{ border: '1px solid red' }}>
                <Button tertiary>Cancel</Button>
                <Button>Save</Button>
            </DialogActions>
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
    className = '',
}: {
    open: boolean;
    title?: string;
    children?: ReactNode;
    onClose: () => void;
    className?: string;
}) => (
    <Dialog open={open} onClose={onClose} className={className}>
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
                title="LEVEL2"
                onClose={() => setOpenModalB(false)}
                className="LEVEL2"
            >
                <TextInput />I am a sub-modal!
            </Modal>
            <Modal
                open={openModalA}
                title="LEVEL1"
                onClose={() => setOpenModalA(false)}
                className="LEVEL1"
            >
                <TextInput />
                This is one modal inside another.
                <Button onClick={() => setOpenModalB(true)}>Open modal!</Button>
            </Modal>
            <LoremIpsum>
                <Button onClick={() => setOpenModalA(true)}>Open modal!</Button>
            </LoremIpsum>
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
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

export const ScrollDialog = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <LoremIpsum>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    scroll="dialog"
                    maxWidth="sm"
                >
                    <DialogTitle description="Assign a new id to this location">
                        New location
                    </DialogTitle>
                    <DialogContent>
                        <LoremIpsum />
                        <LoremIpsum />
                        <ContextMenu
                            trigger={<Button>Show context menu</Button>}
                            menuElements={[
                                { id: 'a', label: 'Menu element A' },
                                { id: 'b', label: 'Menu element B' },
                            ]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button tertiary>Cancel</Button>
                        <Button>Save</Button>
                    </DialogActions>
                </Dialog>
            </LoremIpsum>
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
        </>
    );
};

export const ScrollDocument = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <LoremIpsum>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    scroll="document"
                    maxWidth="sm"
                >
                    <DialogTitle description="Assign a new id to this location">
                        New location
                    </DialogTitle>
                    <DialogContent>
                        <LoremIpsum />
                        <LoremIpsum />
                        <ContextMenu
                            trigger={<Button>Show context menu</Button>}
                            menuElements={[
                                { id: 'a', label: 'Menu element A' },
                                { id: 'b', label: 'Menu element B' },
                            ]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button tertiary>Cancel</Button>
                        <Button>Save</Button>
                    </DialogActions>
                </Dialog>
            </LoremIpsum>
            <LoremIpsum />
            <LoremIpsum />
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
                    disableCloseButton={false}
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
                maxWidth={'sm'}
                wide={false}
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

export const DisableCloseByEscape = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(!open)}>No close by Escape</Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                disableCloseByEscape
            >
                <DialogTitle>Kawabanga!</DialogTitle>
                <DialogContent>
                    <TextInput />
                </DialogContent>
            </Dialog>
        </>
    );
};

const BorderedDialog = styled(Dialog)`
    .Dialog-Window {
        border-left: 1px solid red;
    }
`;

export const BorderedDialogExample = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(!open)}>No close by Escape</Button>
            <BorderedDialog
                open={open}
                onClose={() => setOpen(false)}
                disableCloseByEscape
            >
                <DialogTitle>Kawabanga!</DialogTitle>
                <DialogContent>
                    <TextInput />
                </DialogContent>
            </BorderedDialog>
        </>
    );
};

export const WithTooltip = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth={'sm'} wide={false}>
                <DialogContent>
                    <Tooltip trigger={<Button>Show tooltip</Button>}>
                        Tooltip!
                    </Tooltip>
                    <ContextMenu
                        trigger={<Button>Show context menu</Button>}
                        menuElements={[
                            { id: 'a', label: 'Menu element A' },
                            { id: 'b', label: 'Menu element B' },
                        ]}
                    />
                </DialogContent>
            </Dialog>

            <LoremIpsum>
                <Button onClick={() => setOpen(true)}>Open modal!</Button>
            </LoremIpsum>
        </>
    );
};

export const WithAPortalInside = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth={'sm'} wide={false}>
                <DialogContent>
                    {open && (
                        <PortalToBody>
                            <div
                                style={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    zIndex: 9999,
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                }}
                            >
                                I was portaled! Eeeeeehaaaaa!
                            </div>
                        </PortalToBody>
                    )}
                </DialogContent>
            </Dialog>

            <LoremIpsum>
                <Button onClick={() => setOpen(true)}>Open modal!</Button>
            </LoremIpsum>
        </>
    );
};

export const CustomProps = () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <>
            <Dialog open aria-label="blah" data-custom-prop="1" ref={ref}>
                <DialogTitle description="Assign a new id to this location">
                    New location
                </DialogTitle>
                <DialogContent>{'Hello world!'}</DialogContent>
                <DialogActions>
                    <Button tertiary>Cancel</Button>
                    <Button>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
