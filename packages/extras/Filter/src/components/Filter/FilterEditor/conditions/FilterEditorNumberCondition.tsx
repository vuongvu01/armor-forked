import React, { ChangeEvent, FC, useCallback } from 'react';

import { TextInput } from '@deliveryhero/armor';
import { FilterEditorConditionPropsType } from '../type';

export const FilterEditorNumberCondition: FC<
    React.PropsWithChildren<FilterEditorConditionPropsType>
> = ({ condition, conditionValue, onConditionValueChange }) => {
    const { label } = condition;
    const { value } = conditionValue || {};

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onConditionValueChange({
                value: parseInt(event.target.value, 10),
            });
            event.stopPropagation(); // need this to make native inc/dec buttons work correctly
        },
        [onConditionValueChange],
    );

    return (
        <TextInput
            type="number"
            wide
            label={label}
            value={(value as number) || ''}
            onChange={onChange}
            autoComplete="nope"
        />
    );
};
