import React from 'react';

import { DateRangePicker } from '../../../src/components';

export default {
    title: 'DateRangePicker',
    component: DateRangePicker,
};

const dateA = new Date(2021, 2, 10, 10, 20, 30, 100);
const dateB = new Date(2021, 2, 15, 10, 20, 30, 100);

export const SelectedRange = () => (
    <DateRangePicker open dateValue={[dateA, dateB]} />
);
