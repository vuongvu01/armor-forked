import React, { ChangeEvent, FC, useCallback } from 'react';
import { TextInput } from '../../../TextInput';
import { ScalarType } from '../../../../type';
import { FilterEditorConditionPropsType } from '../type';

export const FilterEditorStringCondition: FC<FilterEditorConditionPropsType> = ({
    condition,
    conditionValue,
    onConditionValueChange,
}) => {
    const { label } = condition;
    const { value } = conditionValue || {};

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onConditionValueChange({
                value: event.target.value,
            });
        },
        [onConditionValueChange],
    );

    return (
        <TextInput
            wide
            label={label}
            value={(value as ScalarType) || ''}
            onChange={onChange}
            autoComplete="off"
        />
    );
};
