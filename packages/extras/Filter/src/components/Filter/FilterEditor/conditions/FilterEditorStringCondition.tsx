import React, { ChangeEvent, FC, useCallback } from 'react';
import { ScalarType } from '@deliveryhero/armor-system';

import { TextInput } from '@deliveryhero/armor';
import { FilterEditorConditionPropsType } from '../type';

export const FilterEditorStringCondition: FC<
    React.PropsWithChildren<FilterEditorConditionPropsType>
> = ({ condition, conditionValue, onConditionValueChange }) => {
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
