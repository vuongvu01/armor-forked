import { MouseEvent, useCallback } from 'react';

import { TagPropsType } from '../type';
import { getStatusTagLabel, isStatusTag } from './index';
import {
    tagCloseIconContainer,
    tagRoot,
    TAG_CLEAR_BUTTON_PROPS_MAP,
} from '../constants';
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
    const realLabel = isStatusTag(type) ? getStatusTagLabel(type) : label;
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

    const tagTypeStatus = isStatusTag(type);

    const showIndicator = Boolean(indicator && tagTypeStatus);

    const showIcon = Boolean(icon && tagTypeStatus && !indicator);

    const showClearButton = Boolean(
        !tagTypeStatus &&
            !disabled &&
            (deleteOption === 'enabled' || deleteOption === 'onHover'),
    );

    const clearButtonProps =
        deleteOption && deleteOption in TAG_CLEAR_BUTTON_PROPS_MAP
            ? TAG_CLEAR_BUTTON_PROPS_MAP[deleteOption]
            : {};

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
        tagClearButtonProps: {
            deleteOption,
            small,
            onClick: onCloseButtonClick,
            disabled,
            type,
            tabIndex: 0,
            'data-testid': tagCloseIconContainer,
        },
        tagTextProps: {
            deleteOption,
            isDisabled: disabled,
            smallVerticalPadding: small, // not to conflict with the Typography small prop
        },
        indicatorContainerProps: {
            small,
        },
        iconContainerProps: {
            small,
        },
        deleteOption,
        type,
        content,
        onCloseButtonClick,
        small,
        filled,
        icon,
        indicator,
        showIndicator,
        showIcon,
        showClearButton,
        clearButtonProps,
    };
};
