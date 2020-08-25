import { useMemo } from 'react';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownOnRenderSelectedValueType,
} from '../type';
import { emptyLabelValue } from '../constants';

export const useSelectedValueToDisplay = (
    onRenderSelectedValue: DropdownOnRenderSelectedValueType | undefined,
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
) =>
    useMemo(() => {
        if (onRenderSelectedValue) {
            return onRenderSelectedValue(internalValue, internalOptions);
        }

        if (!internalValue.length) {
            return emptyLabelValue;
        }

        return internalOptions
            .filter(option => internalValue.includes(option.value))
            .map(option => option.label)
            .join(', ');
    }, [onRenderSelectedValue, internalValue, internalOptions]);
