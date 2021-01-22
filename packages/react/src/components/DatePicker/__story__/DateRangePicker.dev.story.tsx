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
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker dateValue={dateRange} />
        </Box>
    );
};

export const Uncontrolled = () => {
    const [dateRange, setDateRange] = useState<[Date, Date]>([
        new Date(),
        new Date(),
    ]);

    return (
        <Box paddingTop={20} paddingLeft={100}>
            <DateRangePicker defaultDateValue={dateRange} />
        </Box>
    );
};
