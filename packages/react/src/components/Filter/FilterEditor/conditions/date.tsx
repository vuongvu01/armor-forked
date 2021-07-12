import React, { FC, useCallback, useMemo } from 'react';
import { DatePicker, DatePickerPropsType } from '../../../DatePicker';
import { FilterEditorConditionPropsType } from '../type';
import { FilterDateConditionType } from '../../conditionTypes';

export const FilterEditorDateCondition: FC<FilterEditorConditionPropsType> = ({
    condition,
    conditionType,
    conditionValue,
    onConditionValueChange,
}) => {
    const { label } = condition;
    const {
        enableTimePicker,
        formatDateTime,
    } = (conditionType as FilterDateConditionType).getAttributes();
    const { value } = conditionValue || {};

    // DatePicker can only accept Date object (at least for now), so we have to convert
    const dateValue = useMemo(() => {
        if (typeof value === 'string') {
            // todo: we may have to make a custom converter function (condition.internalizeValue)
            // todo: if the format is different from ISO
            return new Date(value);
        }

        if (!value) {
            return null;
        }

        return value as DatePickerPropsType['dateValue'];
    }, [value]);

    const onDateValueChange = useCallback(
        (newValue: DatePickerPropsType['dateValue']) => {
            onConditionValueChange({
                // todo: we may also have to use custom transformation function (condition.externalizeValue),
                // todo: in case if they need to store the date in a special format
                value: newValue,
            });
        },
        [onConditionValueChange],
    );

    return (
        <DatePicker
            enableMinWidthAutoCorrection={false}
            wide
            label={label}
            dateValue={dateValue}
            onDateValueChange={onDateValueChange}
            enableTimePicker={enableTimePicker}
            formatDateTime={formatDateTime}
        />
    );
};
