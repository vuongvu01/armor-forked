/* eslint-disable no-console,import/no-unresolved */

import React, { useState, MouseEvent } from 'react';
import { EllipsisVerticalIcon } from '@deliveryhero/armor-icons';

import { ContextMenu } from '../ContextMenu';
import { IconButton } from '../../IconButton';
import { Box } from '../../Box';
import { MenuElement } from '../../Menu/MenuElement';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/ContextMenu',
    component: ContextMenu,
    decorators: [withWrapper],
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
                <MenuElement
                    typographyProp={{ paragraph: true, medium: true }}
                    small
                >
                    Edit
                </MenuElement>
                <MenuElement
                    typographyProp={{ paragraph: true, medium: true }}
                    small
                >
                    Delete
                </MenuElement>
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
                onToggle={(state) => {
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
                <MenuElement
                    onClick={() => setOpen(false)}
                    typographyProp={{ paragraph: true, medium: true }}
                    small
                >
                    Edit
                </MenuElement>
                <MenuElement
                    onClick={() => setOpen(false)}
                    typographyProp={{ paragraph: true, medium: true }}
                    small
                >
                    Delete
                </MenuElement>
            </ContextMenu>
        </Box>
    );
};

export const Menu = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const onElementClick = (event: MouseEvent<HTMLElement>) => {
        const id = (event.currentTarget as HTMLElement).getAttribute(
            'data-elementid',
        );

        setSelected(id);
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
    ].map((item) => ({
        ...item,
        props: {
            ...item.props,
            selected: item.id === selected,
        },
    }));

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
                <MenuElement>I will always be with you</MenuElement>
            </ContextMenu>
        </Box>
    );
};

export const DefaultOpen = () => {
    return (
        <Box paddingTop={50} paddingLeft={50}>
            <ContextMenu
                defaultOpen
                trigger={
                    <IconButton>
                        <EllipsisVerticalIcon large />
                    </IconButton>
                }
                align="bottom"
            >
                <MenuElement>I am open by default</MenuElement>
            </ContextMenu>
        </Box>
    );
};

export const ElementSelect = () => {
    const menuElements = [
        {
            id: 'edit',
            label: 'Edit',
        },
        {
            id: 'delete',
            label: 'Delete',
        },
    ];

    return (
        <Box paddingTop={50} paddingLeft={50}>
            <ContextMenu
                trigger={
                    <IconButton>
                        <EllipsisVerticalIcon large />
                    </IconButton>
                }
                align="bottom-end"
                menuElements={menuElements}
                width={30}
                onMenuElementSelect={(id, element, extras) => {
                    console.log(element);
                    extras.closeMenu();
                }}
            />
        </Box>
    );
};

export const DisabledMenuItem = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const onElementClick = (event: MouseEvent<HTMLElement>) => {
        const id = (event.currentTarget as HTMLElement).getAttribute(
            'data-elementid',
        );

        setSelected(id);
    };
    const menuElements = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            props: {
                'data-elementid': 'dashboard',
                onClick: onElementClick,
            },
        },
        {
            id: 'profile',
            label: 'Profile',
            props: {
                'data-elementid': 'profile',
                onClick: onElementClick,
                disabled: true,
            },
        },
        {
            id: 'settings',
            label: 'Settings',
            props: { 'data-elementid': 'settings', onClick: onElementClick },
        },
        {
            id: 'logout',
            label: 'Logout',
            props: { 'data-elementid': 'logout', onClick: onElementClick },
        },
    ].map((item) => ({
        ...item,
        props: {
            ...item.props,
            selected: item.id === selected,
        },
    }));
    return (
        <Box paddingTop={50} paddingLeft={50}>
            <ContextMenu
                trigger={
                    <IconButton>
                        <EllipsisVerticalIcon large />
                    </IconButton>
                }
                align="bottom"
                menuElements={menuElements}
                width={50}
            />
        </Box>
    );
};
