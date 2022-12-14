import { useCallback } from 'react';
import { ScalarType } from '@deliveryhero/armor-system';

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
    setInitialSelection?: (nextValue: DropdownInternalValueType) => void,
) => {
    const onToggleAll = useCallback<DropdownOnToggleAllType>(
        (selectAll = true) => {
            const preselectedDisabledOptionItems: Array<ScalarType> = [];
            const unselectedDisabledOptionItems: Array<ScalarType> = [];

            internalOptions.forEach((option: OptionObjectType) => {
                if (option.disabled) {
                    if (!internalValue.includes(option.value)) {
                        unselectedDisabledOptionItems.push(option.value);
                    } else {
                        preselectedDisabledOptionItems.push(option.value);
                    }
                }
            });

            if (!selectAll) {
                handleOnChange([], onChange);

                if (setInitialSelection) {
                    setInitialSelection([...preselectedDisabledOptionItems]);
                }

                if (setInternalValue) {
                    setInternalValue([...preselectedDisabledOptionItems]);
                }

                return;
            }

            if (
                internalValue.length + unselectedDisabledOptionItems.length ===
                internalOptions.length
            ) {
                let updatedOptionValues = [
                    ...preselectedDisabledOptionItems,
                    ...unselectedDisabledOptionItems,
                ];

                if (internalValue.length < internalOptions.length) {
                    updatedOptionValues = [...preselectedDisabledOptionItems];
                }

                handleOnChange(updatedOptionValues, onChange);

                if (setInternalValue) {
                    setInternalValue(updatedOptionValues);
                }

                return;
            }

            const enabledOptionValuesOnSelect: Array<ScalarType> = [];

            internalOptions.forEach((option: OptionObjectType) => {
                if (
                    !option.disabled ||
                    (option.disabled && internalValue.includes(option.value))
                ) {
                    enabledOptionValuesOnSelect.push(option.value);
                }
            });

            handleOnChange(enabledOptionValuesOnSelect, onChange);

            if (setInternalValue) {
                setInternalValue(enabledOptionValuesOnSelect);
            }
        },
        [
            setInternalValue,
            internalOptions,
            internalValue,
            onChange,
            setInitialSelection,
        ],
    );

    return onToggleAll;
};
