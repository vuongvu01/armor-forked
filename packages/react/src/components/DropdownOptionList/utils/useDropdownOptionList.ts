import { useCallback } from 'react';

import { DropdownOptionListPropsType, OptionObjectType } from '../type';

export const useDropdownOptionList = ({
    disabled,
    options,
    multiple,
    formatOption,
    internalValue,
    blurInput,
    setIsOptionListShown,
    onValueUpdate,
    internalOptions,
    isFlat,
    ...restProps
}: DropdownOptionListPropsType) => {
    const onOptionSelect = useCallback(
        (item: OptionObjectType) => {
            if (internalOptions) {
                onValueUpdate(
                    internalValue,
                    multiple,
                    item,
                    item.value,
                    options,
                    isFlat,
                );
            }

            if (!multiple) {
                setIsOptionListShown(false);
            }

            if (blurInput) {
                blurInput();
            }
        },
        [
            internalOptions,
            onValueUpdate,
            internalValue,
            multiple,
            options,
            isFlat,
            blurInput,
        ],
    );

    return {
        rootProps: restProps,
        internalOptions,
        disabled,
        internalValue,
        onOptionSelect,
        multiple,
        formatOption,
    };
};
