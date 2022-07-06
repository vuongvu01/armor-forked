import { useMemo } from 'react';
import { stripHTMLTagsMemoized as stripHTMLTags } from '@deliveryhero/armor-system';

import { DropdownPropsType } from '@deliveryhero/armor';
import { EMPTY_LABEL_VALUE } from '../../components/HeaderNavigation/constants';
import {
    DropdownInternalValueType,
    DropdownInternalOptionType,
} from '../../components/HeaderNavigation/HeaderNavigationSelector/type';

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
