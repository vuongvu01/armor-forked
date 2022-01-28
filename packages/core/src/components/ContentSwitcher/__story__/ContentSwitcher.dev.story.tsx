/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import { PlaceholderIcon } from '@deliveryhero/armor-icons';
import { withWrapper } from '../../../helpers/Wrapper';

import { ContentSwitcher } from '../ContentSwitcher';
import { ContentSwitcherControl } from '../ContentSwitcherControl';
import { Stack } from '../../Stack';
import { Typography } from '../../Typography';
import { Button } from '../../Button';
import { TextInput } from '../../TextInput';
import { Flex, FlexItem } from '../../Flex';

export default {
    title: 'Components/ContentSwitcher',
    component: ContentSwitcher,
    decorators: [withWrapper],
    parameters: {},
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

export const WithText = () => {
    return (
        <Stack gutterSpacing={4}>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change 1:', switchName);
                }}
                marginBottom={4}
                width={50}
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
        </Stack>
    );
};

export const WithIcons = () => {
    return (
        <Stack gutterSpacing={4}>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change:', switchName);
                }}
                marginBottom={4}
                width={50}
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

export const Controlled = () => {
    const [selectedNameTest, setSelectedNameTest] = useState('2');
    return (
        <Stack gutterSpacing={4}>
            <Flex justifyContent="space-between" width={125}>
                <FlexItem>
                    <Button onClick={() => setSelectedNameTest('1')}>
                        Set to 1
                    </Button>
                </FlexItem>
                <FlexItem>
                    <Button onClick={() => setSelectedNameTest('2')}>
                        Set to 2
                    </Button>
                </FlexItem>
                <FlexItem>
                    <Button onClick={() => setSelectedNameTest('3')}>
                        Set to 3
                    </Button>
                </FlexItem>
                <FlexItem>
                    <Button onClick={() => setSelectedNameTest('4')}>
                        Set to 4
                    </Button>
                </FlexItem>
                <FlexItem>
                    <Button onClick={() => setSelectedNameTest('5')}>
                        Set to 5
                    </Button>
                </FlexItem>
            </Flex>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change:', switchName);
                    setSelectedNameTest(switchName);
                }}
                switchName={selectedNameTest}
                width={125}
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

export const WithDefaultSelected = () => {
    return (
        <Stack gutterSpacing={4}>
            <ContentSwitcher
                onSwitchNameChange={(switchName: string) => {
                    console.log('On switch change:', switchName);
                }}
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
