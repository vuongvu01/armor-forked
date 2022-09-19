/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, BrowserRouter } from 'react-router-dom';
import { MapIcon, ArrowRightIcon } from '@deliveryhero/armor-icons';

import { withWrapper } from '../../../helpers/Wrapper';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { Switch } from '../../Switch';
import { Tag } from '../../Tag';

export default {
    title: 'Core/List',
    component: List,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <>
            <List>
                <ListItem
                    divider={true}
                    secondaryItemText="Secondary"
                    primaryIcon={<MapIcon />}
                >
                    Primary with icon
                </ListItem>

                <ListItem
                    secondaryItemText="Secondary"
                    divider={true}
                    size="small"
                    actions={
                        <>
                            <MapIcon small />

                            <MapIcon small marginLeft={2} />

                            <MapIcon small marginLeft={2} />
                        </>
                    }
                >
                    Secondary with icons
                </ListItem>

                <ListItem
                    secondaryItemText="Secondary"
                    divider={true}
                    disabled={true}
                    primaryIcon={<MapIcon />}
                    actions={<MapIcon />}
                >
                    Disabled
                </ListItem>
            </List>
        </>
    );
};

export const ListWithSwitch = () => {
    return (
        <>
            <List>
                <ListItem
                    primaryIcon={<MapIcon />}
                    actions={<Switch onChange={() => {}} />}
                >
                    With Switch
                </ListItem>

                <ListItem
                    actions={<Switch checked={true} onChange={() => {}} />}
                >
                    With Switch
                </ListItem>

                <ListItem actions={<Switch onChange={() => {}} />}>
                    With Switch
                </ListItem>
            </List>
        </>
    );
};

export const ListWithSpecificWidth = () => {
    return (
        <>
            <List width="440px">
                <ListItem
                    primaryIcon={<MapIcon />}
                    actions={<Switch onChange={() => {}} />}
                >
                    With Switch
                </ListItem>

                <ListItem
                    actions={<Switch checked={true} onChange={() => {}} />}
                >
                    With Switch
                </ListItem>

                <ListItem actions={<Switch onChange={() => {}} />}>
                    With Switch
                </ListItem>
            </List>
        </>
    );
};

export const ListWithTag = () => {
    return (
        <>
            <List>
                <ListItem actions={<Tag>Tag1</Tag>}>With Tag</ListItem>

                <ListItem lead="lead" actions={<Tag>Tag2</Tag>}>
                    With Tag
                </ListItem>

                <ListItem subtitle="subtitle" actions={<Tag>Tag3</Tag>}>
                    With Tag
                </ListItem>
            </List>
        </>
    );
};

export const ListItemWithLead = () => {
    return (
        <>
            <List>
                <ListItem divider={true} lead="lead">
                    With lead
                </ListItem>

                <ListItem divider={true} lead="lead" primaryIcon={<MapIcon />}>
                    With lead & Icon
                </ListItem>
            </List>
        </>
    );
};

export const ListItemWithSubtitle = () => {
    return (
        <>
            <List>
                <ListItem divider={true} subtitle="subtitle">
                    With Subtitle
                </ListItem>

                <ListItem
                    divider={true}
                    subtitle="subtitle"
                    primaryIcon={<MapIcon />}
                >
                    With subtitle & icon
                </ListItem>
            </List>
        </>
    );
};

export const SmallMediumLarge = () => {
    return (
        <>
            <List small>
                <ListItem
                    secondaryItemText="secondary"
                    actions={<Switch onChange={() => {}} />}
                    size="small"
                    primaryIcon={<MapIcon />}
                >
                    Small
                </ListItem>

                <ListItem
                    size="small"
                    secondaryItemText="secondary"
                    actions={<Switch onChange={() => {}} />}
                >
                    Small
                </ListItem>

                <ListItem secondaryItemText="secondary" size="small">
                    Small
                </ListItem>
            </List>

            <br />

            <br />

            <br />

            <List>
                <ListItem size="medium" primaryIcon={<MapIcon />}>
                    Medium
                </ListItem>

                <ListItem size="medium">Medium</ListItem>
                <ListItem size="medium" secondaryItemText="secondary">
                    Medium
                </ListItem>
            </List>

            <br />

            <br />

            <br />

            <List>
                <ListItem size="large" primaryIcon={<MapIcon />}>
                    Large
                </ListItem>

                <ListItem size="large">Large</ListItem>
                <ListItem size="large" secondaryItemText="secondary">
                    Large
                </ListItem>
            </List>
        </>
    );
};

export const ListWithInactiveItems = () => {
    return (
        <BrowserRouter>
            <List>
                <ListItem
                    subtitle="Sub-title"
                    enableLink={true}
                    href="https://www.deliveryhero.com"
                    target="_blank"
                    actions={<ArrowRightIcon small />}
                >
                    With Chevron
                </ListItem>

                <ListItem
                    enableLink
                    inactive
                    href="https://www.deliveryhero.com"
                    target="_blank"
                    secondaryItemText="Idle"
                    actions={<ArrowRightIcon small />}
                >
                    With Chevron
                </ListItem>

                <ListItem
                    lead="lead"
                    disabled
                    enableLink
                    secondaryItemText="Disabled"
                    href="https://www.deliveryhero.com"
                    target="_blank"
                    actions={<ArrowRightIcon small />}
                >
                    With Chevron and disabled
                </ListItem>
                <ListItem
                    enableLink
                    inactive
                    tag={Link}
                    to="/pasta"
                    actions={<ArrowRightIcon small />}
                >
                    With React router Link and inactive states, With React
                    router Link and inactive states, With React router Link and
                    inactive states, With React router Link and inactive states
                </ListItem>
            </List>
        </BrowserRouter>
    );
};

export const LongListTitle = () => {
    return (
        <>
            <List width="440px">
                <ListItem lead="lead" secondaryItemText="secondary">
                    With title so long that it causes a line break tellus ac
                    cursus commodo.
                </ListItem>

                <ListItem lead="lead" secondaryItemText="secondary">
                    With title so long that it causes a line break tellus ac
                    cursus commodo.
                </ListItem>
            </List>
        </>
    );
};

export const WithDividers = () => {
    return (
        <>
            <List>
                <ListItem divider={true} primaryIcon={<MapIcon />}>
                    With Dividers
                </ListItem>

                <ListItem
                    divider={true}
                    actions={
                        <>
                            <MapIcon />

                            <MapIcon />

                            <MapIcon />
                        </>
                    }
                >
                    With Dividers
                </ListItem>

                <ListItem divider={true}>With Dividers</ListItem>
            </List>
        </>
    );
};

export const OnlyPrimary = () => {
    return (
        <>
            <List>
                <ListItem divider={true} enableSecondaryItem={false}>
                    Only Primary
                </ListItem>

                <ListItem divider={true} enableSecondaryItem={false}>
                    Only Primary
                </ListItem>
            </List>
        </>
    );
};

export const PrimaryIconAllCases = () => {
    return (
        <>
            <List>
                <ListItem divider={true} primaryIcon={<MapIcon />}>
                    Primary Icon with single line
                </ListItem>
            </List>

            <br />
            <br />
            <br />

            <List>
                <ListItem lead="lead" divider={true} primaryIcon={<MapIcon />}>
                    Primary Icon with lead but no wrapper
                </ListItem>
            </List>

            <br />
            <br />
            <br />

            <List>
                <ListItem
                    lead="lead"
                    divider={true}
                    primaryIcon={<MapIcon />}
                    primaryIconBackgroundColor="#EEF4FC"
                >
                    Primary Icon with lead and wrapper
                </ListItem>
            </List>

            <br />
            <br />
            <br />

            <List>
                <ListItem
                    subtitle="subtitle"
                    divider={true}
                    primaryIcon={<MapIcon />}
                >
                    Primary Icon with subtitle but no wrapper
                </ListItem>
            </List>

            <br />
            <br />
            <br />

            <List>
                <ListItem
                    subtitle="subtitle"
                    divider={true}
                    primaryIcon={<MapIcon />}
                    primaryIconBackgroundColor="#EEF4FC"
                >
                    Primary Icon with subtitle and wrapper
                </ListItem>
            </List>

            <br />
            <br />
            <br />

            <List>
                <ListItem
                    subtitle="subtitle"
                    divider={true}
                    disabled={true}
                    primaryIcon={<MapIcon />}
                    primaryIconBackgroundColor="#EEF4FC"
                >
                    Disabled primary icon wrapper
                </ListItem>
            </List>

            <br />
            <br />
            <br />

            <List>
                <ListItem
                    subtitle="subtitle"
                    divider={true}
                    enableLink={true}
                    href="https://www.deliveryhero.com"
                    target="_blank"
                    primaryIcon={<MapIcon />}
                    primaryIconBackgroundColor="#EEF4FC"
                >
                    With primary icon wrapper as link
                </ListItem>
            </List>
        </>
    );
};
