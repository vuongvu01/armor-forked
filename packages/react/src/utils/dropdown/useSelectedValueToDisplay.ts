import { useMemo } from 'react';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownOnRenderSelectedValueType,
} from '../../components/Dropdown/type';
import { emptyLabelValue } from '../../components/Dropdown/constants';

export const useSelectedValueToDisplay = (
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
    onRenderSelectedValue?: DropdownOnRenderSelectedValueType,
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
