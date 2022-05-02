import { useMemo } from 'react';

import { DropdownInternalOptionType, DropdownInternalValueType } from '../type';
import { OptionObjectType } from '../../OptionList/type';

export const useSelectedTagsToDisplay = (
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
) =>
    useMemo(() => {
        if (!internalValue.length) {
            return [];
        }

        const internalOptionValues = internalOptions.map(
            (option) => option.value,
        );

        const matchingOptions: OptionObjectType[] = [];

        internalValue.forEach((value) => {
            const matchedIndex = internalOptionValues.indexOf(value);

            if (matchedIndex > -1) {
                matchingOptions.push(internalOptions[matchedIndex]);
            }
        });

        return matchingOptions;
    }, [internalValue, internalOptions]);
