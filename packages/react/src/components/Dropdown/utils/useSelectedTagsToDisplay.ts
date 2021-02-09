import { useMemo } from 'react';
import { DropdownInternalOptionType, DropdownInternalValueType } from '../type';

export const useSelectedTagsToDisplay = (
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
) =>
    useMemo(() => {
        if (!internalValue.length) {
            return [];
        }

        const internalOptionValues = internalOptions.map(
            option => option.value,
        );

        let matchingValueIndices: number[] = [];

        internalValue.forEach(value => {
            const matchedIndex = internalOptionValues.indexOf(value);

            if (matchedIndex > -1) {
                matchingValueIndices = [...matchingValueIndices, matchedIndex];
            }
        });

        return matchingValueIndices.map(index => internalOptions[index]);
    }, [internalValue, internalOptions]);
