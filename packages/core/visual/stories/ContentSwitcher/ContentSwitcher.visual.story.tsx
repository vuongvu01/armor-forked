import React, { useState } from 'react';
import { PlaceholderIcon } from '@deliveryhero/armor-icons';

import {
    ContentSwitcher,
    Stack,
    ContentSwitcherControl,
    Typography,
} from '../../../src/components';

export default {
    title: 'ContentSwitcher',
    component: ContentSwitcher,
};

export const AllStates = () => {
    return (
        <Stack gutterSpacing={4}>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change 1:', switchName);
                }}
                marginBottom={4}
                width={50}
                defaultSwitchName="1"
            >
                <ContentSwitcherControl switchName="1">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="2">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>
            <ContentSwitcher
                marginBottom={4}
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change 2:', switchName);
                }}
                width={75}
                defaultSwitchName="2"
            >
                <ContentSwitcherControl switchName="1">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="2">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="3">
                    <Typography>Option 3</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>
            <ContentSwitcher
                marginBottom={4}
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change 3:', switchName);
                }}
                width={100}
                defaultSwitchName="3"
            >
                <ContentSwitcherControl switchName="1">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="2">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="3">
                    <Typography>Option 3</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="4">
                    <Typography>Option 4</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>
            <ContentSwitcher
                marginBottom={4}
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change 3:', switchName);
                }}
                width={125}
                defaultSwitchName="4"
            >
                <ContentSwitcherControl switchName="1">
                    <Typography>Option 1</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="2">
                    <Typography>Option 2</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="3">
                    <Typography>Option 3</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="4">
                    <Typography>Option 4</Typography>
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="5">
                    <Typography>Option 5</Typography>
                </ContentSwitcherControl>
            </ContentSwitcher>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change:', switchName);
                }}
                marginBottom={4}
                width={50}
                defaultSwitchName="1"
            >
                <ContentSwitcherControl switchName="1">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="2">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
            </ContentSwitcher>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change:', switchName);
                }}
                marginBottom={4}
                width={75}
                defaultSwitchName="2"
            >
                <ContentSwitcherControl switchName="1">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="2">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="3">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
            </ContentSwitcher>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change:', switchName);
                }}
                marginBottom={4}
                width={100}
                defaultSwitchName="3"
            >
                <ContentSwitcherControl switchName="1">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="2">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="3">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="4">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
            </ContentSwitcher>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change:', switchName);
                }}
                marginBottom={4}
                width={125}
                defaultSwitchName="4"
            >
                <ContentSwitcherControl switchName="1">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="2">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="3">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="4">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
                <ContentSwitcherControl switchName="5">
                    <PlaceholderIcon medium />
                </ContentSwitcherControl>
            </ContentSwitcher>
        </Stack>
    );
};
