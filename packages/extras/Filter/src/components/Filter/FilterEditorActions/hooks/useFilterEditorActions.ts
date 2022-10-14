import { ForwardedRef, ComponentPropsWithoutRef } from 'react';
import { useRootRef } from '@deliveryhero/armor-system';

import { FilterEditorActionsPropsType } from '../type';
import { FILTER_EDITOR_FORM_ID } from '../../constants';

export const useFilterEditorActions = <E extends HTMLElement>(
    {
        showCloseButton,
        onCloseButtonClick,
        ...restProps
    }: FilterEditorActionsPropsType,
    ref: ForwardedRef<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const applyFilterButtonProps: ComponentPropsWithoutRef<'button'> = {
        type: 'submit',
        form: FILTER_EDITOR_FORM_ID,
    };

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
        },
        showCloseButton: Boolean(showCloseButton),
        getCloseButtonProps: () => ({
            onClick: onCloseButtonClick,
        }),
        applyFilterButtonProps,
    };
};
