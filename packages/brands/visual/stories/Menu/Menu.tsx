import React from 'react';
import { ForkKnifeIcon } from '@deliveryhero/armor-icons';
import { Menu, MenuElement } from '@deliveryhero/armor';

import { DarkBackground } from '../../../src/utils/DarkBackground';

export default {
    title: 'Menu',
    component: Menu,
};

const MenuCase = () => (
    <>
        <Menu enableBottomSeparator>
            <MenuElement enableExpansionHandle expanded selected>
                <ForkKnifeIcon marginRight={4} medium />
                Primary item
            </MenuElement>
            <Menu secondary>
                <MenuElement secondary enableExpansionHandle expanded selected>
                    Secondary item
                </MenuElement>
                <Menu tertiary>
                    <MenuElement tertiary>Tertiary item</MenuElement>
                    <MenuElement tertiary>Tertiary item</MenuElement>
                </Menu>

                <MenuElement secondary enableExpansionHandle expanded selected>
                    Secondary item
                </MenuElement>
                <Menu tertiary>
                    <MenuElement tertiary>Tertiary item</MenuElement>
                    <MenuElement tertiary>Tertiary item</MenuElement>
                </Menu>
            </Menu>
        </Menu>
        <Menu paddingTop={10}>
            <MenuElement enableExpansionHandle>
                <ForkKnifeIcon marginRight={4} medium />
                Primary item
            </MenuElement>
            <Menu secondary>
                <MenuElement secondary enableExpansionHandle>
                    Secondary item
                </MenuElement>
                <Menu tertiary>
                    <MenuElement tertiary>Tertiary item</MenuElement>
                    <MenuElement tertiary>Tertiary item</MenuElement>
                </Menu>

                <MenuElement secondary enableExpansionHandle>
                    Secondary item
                </MenuElement>
                <Menu tertiary>
                    <MenuElement tertiary>Tertiary item</MenuElement>
                    <MenuElement tertiary>Tertiary item</MenuElement>
                </Menu>
            </Menu>
        </Menu>
    </>
);

export const MenuDefault = () => <MenuCase />;

export const MenuDefaultOnDark = () => (
    <DarkBackground>
        <MenuCase />
    </DarkBackground>
);
