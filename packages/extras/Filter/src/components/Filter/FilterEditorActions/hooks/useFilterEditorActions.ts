import { useRootRef } from '@deliveryhero/armor-system';
import { ForwardedRef } from 'react';

import { FilterEditorActionsPropsType } from '../type';

export const useFilterEditorActions = <E extends HTMLElement>(
    {
        showCloseButton,
        onCloseButtonClick,
        onApplyFilterButtonClick,
        ...restProps
    }: FilterEditorActionsPropsType,
    ref: ForwardedRef<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        showCloseButton: !!showCloseButton,
        getCloseButtonProps: () => ({
            onClick: onCloseButtonClick,
        }),
        applyFilterButtonProps: {
            onClick: onApplyFilterButtonClick,
        },
    };
};
