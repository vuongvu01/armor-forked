import React from 'react';
import { EllipsisVerticalIcon } from '@deliveryhero/armor-icons';

import { ContextMenu } from '../../../src/components/ContextMenu';
import { IconButton, MenuElement } from '../../../src';

export default {
    title: 'ContextMenu',
    component: ContextMenu,
};

export const Basic = () => (
    <ContextMenu
        trigger={
            <IconButton>
                <EllipsisVerticalIcon large />
            </IconButton>
        }
        align="bottom"
        open
    >
        <MenuElement selected>Edit</MenuElement>
        <MenuElement>Delete</MenuElement>
    </ContextMenu>
);

const menuElements = [
    {
        id: 'edit',
        label: 'Edit',
        props: { 'data-elementid': 'edit', onClick: () => {} },
    },
    {
        id: 'delete',
        label: 'Delete',
        props: {
            'data-elementid': 'delete',
            onClick: () => {},
            selected: true,
        },
    },
    {
        id: 'disabled',
        label: 'Disabled',
        props: {
            disabled: true,
        },
    },
];

export const AsMenu = () => (
    <ContextMenu
        open
        trigger={
            <IconButton>
                <EllipsisVerticalIcon large />
            </IconButton>
        }
        align="bottom-end"
        menuElements={menuElements}
        width={30}
    />
);
