import React from 'react';
import { ForkKnifeIcon } from '@deliveryhero/armor-icons';

import { MenuElement } from '../../../src/components';
import { loremIpsum } from '../../../src/helpers/LoremIpsum';

export default {
    title: 'MenuElement',
    component: MenuElement,
};

export const MenuElementDefault = () => <MenuElement>Hello</MenuElement>;

export const MenuElementSelected = () => (
    <MenuElement selected>Hello</MenuElement>
);

export const MenuElementSelectedSmall = () => (
    <MenuElement selected small>
        Hello
    </MenuElement>
);

export const MenuElementSmall = () => <MenuElement small>Hello</MenuElement>;

export const ExpansionHandle = () => (
    <MenuElement enableExpansionHandle>Hello</MenuElement>
);

export const ExpansionHandleExpanded = () => (
    <MenuElement enableExpansionHandle expanded>
        Hello
    </MenuElement>
);

export const ExpansionHandleExpandedSelected = () => (
    <MenuElement enableExpansionHandle expanded selected>
        Hello
    </MenuElement>
);

export const WithIcon = () => (
    <MenuElement>
        <ForkKnifeIcon marginRight={2} medium />
        Hello
    </MenuElement>
);

export const WithIconOverflow = () => (
    <MenuElement>
        <ForkKnifeIcon marginRight={2} medium />
        {loremIpsum}
    </MenuElement>
);

export const Secondary = () => <MenuElement secondary>Hello</MenuElement>;

export const SecondaryWithHandle = () => (
    <MenuElement secondary enableExpansionHandle>
        Hello
    </MenuElement>
);

export const Tertiary = () => <MenuElement tertiary>Hello</MenuElement>;

export const TertiaryWithHandle = () => (
    <MenuElement tertiary enableExpansionHandle>
        Hello
    </MenuElement>
);
