/* eslint-disable no-console,import/no-unresolved */

import React, { useState, MouseEvent } from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { EllipsisVerticalIcon } from '@deliveryhero/armor-icons';

import { ContextMenu } from '../ContextMenu';
import { IconButton } from '../../IconButton';
import { Box } from '../../Box';
import { MenuElement } from '../../Menu/MenuElement';

export default {
    title: 'Components/ContextMenu',
    component: ContextMenu,
    decorators: [withKnobs],
    parameters: {},
};

export const Uncontrolled = () => {
    return (
        <Box paddingTop={50} paddingLeft={50}>
            <ContextMenu
                trigger={
                    <IconButton>
                        <EllipsisVerticalIcon large />
                    </IconButton>
                }
                align="bottom"
            >
                <MenuElement>Edit</MenuElement>
                <MenuElement>Delete</MenuElement>
            </ContextMenu>
        </Box>
    );
};

export const Controlled = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box paddingTop={50} paddingLeft={50}>
            <ContextMenu
                open={open}
                onToggle={state => {
                    console.log('TOGGLE');
                    console.log(state);
                    setOpen(state);
                }}
                trigger={
                    <IconButton>
                        <EllipsisVerticalIcon large />
                    </IconButton>
                }
                align="bottom"
            >
                <MenuElement onClick={() => setOpen(false)}>Edit</MenuElement>
                <MenuElement onClick={() => setOpen(false)}>Delete</MenuElement>
            </ContextMenu>
        </Box>
    );
};

export const Menu = () => {
    const [open, setOpen] = useState(false);

    const onElementClick = (event: MouseEvent<HTMLElement>) => {
        const id = (event.currentTarget as HTMLElement).getAttribute(
            'data-elementid',
        );
        console.log(`Selected ${id}`);
        setOpen(false);
    };
    const menuElements = [
        {
            id: 'edit',
            label: 'Edit',
            props: { 'data-elementid': 'edit', onClick: onElementClick },
        },
        {
            id: 'delete',
            label: 'Delete',
            props: { 'data-elementid': 'delete', onClick: onElementClick },
        },
    ];

    return (
        <Box paddingTop={50} paddingLeft={50}>
            <ContextMenu
                open={open}
                onToggle={setOpen}
                trigger={
                    <IconButton>
                        <EllipsisVerticalIcon large />
                    </IconButton>
                }
                align="bottom-end"
                menuElements={menuElements}
                width={30}
            />
        </Box>
    );
};

export const AlwaysOpen = () => {
    return (
        <Box paddingTop={50} paddingLeft={50}>
            <ContextMenu
                open
                trigger={
                    <IconButton>
                        <EllipsisVerticalIcon large />
                    </IconButton>
                }
                align="bottom"
            >
                I will always be with you
            </ContextMenu>
        </Box>
    );
};