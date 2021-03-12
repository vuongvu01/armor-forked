import { useCallback } from 'react';
import {
    DropdownInternalValueType,
    DropdownOnChangeEventType,
    DropdownOnRemoveMultipleType,
} from '../type';
import { handleOnChange } from '../utils/handleOnChange';

export const useOnRemoveMultiple = (
    setInternalValue: (nextValue: DropdownInternalValueType) => void,
    internalValue: DropdownInternalValueType,
    onChange?: (event: DropdownOnChangeEventType) => void,
) =>
    useCallback<DropdownOnRemoveMultipleType>(
        (tagValuesToRemove: DropdownInternalValueType) => {
            const nextValue = internalValue.filter(
                value => !tagValuesToRemove.includes(value),
            );

            handleOnChange(nextValue, onChange);

            setInternalValue(nextValue);
        },
        [setInternalValue, internalValue],
    );
