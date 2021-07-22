import React from 'react';

import { List } from '../../../src/components/List';
import { ListItem } from '../../../src/components/List/ListItem/ListItem';

import { Switch } from '../../../src/components/Switch';

import { Tag } from '../../../src/components/Tag';

import { MapIcon, ArrowRightIcon } from '@deliveryhero/armor-icons';

export default {
    title: 'List',
    component: List,
};

export const DefaultLayout = () => {
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
                    actions={
                        <>
                            <MapIcon />

                            <MapIcon />

                            <MapIcon />
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
            </List>

            <br />

            <br />

            <br />

            <List>
                <ListItem size="medium" primaryIcon={<MapIcon />}>
                    Medium
                </ListItem>

                <ListItem size="medium">Medium</ListItem>
            </List>

            <br />

            <br />

            <br />

            <List>
                <ListItem size="large" primaryIcon={<MapIcon />}>
                    Large
                </ListItem>

                <ListItem size="large">Large</ListItem>
            </List>
        </>
    );
};

export const ListWithChevron = () => {
    return (
        <>
            <List>
                <ListItem
                    subtitle="subtitle"
                    enableLink={true}
                    href="https://www.deliveryhero.com"
                    target="_blank"
                    actions={<ArrowRightIcon small />}
                >
                    With Chevron
                </ListItem>

                <ListItem
                    lead="lead"
                    enableLink={true}
                    href="https://www.deliveryhero.com"
                    target="_blank"
                    actions={<ArrowRightIcon small />}
                >
                    With Chevron
                </ListItem>

                <ListItem
                    lead="lead"
                    disabled={true}
                    enableLink={true}
                    href="https://www.deliveryhero.com"
                    target="_blank"
                    actions={<ArrowRightIcon small />}
                >
                    With Chevron and disabled
                </ListItem>
            </List>
        </>
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

export const primaryIconAllCases = () => {
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
