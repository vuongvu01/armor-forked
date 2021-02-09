/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withWrapper } from '../../../helpers/Wrapper';

import { DateRangePicker } from '..';
import { Box } from '../../Box';

export default {
    title: 'Components/DateRangePicker',
    component: DateRangePicker,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => {
    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker />
        </Box>
    );
};

export const Controlled = () => {
    const [dateRange, setDateRange] = useState<[Date, Date] | undefined>([
        new Date(),
        new Date(),
    ]);

    const onDateValueChange = (range?: [Date, Date]) => {
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

    const onDateValueChange = (range?: [Date, Date]) => {
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

    const onDateValueChange = (range?: [Date, Date]) => {
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

    const onDateValueChange = (range?: [Date, Date]) => {
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

    const onDateValueChange = (range?: [Date, Date]) => {
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
