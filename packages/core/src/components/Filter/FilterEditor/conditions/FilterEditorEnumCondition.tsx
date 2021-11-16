import React, { FC, useCallback } from 'react';

import { PseudoEventType } from '../../../../type';
import { Dropdown, DropdownPropsType } from '../../../Dropdown';
import { FilterEditorConditionPropsType } from '../type';
import { DropdownValueType } from '../../../Dropdown/type';
import { FilterEnumConditionType } from '../../conditionTypes';

export const FilterEditorEnumCondition: FC<FilterEditorConditionPropsType> = ({
    condition,
    conditionType,
    conditionValue,
    onConditionValueChange,
}) => {
    const { label, multiple } = condition;
    const {
        options,
        dropdownAttributes,
    } = (conditionType as FilterEnumConditionType).getAttributes();
    const { value } = conditionValue || {};

    const {
        enableSearchOption,
        enableVirtualization,
        enableOptionContentEllipsis,
        formatOption,
        groups,
        renderItemAdditionalInfo,
    } = dropdownAttributes || {};

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
            enableSearchOption={enableSearchOption}
            enableVirtualization={enableVirtualization}
            enableOptionContentEllipsis={enableOptionContentEllipsis}
            formatOption={formatOption}
            groups={groups}
            renderItemAdditionalInfo={renderItemAdditionalInfo}
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
