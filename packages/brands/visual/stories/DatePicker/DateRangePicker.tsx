import React from 'react';
import { Box, DateRangePicker, FormField } from '@deliveryhero/armor';

export default {
    title: 'DateRangePicker',
    component: DateRangePicker,
};

const dateA = new Date(2021, 2, 10, 10, 20, 30, 100);
const dateB = new Date(2021, 2, 15, 10, 20, 30, 100);

export const SelectedRange = () => (
    <DateRangePicker open dateValue={[dateA, dateB]} />
);

export const NoMinWidthAutoCorrection = () => {
    return (
        <Box paddingTop={20} paddingLeft={50}>
            <FormField>
                <DateRangePicker
                    enableTimePicker
                    enableMinWidthAutoCorrection={false}
                    error
                    dateValue={[dateA, dateB]}
                    width={70}
                />
            </FormField>
        </Box>
    );
};

export const Large = () => <DateRangePicker large />;
