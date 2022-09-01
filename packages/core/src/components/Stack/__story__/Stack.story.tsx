import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Stack } from '../Stack';
import { StackItem } from '../StackItem';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/Stack',
    component: Stack,
    decorators: [withWrapper],
    parameters: {},
};

const style1 = {
    background: 'yellowgreen',
    padding: '20px',
    color: 'white',
};

const style2 = { background: 'green', padding: '20px', color: 'white' };

const style3 = {
    background: 'darkseagreen',
    padding: '20px',
    color: 'white',
};

export const DefaultLayout = () => (
    <Stack>
        <StackItem>
            <div style={style1}>Item 1</div>
        </StackItem>
        <StackItem>
            <div style={style2}>Item 2</div>
        </StackItem>
        <StackItem>
            <div style={style3}>Item 3</div>
        </StackItem>
    </Stack>
);

export const ReverseDirection = () => (
    <Stack reverse>
        <StackItem>
            <div style={style1}>Item 1</div>
        </StackItem>
        <StackItem>
            <div style={style2}>Item 2</div>
        </StackItem>
        <StackItem>
            <div style={style3}>Item 3</div>
        </StackItem>
    </Stack>
);

export const NestedStack = () => (
    <Stack>
        <StackItem flexGrow={1}>
            <div style={style1}>Item 1</div>
        </StackItem>
        <StackItem flexGrow={1}>
            <div style={style2}>Item 2</div>
        </StackItem>
        <StackItem flexGrow={1}>
            <div
                style={{
                    background: 'darkseagreen',
                    padding: '5px',
                    color: 'white',
                }}
            >
                <Stack>
                    <StackItem flexGrow={1}>
                        <div
                            style={{
                                background: 'orange',
                                padding: '15px',
                                color: 'white',
                            }}
                        >
                            Nested Item 1
                        </div>
                    </StackItem>
                    <StackItem flexGrow={1}>
                        <div
                            style={{
                                background: 'orangered',
                                padding: '15px',
                                color: 'white',
                            }}
                        >
                            Nested Item 2
                        </div>
                    </StackItem>
                    <StackItem flexGrow={1}>
                        <div
                            style={{
                                background: 'mediumvioletred',
                                padding: '15px',
                                color: 'white',
                            }}
                        >
                            Nested Item 3
                        </div>
                    </StackItem>
                </Stack>
            </div>
        </StackItem>
    </Stack>
);

export const AlignStackItem = () => (
    <Stack alignItems="flex-start">
        <StackItem>
            <div style={style1}>
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
            </div>
        </StackItem>
        <StackItem>
            <div style={style3}>Item 2</div>
        </StackItem>
        <StackItem flexGrow={10}>
            <div style={style2}>Item 3</div>
        </StackItem>
        <StackItem alignSelf="flex-end">
            <div style={style3}>Last one at the bottom (flex-end)</div>
        </StackItem>
    </Stack>
);

export const AlignAllAtCenter = () => (
    <Stack alignItems="center">
        <StackItem>
            <div style={style1}>
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
            </div>
        </StackItem>
        <StackItem>
            <div style={style3}>Item 2</div>
        </StackItem>
        <StackItem flexGrow={10}>
            <div style={style2}>Item 3</div>
        </StackItem>
        <StackItem>
            <div style={style3}>Item 4</div>
        </StackItem>
    </Stack>
);
