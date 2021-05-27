import React, { FC, ReactChild, useCallback } from 'react';
import { PseudoEventType, ScalarType } from '../../../../type';
import { Dropdown, DropdownPropsType } from '../../../Dropdown';
import { FilterEditorConditionPropsType } from '../type';
import { DropdownValueType } from '../../../Dropdown/type';

type FilterEditorEnumConditionAttributesType = {
    options: Array<{
        label: ReactChild;
        value: ScalarType;
    }>;
};

export const FilterEditorEnumCondition: FC<FilterEditorConditionPropsType> = ({
    condition,
    conditionValue,
    onConditionValueChange,
}) => {
    const { label, multiple, attributes } = condition;
    const { options } =
        (attributes as FilterEditorEnumConditionAttributesType) || {};
    const { value } = conditionValue || {};

    const onChange = useCallback(
        (event: PseudoEventType<DropdownValueType>) => {
            onConditionValueChange({
                value: event.target.value,
            });
        },
        [onConditionValueChange],
    );

    return (
        <Dropdown
            wide
            label={label}
            multiple={multiple}
            options={options}
            value={
                (value as DropdownPropsType['value']) || (multiple ? [] : '')
            }
            onChange={onChange}
        />
    );
};
