/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ForkKnifeIcon, WarningIcon } from '@deliveryhero/armor-icons';

import { Menu } from '../Menu';
import { MenuElement } from '../MenuElement';
import { Grid, GridItem } from '../../Grid';
import { loremIpsum } from '../../../helpers/LoremIpsum';

export default {
    title: 'Components/Menu',
    component: Menu,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => {
    const [primary2Expanded, setPrimary2Expanded] = useState(false);
    const [primary3Expanded, setPrimary3Expanded] = useState(false);
    const [secondary2Expanded, setSecondary2Expanded] = useState(false);
    const [secondary3Expanded, setSecondary3Expanded] = useState(false);

    return (
        <Grid
            style={{ backgroundColor: '#F7F7F7', minHeight: '30rem' }}
            gutterSpacing={10}
        >
            <GridItem xs={4}>
                <Menu>
                    <MenuElement>Primary item</MenuElement>
                    <MenuElement
                        enableExpansionHandle
                        expanded={primary2Expanded}
                        selected={primary2Expanded}
                        onClick={() => setPrimary2Expanded(!primary2Expanded)}
                    >
                        Primary item
                    </MenuElement>
                    <MenuElement
                        enableExpansionHandle
                        expanded={primary3Expanded}
                        selected={primary3Expanded}
                        onClick={() => setPrimary3Expanded(!primary3Expanded)}
                    >
                        <ForkKnifeIcon marginRight={4} medium />
                        Primary item
                    </MenuElement>
                    <MenuElement
                        secondary
                        tag="a"
                        href="https://google.com"
                        target="_blank"
                    >
                        Secondary item
                    </MenuElement>
                    <MenuElement
                        secondary
                        enableExpansionHandle
                        expanded={secondary2Expanded}
                        selected={secondary2Expanded}
                        onClick={() =>
                            setSecondary2Expanded(!secondary2Expanded)
                        }
                    >
                        Secondary item
                    </MenuElement>
                    <MenuElement tertiary>Tertiary item</MenuElement>

                    <MenuElement
                        enableExpansionHandle
                        expanded={secondary3Expanded}
                        selected={secondary3Expanded}
                        onClick={() =>
                            setSecondary3Expanded(!secondary3Expanded)
                        }
                    >
                        <ForkKnifeIcon marginRight={4} medium />
                        {loremIpsum}
                    </MenuElement>
                </Menu>
            </GridItem>
            <GridItem xs={8} paddingLeft={2}>
                11111
            </GridItem>
        </Grid>
    );
};

export const SeveralMenus = () => {
    const [primary2Expanded, setPrimary2Expanded] = useState(false);
    const [primary3Expanded, setPrimary3Expanded] = useState(false);
    const [secondary2Expanded, setSecondary2Expanded] = useState(false);
    const [secondary3Expanded, setSecondary3Expanded] = useState(false);

    return (
        <Grid
            style={{ backgroundColor: '#F7F7F7', minHeight: '30rem' }}
            gutterSpacing={10}
        >
            <GridItem xs={4}>
                <Menu enableBottomSeparator>
                    <MenuElement
                        enableExpansionHandle
                        expanded={primary3Expanded}
                        selected={primary3Expanded}
                        onClick={() => setPrimary3Expanded(!primary3Expanded)}
                    >
                        <ForkKnifeIcon marginRight={4} medium />
                        Primary item
                    </MenuElement>
                    <Menu secondary>
                        <MenuElement
                            secondary
                            enableExpansionHandle
                            expanded={secondary2Expanded}
                            selected={secondary2Expanded}
                            onClick={() =>
                                setSecondary2Expanded(!secondary2Expanded)
                            }
                        >
                            Secondary item
                        </MenuElement>
                        <Menu tertiary>
                            <MenuElement tertiary>Tertiary item</MenuElement>
                            <MenuElement tertiary>Tertiary item</MenuElement>
                        </Menu>

                        <MenuElement
                            secondary
                            enableExpansionHandle
                            expanded={secondary3Expanded}
                            selected={secondary3Expanded}
                            onClick={() =>
                                setSecondary3Expanded(!secondary3Expanded)
                            }
                        >
                            Secondary item
                        </MenuElement>
                        <Menu tertiary>
                            <MenuElement tertiary>Tertiary item</MenuElement>
                            <MenuElement tertiary>Tertiary item</MenuElement>
                        </Menu>
                    </Menu>
                </Menu>
                <Menu paddingTop={10}>
                    <MenuElement
                        enableExpansionHandle
                        expanded={primary3Expanded}
                        selected={primary3Expanded}
                        onClick={() => setPrimary3Expanded(!primary3Expanded)}
                    >
                        <ForkKnifeIcon marginRight={4} medium />
                        Primary item
                    </MenuElement>
                    <Menu secondary>
                        <MenuElement
                            secondary
                            enableExpansionHandle
                            expanded={secondary2Expanded}
                            selected={secondary2Expanded}
                            onClick={() =>
                                setSecondary2Expanded(!secondary2Expanded)
                            }
                        >
                            Secondary item
                        </MenuElement>
                        <Menu tertiary>
                            <MenuElement tertiary>Tertiary item</MenuElement>
                            <MenuElement tertiary>Tertiary item</MenuElement>
                        </Menu>

                        <MenuElement
                            secondary
                            enableExpansionHandle
                            expanded={secondary3Expanded}
                            selected={secondary3Expanded}
                            onClick={() =>
                                setSecondary3Expanded(!secondary3Expanded)
                            }
                        >
                            Secondary item
                        </MenuElement>
                        <Menu tertiary>
                            <MenuElement tertiary>Tertiary item</MenuElement>
                            <MenuElement tertiary>Tertiary item</MenuElement>
                        </Menu>
                    </Menu>
                </Menu>
            </GridItem>
            <GridItem xs={8} paddingLeft={2}>
                11111
            </GridItem>
        </Grid>
    );
};
