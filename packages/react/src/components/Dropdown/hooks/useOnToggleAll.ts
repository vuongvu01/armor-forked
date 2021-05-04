import { useCallback } from 'react';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownOnChangeEventType,
    DropdownOnToggleAllType,
} from '../type';
import { OptionObjectType } from '../../OptionList/type';
import { handleOnChange } from '../utils/handleOnChange';

export const useOnToggleAll = (
    setInternalValue:
        | ((nextValue: DropdownInternalValueType) => void)
        | undefined,
    internalOptions: DropdownInternalOptionType,
    internalValue: DropdownInternalValueType,
    onChange?: (event: DropdownOnChangeEventType) => void,
) =>
    useCallback<DropdownOnToggleAllType>(
        (selectAll = true) => {
            if (!selectAll) {
                handleOnChange([], onChange);
                if (setInternalValue) {
                    setInternalValue([]);
                }

                return;
            }

            if (internalValue.length === internalOptions.length) {
                handleOnChange([], onChange);
                if (setInternalValue) {
                    setInternalValue([]);
                }
                return;
            }

            const internalOptionValues = internalOptions.map(
                (option: OptionObjectType) => option.value,
            );

            handleOnChange(internalOptionValues, onChange);

            if (setInternalValue) {
                setInternalValue(internalOptionValues);
            }
        },
        [setInternalValue, internalOptions, internalValue],
    );
