import { ForwardedRef, ComponentPropsWithoutRef } from 'react';
import { useRootRef } from '@deliveryhero/armor-system';

import { FilterEditorActionsPropsType } from '../type';
import { useFilterEditorSettingsContext } from '../../FilterEditor/utils/FilterEditorSettingsContext';

export const useFilterEditorActions = <E extends HTMLElement>(
    {
        showCloseButton,
        onCloseButtonClick,
        ...restProps
    }: FilterEditorActionsPropsType,
    ref: ForwardedRef<E>,
) => {
    const innerRef = useRootRef<E>(ref);
    const { filterEditorId } = useFilterEditorSettingsContext();

    const applyFilterButtonProps: ComponentPropsWithoutRef<'button'> = {
        type: 'submit',
        form: filterEditorId,
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
