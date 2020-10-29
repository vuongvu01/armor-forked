import { useCallback } from 'react';
import {
    DropdownInternalValueType,
    DropdownOnChangeType,
    DropDownOnSelectType,
    DropdownOnValueUpdateType,
} from '../type';

const denormalizeValue = (
    value: DropdownInternalValueType,
    multiple?: boolean,
) => {
    return multiple ? value : value[0];
};

export const useOnValueUpdate = (
    setInternalValue: (nextValue: DropdownInternalValueType) => void,
    onSelect?: DropDownOnSelectType,
    onChange?: DropdownOnChangeType,
) =>
    useCallback<DropdownOnValueUpdateType>(
        (
            internalValue,
            multiple,
            selectedOption,
            itemIndex,
            options,
            isFlat,
        ) => {
            const chosenItem = selectedOption.value;

            if (typeof chosenItem === 'undefined') {
                return;
            }

            let nextValue: DropdownInternalValueType;
            if (multiple) {
                if (internalValue.includes(chosenItem)) {
                    nextValue = internalValue.filter(
                        item => item !== chosenItem,
                    );
                } else {
                    nextValue = [chosenItem, ...internalValue];
                }
            } else {
                nextValue = [chosenItem];
            }

            if (onChange) {
                onChange({
                    target: {
                        value: denormalizeValue(nextValue, multiple),
                    },
                });
            }
            if (onSelect && !multiple && options) {
                const option = isFlat ? selectedOption.label : selectedOption;
                onSelect(option, options.indexOf(option));
            }

            setInternalValue(nextValue);
        },
        [onSelect, onChange],
    );
