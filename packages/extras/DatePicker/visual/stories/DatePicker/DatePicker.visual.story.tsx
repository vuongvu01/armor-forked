import React from 'react';

import { DATE_PICKER_INFINITY, DatePicker } from '../../../src/components';
import { DateVector } from '../../../src/components/DatePicker/utils/DateVector';

export default {
    title: 'DatePicker',
    component: DatePicker,
};

const makeDateString = (date: Date) => {
    const vect = DateVector.createFromLocalDate(date);

    return [vect.month, vect.day, vect.year].join('-');
};

export const Basic = () => <DatePicker />;

export const Large = () => <DatePicker large />;

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

const date2 = new Date(2021, 7, 10, 10, 4, 0, 100);

export const DisabledDates = () => (
    <DatePicker
        open
        dateValue={date2}
        currentDate={date2}
        allowedDateRanges={[['current+1', DATE_PICKER_INFINITY]]}
    />
);

export const WithAllEnabled = () => {
    const localDate = new Date(2021, 7, 10, 10, 10, 20, 100);

    return (
        <DatePicker
            dateValue={localDate}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableApplyButton
            enableTodayButton
            enableClearSelectionButton
            open
        />
    );
};

export const WithTodayButtonEnabledOnly = () => {
    const localDate = new Date(2021, 7, 10, 10, 10, 20, 100);

    return (
        <DatePicker
            open
            dateValue={localDate}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableTodayButton
        />
    );
};

export const WithApplyButtonEnabledOnly = () => {
    const localDate = new Date(2021, 7, 10, 10, 10, 20, 100);

    return (
        <DatePicker
            open
            dateValue={localDate}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableApplyButton
        />
    );
};

export const WithClearSelectionButtonEnabledOnly = () => {
    const localDate = new Date(2021, 7, 10, 10, 10, 20, 100);

    return (
        <DatePicker
            open
            dateValue={localDate}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            enableClearSelectionButton
        />
    );
};

export const WithTakenDays = () => {
    const localDate = new Date(2021, 7, 10, 10, 10, 20, 100);

    return (
        <DatePicker
            open
            dateValue={localDate}
            enableTimePicker
            enableMinWidthAutoCorrection={false}
            isDateFree={(dateItem) => makeDateString(dateItem) !== '7-12-2021'}
        />
    );
};
