import { MouseEvent, useCallback } from 'react';

import { TagPropsType } from '../type';
import { getStatusTagLabel, isStatusTag } from './index';
import { tagCloseIconContainer, tagRoot } from '../constants';
import { RefType } from '../../../type';

export const useTag = <E extends HTMLDivElement>(
    {
        type,
        label,
        children,
        onClose,
        onDeselect,
        code,
        disabled,
        deleteOption,
        small,
        filled,
        icon,
        indicator,
        ...restRootProps
    }: TagPropsType,
    ref: RefType<E>,
) => {
    let realLabel = label;

    if (isStatusTag(type)) {
        realLabel = getStatusTagLabel(type);
    }
    const content = children !== undefined ? children : realLabel;

    const onCloseButtonClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (disabled) {
                return;
            }
            event.stopPropagation();

            onClose?.(event);

            // need to maintain backward compatibility with onClose
            onDeselect?.(code);
        },
        [code, disabled, onClose, onDeselect],
    );

    return {
        rootProps: {
            ...restRootProps,
            deleteOption,
            'data-testid': tagRoot,
            ref,
            small,
            type,
            disabled,
            filled,
            icon,
            indicator,
        },
        tagCloseIconContainerProps: {
            deleteOption,
            small,
            onClick: onCloseButtonClick,
            disabled,
            type,
            tabIndex: 0,
            'data-testid': tagCloseIconContainer,
        },
        tagTypographyProps: {
            deleteOption,
            smallVerticalPadding: small, // not to conflict with the Typography small prop
        },
        indicatorContainerProps: {
            small,
        },
        iconContainerProps: {
            small,
        },
        disabled,
        deleteOption,
        type,
        content,
        onCloseButtonClick,
        small,
        filled,
        icon,
        indicator,
    };
};
