import { useEffect } from 'react';
import { stripHTMLTagsMemoized as stripHTMLTags } from '@deliveryhero/armor-system';

import { DropdownInternalOptionType, DropdownInternalValueType } from '../type';
import { OptionObjectType } from '../../OptionList/type';

const formatOptionLabel = (option: OptionObjectType) => ({
    ...option,
    label: stripHTMLTags(option.label),
});

const optionsArraysDiff = (
    arrayOne: DropdownInternalOptionType,
    arrayTwo: DropdownInternalOptionType,
) => {
    const formattedArrayOne = arrayOne.map(formatOptionLabel);
    const formattedArrayTwo = arrayTwo.map(formatOptionLabel);

    return formattedArrayOne.filter(
        ({ value: value1, label: label1 }) =>
            !formattedArrayTwo.some(
                ({ value: value2, label: label2 }) =>
                    value1 === value2 && label1 === label2,
            ),
    );
};

export const useOnOptionListUpdate = (
    internalOptions: DropdownInternalOptionType,
    dynamicInternalOptions: DropdownInternalOptionType,
    setInternalValue: (value: DropdownInternalValueType) => void,
    searchQuery?: string,
    isOptionListShown?: boolean,
    preserveSelection?: boolean,
) => {
    return useEffect(() => {
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
};
