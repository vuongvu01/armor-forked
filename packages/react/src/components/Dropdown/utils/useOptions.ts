import { useMemo } from 'react';
import {
    DropdownInternalOptionType,
    OptionObjectType,
    OptionType,
} from '../type';

export const useOptions = (options?: OptionType) =>
    useMemo<DropdownInternalOptionType>(() => {
        if (!options || !Array.isArray(options)) {
            return [];
        }

        return options.map((option, index) => {
            if (option && typeof option === 'object' && 'value' in option) {
                return option as OptionObjectType;
            }

            return {
                label: option as string,
                value: index,
            };
        });
    }, [options]);
