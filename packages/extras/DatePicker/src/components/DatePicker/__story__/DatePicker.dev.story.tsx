/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';

import {
    TextInput,
    Search,
    Dropdown,
    Box,
    FormField,
    FormFieldMessage,
    FormFieldTooltip,
    Typography,
} from '@deliveryhero/armor';
import { DATE_PICKER_INFINITY } from '../constants';
import { DatePicker, DatePickerPropsType } from '../DatePicker';
import { withWrapper } from '../../../helpers/Wrapper';

const currentDate = new Date();

export default {
    title: 'Components/DatePicker',
    component: DatePicker,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <Box paddingTop={20}>
            <DatePicker data-testid-input="input42" />
        </Box>
    );
};

export const WithMaskedInput = () => {
    const allowedDateRanges = [
        ['current+1', DATE_PICKER_INFINITY],
        // ['current', null],
        // ['current-3', 'current+3'],
        // ['current-1', null],
        // ['current*2', null],
        // ['bullshit', null],
    ] as DatePickerPropsType['allowedDateRanges'];
    return (
        <>
            <Box marginBottom={2}>
                <Typography> Default</Typography>
                <DatePicker
                    data-testid-input="input43"
                    inputMaskEnabled={true}
                />
            </Box>
            <Box marginBottom={2}>
                <Typography> Time picker enabled</Typography>

                <DatePicker
                    data-testid-input="input43"
                    inputMaskEnabled={true}
                    enableTimePicker
                />
            </Box>
            <Box marginBottom={2}>
                <Typography>Time picker enabled with Allowed Ranges</Typography>

                <DatePicker
                    data-testid-input="input43"
                    inputMaskEnabled={true}
                    enableTimePicker
                    allowedDateRanges={allowedDateRanges}
                />
            </Box>
        </>
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

export const WithDisabledDates = () => {
    const allowedDateRanges = [
        ['current+1', DATE_PICKER_INFINITY],
        // ['current', null],
        // ['current-3', 'current+3'],
        // ['current-1', null],
        // ['current*2', null],
        // ['bullshit', null],
    ] as DatePickerPropsType['allowedDateRanges'];

    const [value, setValue] = useState<Date | null | undefined>(currentDate);

    return (
        <DatePicker
            dateValue={value}
            onDateValueChange={setValue}
            allowedDateRanges={allowedDateRanges}
            onDayMouseEnter={(date) => {
                console.log(date);
            }}
        />
    );
};

export const Errored = () => {
    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DatePicker data-testid-input="input42" error />
        </Box>
    );
};

export const WithTimeSelector = () => {
    const [value, setValue] = useState<Date | null | undefined>(
        new Date(2021, 7, 10, 10, 10, 20, 100),
    );

    return (
        <DatePicker
            open
            dateValue={value}
            onDateValueChange={setValue}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
        />
    );
};

export const WithAllEnabled = () => {
    const [value, setValue] = useState<Date | null | undefined>(
        new Date(2021, 7, 10, 10, 10, 20, 100),
    );
    const [open, setOpen] = useState(true);

    return (
        <DatePicker
            dateValue={value}
            onDateValueChange={setValue}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableActionButtons
            enableTodayButton
            enableCloseOnSelect
            open={open}
            onOpenChange={setOpen}
        />
    );
};

export const WithTimeButtonEnabledActionsDisabled = () => {
    const [value, setValue] = useState<Date | null | undefined>(
        new Date(2021, 7, 10, 10, 10, 20, 100),
    );
    const [open, setOpen] = useState(true);

    return (
        <DatePicker
            open={open}
            onOpenChange={setOpen}
            dateValue={value}
            onDateValueChange={setValue}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableTodayButton
            enableCloseOnSelect
        />
    );
};

export const WithClearButton = () => {
    const [value, setValue] = useState<Date | null | undefined>(
        new Date(2021, 7, 10, 10, 10, 20, 100),
    );
    const [open, setOpen] = useState(true);

    return (
        <DatePicker
            open={open}
            onOpenChange={setOpen}
            dateValue={value}
            onDateValueChange={setValue}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableClearSelectionButton
        />
    );
};

export const WithClearAndApply = () => {
    const [value, setValue] = useState<Date | null | undefined>(
        new Date(2021, 7, 10, 10, 10, 20, 100),
    );
    const [open, setOpen] = useState(true);

    return (
        <DatePicker
            open={open}
            onOpenChange={setOpen}
            dateValue={value}
            onDateValueChange={setValue}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableClearSelectionButton
            enableApplyButton
        />
    );
};

export const WithTodayAndApply = () => {
    return <DatePicker open enableTodayButton enableApplyButton />;
};

export const WithTodayOnly = () => {
    const [value, setValue] = useState<Date | null | undefined>(
        new Date(2021, 7, 10, 10, 10, 20, 100),
    );
    const [open, setOpen] = useState(true);

    return (
        <DatePicker
            open={open}
            onOpenChange={setOpen}
            dateValue={value}
            onDateValueChange={setValue}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableTodayButton
            enableCloseOnSelect
        />
    );
};

const d = new Date('2021-10-02T05:05:23.292+08:00');

export const DifferentTimezone = () => {
    console.log(d.getTimezoneOffset() / 60);

    return (
        <DatePicker
            wide
            enableTimePicker
            allowedDateRanges={[['current', null]]}
            defaultDateValue={d}
        />
    );
};
