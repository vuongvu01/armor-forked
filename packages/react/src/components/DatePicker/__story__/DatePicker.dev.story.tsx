/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withWrapper } from '../../../helpers/Wrapper';

import { DatePicker } from '../DatePicker/DatePicker';
import { TextInput } from '../../TextInput';
import { Search } from '../../Search';
import { Dropdown } from '../../Dropdown';
import { Box } from '../../Box';
import { FormField, FormFieldMessage, FormFieldTooltip } from '../../FormField';

const currentDate = new Date();

export default {
    title: 'Components/DatePicker',
    component: DatePicker,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DatePicker data-testid-input="input42" />
        </Box>
    );
};

export const OtherLabel = () => {
    return (
        <Box paddingTop={20} paddingLeft={50}>
            <DatePicker label="Date *" placeholder="DD/MM/YYYY" />
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

export const WithError = () => {
    return (
        <Box paddingTop={20} paddingLeft={50}>
            <FormField>
                <DatePicker label="Readonly" error dateValue={currentDate} />
                <FormFieldMessage error oneLine>
                    The name of your droid
                </FormFieldMessage>
                <FormFieldTooltip visible>
                    Not the droids you are looking for
                </FormFieldTooltip>
            </FormField>
        </Box>
    );
};
