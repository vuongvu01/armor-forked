import { useCallback } from 'react';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownOnChangeEventType,
    DropdownOnToggleAllType,
} from '../type';
import { OptionObjectType } from '../../OptionList/type';
import { handleOnChange } from '../utils/handleOnChange';

export const denormalizeValue = (
    value: DropdownInternalValueType,
    multiple?: boolean,
) => {
    return multiple ? value : value[0];
};

export const useOnToggleAll = (
    setInternalValue: (nextValue: DropdownInternalValueType) => void,
    internalOptions: DropdownInternalOptionType,
    internalValue: DropdownInternalValueType,
    onChange?: (event: DropdownOnChangeEventType) => void,
) =>
    useCallback<DropdownOnToggleAllType>(
        (selectAll = true) => {
            if (!selectAll) {
                handleOnChange([], onChange);
                return setInternalValue([]);
            }

            if (internalValue.length === internalOptions.length) {
                handleOnChange([], onChange);
                return setInternalValue([]);
            }

            const internalOptionValues = internalOptions.map(
                (option: OptionObjectType) => option.value,
            );

            handleOnChange(internalOptionValues, onChange);
            return setInternalValue(internalOptionValues);
        },
        [setInternalValue, internalOptions, internalValue],
    );
