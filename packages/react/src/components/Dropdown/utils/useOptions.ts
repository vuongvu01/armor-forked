import { useMemo } from 'react';
import {
    DropdownInternalOptionType,
    OptionObjectType,
    OptionType,
} from '../type';

export const useOptions = (options?: OptionType) =>
    useMemo<{
        isFlat: boolean;
        internalOptions: DropdownInternalOptionType;
    }>(() => {
        let isFlat = false;

        if (!options || !Array.isArray(options)) {
            return {
                isFlat,
                internalOptions: [],
            };
        }

        const internalOptions = options.map((option, index) => {
            if (option && typeof option === 'object' && 'value' in option) {
                return option as OptionObjectType;
            }

            isFlat = true;
            return {
                label: option as string,
                value: index,
            };
        });

        return {
            isFlat,
            internalOptions,
        };
    }, [options]);
