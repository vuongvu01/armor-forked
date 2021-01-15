import { useMemo } from 'react';
import {
    DropdownInternalOptionType,
    OptionFormatType,
    OptionType,
} from '../../components/Dropdown/type';
import { OptionObjectType } from '../../components/DropdownOptionList/type';

export const useOptions = (
    options?: OptionType,
    formatOption?: OptionFormatType,
) =>
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
                let formattedOption: OptionObjectType = option;

                if (formatOption) {
                    formattedOption = {
                        ...formattedOption,
                        label: formatOption(option),
                    };
                }

                return formattedOption;
            }
            isFlat = true;
            return {
                label: formatOption ? formatOption(option) : (option as string),
                value: index,
            };
        });

        return {
            isFlat,
            internalOptions,
        };
    }, [options]);
