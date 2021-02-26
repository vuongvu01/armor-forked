import React from 'react';

import { DatePicker } from '../../../src/components';

export default {
    title: 'DatePicker',
    component: DatePicker,
};

export const Basic = () => <DatePicker />;

export const WithLabel = () => <DatePicker label="Foo" />;

export const Open = () => <DatePicker open />;

const date = new Date(2021, 2, 21, 10, 20, 30, 100);

export const Selected = () => <DatePicker open dateValue={date} />;

export const WithTimePickerSelected = () => (
    <DatePicker open enableTimePicker dateValue={date} />
);

export const WithActionButtons = () => <DatePicker open enableActionButtons />;

export const WithActionButtonsAndTimePicker = () => (
    <DatePicker open enableActionButtons enableTimePicker dateValue={date} />
);

export const MonthYearSelector = () => (
    <DatePicker open defaultMonthYearSelectorOpen />
);
