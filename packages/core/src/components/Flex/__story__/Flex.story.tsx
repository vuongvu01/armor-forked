import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
import { Flex } from '../Flex';
import { FlexItem } from '../FlexItem';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Flex',
    component: Flex,
    decorators: [withKnobs, withWrapper],
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

export const RowLayout = () => (
    <Flex>
        <FlexItem>
            <div style={style1}>Row Item 1</div>
        </FlexItem>
        <FlexItem>
            <div style={style2}>Row Item 2</div>
        </FlexItem>
        <FlexItem>
            <div style={style3}>Row Item 3</div>
        </FlexItem>
    </Flex>
);

export const ColumnLayout = () => (
    <Flex direction="column">
        <FlexItem>
            <div style={style1}>Column Item 1</div>
        </FlexItem>
        <FlexItem>
            <div style={style2}>Column Item 2</div>
        </FlexItem>
        <FlexItem>
            <div style={style3}>Column Item 3</div>
        </FlexItem>
    </Flex>
);

export const ReverseRowDirection = () => (
    <Flex direction="row-reverse">
        <FlexItem>
            <div style={style1}>Row Item 1</div>
        </FlexItem>
        <FlexItem>
            <div style={style2}>Row Item 2</div>
        </FlexItem>
        <FlexItem>
            <div style={style3}>Row Item 3</div>
        </FlexItem>
    </Flex>
);

export const ReverseColumnDirection = () => (
    <Flex direction="column-reverse">
        <FlexItem>
            <div style={style1}>Column Item 1</div>
        </FlexItem>
        <FlexItem>
            <div style={style2}>Column Item 2</div>
        </FlexItem>
        <FlexItem>
            <div style={style3}>Column Item 3</div>
        </FlexItem>
    </Flex>
);
