import { useMemo } from 'react';
import { stripHTMLTagsMemoized as stripHTMLTags } from '@deliveryhero/armor-system';

import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownPropsType,
} from '../../components/Dropdown/type';
import { EMPTY_LABEL_VALUE } from '../../components/Dropdown/constants';

export const useSelectedValueToDisplay = (
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
    onRenderSelectedValue?: DropdownPropsType['onRenderSelectedValue'],
) =>
    useMemo(() => {
        if (onRenderSelectedValue) {
            return onRenderSelectedValue(internalValue, internalOptions);
        }

        if (!internalValue.length) {
            return EMPTY_LABEL_VALUE;
        }

        return internalOptions
            .filter((option) => internalValue.includes(option.value))
            .map((option) => stripHTMLTags(option.label))
            .join(', ');
    }, [onRenderSelectedValue, internalValue, internalOptions]);
