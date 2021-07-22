import { useCallback } from 'react';
import {
    DropdownInternalValueType,
    DropdownOnChangeType,
    DropDownOnSelectType,
    DropdownOnValueUpdateType,
    DropdownSelectedOptionType,
} from '../../components/Dropdown/type';

export const denormalizeValue = (
    value: DropdownInternalValueType,
    multiple?: boolean,
) => {
    return multiple ? value : value[0];
};

export const useOnValueUpdate = (
    setInternalValue: (nextValue: DropdownInternalValueType) => void,
    onSelect?: DropDownOnSelectType,
    onChange?: DropdownOnChangeType,
    name?: string,
    initialSelection?: DropdownInternalValueType,
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
                    nextValue = [...internalValue, chosenItem];
                }
            } else {
                nextValue = [chosenItem];
            }

            if (onChange) {
                onChange({
                    target: {
                        value: denormalizeValue(nextValue, multiple),
                        name,
                    },
                });
            }

            if (onSelect && options) {
                let option = isFlat ? selectedOption.label : selectedOption;

                if (typeof option === 'number') {
                    option = option.toString();
                }

                onSelect(
                    option as DropdownSelectedOptionType,
                    options.indexOf(option as DropdownSelectedOptionType),
                );
            }

            setInternalValue(nextValue);
        },
        [onSelect, onChange, setInternalValue, name, initialSelection],
    );
