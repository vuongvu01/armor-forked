import { useEffect } from 'react';

import { DropdownInternalOptionType, DropdownInternalValueType } from '../type';

const optionsArraysDiff = (
    arrayOne: DropdownInternalOptionType,
    arrayTwo: DropdownInternalOptionType,
) =>
    arrayOne.filter(
        ({ value: value1, label: label1 }) =>
            !arrayTwo.some(
                ({ value: value2, label: label2 }) =>
                    value1 === value2 && label1 === label2,
            ),
    );

export const useOnOptionListUpdate = (
    internalOptions: DropdownInternalOptionType,
    dynamicInternalOptions: DropdownInternalOptionType,
    setInternalValue: (value: DropdownInternalValueType) => void,
    searchQuery?: string,
    isOptionListShown?: boolean,
    preserveSelection?: boolean,
) =>
    useEffect(() => {
        if (
            !preserveSelection &&
            (!searchQuery || !isOptionListShown) &&
            (internalOptions.length !== dynamicInternalOptions.length ||
                optionsArraysDiff(internalOptions, dynamicInternalOptions)
                    .length)
        ) {
            setInternalValue([]);
        }
    }, [
        internalOptions,
        dynamicInternalOptions,
        setInternalValue,
        preserveSelection,
        searchQuery,
        isOptionListShown,
    ]);
