import React from 'react';

import { DatePicker } from '../../../src/components';

export default {
    title: 'DatePicker',
    component: DatePicker,
};

export const Basic = () => <DatePicker />;

export const WithLabel = () => <DatePicker label="Foo" />;

export const WithPlaceholder = () => (
    <DatePicker label="Date *" placeholder="DD/MM/YYYY" />
);

const date = new Date(2021, 2, 21, 10, 20, 30, 100);

export const Open = () => <DatePicker open dateValue={date} />;

export const Selected = () => <DatePicker open dateValue={date} />;

export const WithTimePickerSelected = () => (
    <DatePicker open enableTimePicker dateValue={date} />
);

export const WithActionButtons = () => (
    <DatePicker open enableActionButtons dateValue={date} />
);

export const WithActionButtonsAndTimePicker = () => (
    <DatePicker open enableActionButtons enableTimePicker dateValue={date} />
);

export const MonthYearSelector = () => (
    <DatePicker open defaultMonthYearSelectorOpen dateValue={date} />
);

export const Error = () => (
    <DatePicker open defaultMonthYearSelectorOpen dateValue={date} error />
);
