import { useMemo, useState, useEffect } from 'react';

import {
    DropdownInternalOptionType,
    OptionFormatType,
    OptionType,
} from '../../components/Dropdown/type';
import { OptionObjectType } from '../../components/OptionList/type';

export const useOptions = (
    options?: OptionType,
    formatOption?: OptionFormatType,
) => {
    const [dynamicInternalOptions, setDynamicInternalOptions] =
        useState<DropdownInternalOptionType>([]);

    const { isFlat, internalOptions } = useMemo(() => {
        let isOptionFlat = false;

        if (!options || !Array.isArray(options)) {
            return {
                isFlat: isOptionFlat,
                internalOptions: [],
            };
        }

        const formattedOptions = options.map((option, index) => {
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
            isOptionFlat = true;
            return {
                label: formatOption ? formatOption(option) : (option as string),
                value: index,
            };
        });

        return {
            isFlat: isOptionFlat,
            internalOptions: formattedOptions,
        };
    }, [formatOption, options]);

    useEffect(() => {
        setDynamicInternalOptions(internalOptions);
    }, [internalOptions]);

    return {
        isFlat,
        internalOptions,
        dynamicInternalOptions,
        setDynamicInternalOptions,
    };
};
