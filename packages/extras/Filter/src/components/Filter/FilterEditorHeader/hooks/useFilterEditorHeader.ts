import { useRootRef } from '@deliveryhero/armor-system';
import { ForwardedRef } from 'react';

import { FilterEditorHeaderPropsType } from '../type';

export const useFilterEditorHeader = <E extends HTMLElement>(
    {
        showClearFilterButton,
        onClearFilterButtonClick,
        ...props
    }: FilterEditorHeaderPropsType,
    ref: ForwardedRef<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    return {
        rootProps: {
            ...props,
            ref: innerRef,
        },
        showClearFilterButton,
        getClearFilterButtonProps: () => ({
            onClick: onClearFilterButtonClick,
        }),
    };
};
