import { MouseEvent, useCallback } from 'react';
import { TagPropsType } from '../type';
import { getStatusTagLabel, isStatusTag } from './index';
import { tagCloseIconContainer, tagRoot } from '../constants';
import { ReferenceType } from '../../../type';

export const useTag = (
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
        ...restRootProps
    }: TagPropsType,
    ref: ReferenceType,
) => {
    let realLabel = label;

    if (isStatusTag(type)) {
        realLabel = getStatusTagLabel(type);
    }
    const content = children || realLabel;

    const onCloseButtonClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (disabled) {
                return;
            }
            event.stopPropagation();

            if (onClose) {
                onClose(event);
            }

            // need to maintain backward compatibility with onClose
            if (onDeselect) {
                onDeselect(code);
            }
        },
        [onClose, onDeselect],
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
        disabled,
        deleteOption,
        type,
        content,
        onCloseButtonClick,
        small,
    };
};
