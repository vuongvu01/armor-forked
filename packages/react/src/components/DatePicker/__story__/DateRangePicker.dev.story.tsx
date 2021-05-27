/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withWrapper } from '../../../helpers/Wrapper';

import { DatePicker, DateRangePicker } from '..';
import { Box } from '../../Box';
import { Button } from '../../Button';
import { DateVector } from '../utils/DateVector';
import { makeTheme, ThemeProvider } from '../../../styling';

export default {
    title: 'Components/DateRangePicker',
    component: DateRangePicker,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker data-testid-input="input42" />
        </Box>
    );
};

export const Controlled = () => {
    const [dateRange, setDateRange] = useState<[Date, Date] | undefined | null>(
        [new Date(), new Date()],
    );

    const onDateValueChange = (range?: [Date, Date] | null) => {
        setDateRange(range);
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                dateValue={dateRange}
                onDateValueChange={onDateValueChange}
            />
        </Box>
    );
};

export const Uncontrolled = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                defaultDateValue={dateRange}
                onDateValueChange={onDateValueChange}
                defaultOpen
            />
        </Box>
    );
};

export const UncontrolledWithTime = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                defaultDateValue={dateRange}
                onDateValueChange={onDateValueChange}
                defaultOpen
                enableTimePicker
            />
        </Box>
    );
};

export const WithConfirmation = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(2021, 4, 18, 10, 30),
        new Date(2021, 4, 28, 15, 40),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                defaultDateValue={dateRange}
                onDateValueChange={onDateValueChange}
                defaultOpen
                enableActionButtons
            />
        </Box>
    );
};

export const WithConfirmationAndTime = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(2021, 4, 18, 10, 30),
        new Date(2021, 4, 28, 15, 40),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker
                defaultDateValue={dateRange}
                onDateValueChange={onDateValueChange}
                defaultOpen
                enableActionButtons
                enableTimePicker
            />
        </Box>
    );
};

const moveForward = (range: [Date, Date]) => {
    const nextDateStart = DateVector.createFromLocalDate(range[0]);
    const nextDateEnd = DateVector.createFromLocalDate(range[1]);

    nextDateStart.addDay(1);
    nextDateStart.addMinute(1);
    nextDateEnd.addDay(1);
    nextDateEnd.addMinute(1);

    return [
        nextDateStart.convertToLocalDate(),
        nextDateEnd.convertToLocalDate(),
    ] as [Date, Date];
};

export const ControlledSetExternally = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    const onDateValueChange = (range?: [Date, Date] | null) => {
        if (range) {
            setDateRange(range);
            console.log(`${range[0].toString()} ${range[1].toString()}`);
        }
    };

    const updateDates = () => {
        setDateRange(moveForward(dateRange));
    };

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <Button onClick={updateDates}>Update dates</Button>
            <DateRangePicker
                dateValue={dateRange}
                onDateValueChange={onDateValueChange}
                enableTimePicker
            />
        </Box>
    );
};

export const Many = () => {
    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker />
            <DateRangePicker />
            <br />
            <DateRangePicker />
        </Box>
    );
};

const customTheme = makeTheme({
    armor: {
        components: {
            DateRangePicker: {
                borderWidth: '10px',
            },
            DatePicker: {
                borderWidth: '10px',
            },
        },
    },
});

export const CustomTheme = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <DateRangePicker />
            <DatePicker />
        </ThemeProvider>
    );
};

export const WithTimePickerAndNotSelected = () => {
    return <DateRangePicker open enableTimePicker />;
};
