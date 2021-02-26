/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withWrapper } from '../../../helpers/Wrapper';

import { DatePicker } from '../DatePicker';
import { TextInput } from '../../TextInput';
import { Search } from '../../Search';
import { Dropdown } from '../../Dropdown';
import { Box } from '../../Box';

export default {
    title: 'Components/DatePicker',
    component: DatePicker,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DatePicker />
        </Box>
    );
};

export const OtherLabel = () => {
    return (
        <Box paddingTop={20} paddingLeft={50}>
            <DatePicker label="Moooooo" />
        </Box>
    );
};

export const AllOfThem = () => {
    return (
        <>
            <Box marginBottom={2}>
                <TextInput /> <TextInput /> <TextInput /> <TextInput />{' '}
            </Box>
            <Box marginBottom={2}>
                <DatePicker /> <Dropdown /> <TextInput /> <Search />
            </Box>
            <Box>
                <DatePicker /> <Dropdown /> <TextInput /> <Search />
            </Box>
        </>
    );
};

export const Disabled = () => {
    return (
        <Box paddingTop={20} paddingLeft={50}>
            <DatePicker label="Disabled" disabled />
        </Box>
    );
};

export const ReadOnly = () => {
    return (
        <Box paddingTop={20} paddingLeft={50}>
            <DatePicker label="Readonly" readOnly />
        </Box>
    );
};
