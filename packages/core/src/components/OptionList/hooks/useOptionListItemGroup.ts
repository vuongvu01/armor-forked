import React, { MouseEvent } from 'react';
import { OptionListItemGroupPropType } from '../type';
import { CheckedIconType } from '../../Checkbox/type';

export const useOptionListItemGroup = ({
    enableSeparator,
    multiple,
    enableGroupSelection,
    enableContentEllipsis,
    onClick,
    internalGroup,
    ...restProps
}: OptionListItemGroupPropType) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (onClick) {
            onClick(event);
        }
    };

    const selectedItemsCount = internalGroup?.selectedItemsCount;
    const totalItemsCount = internalGroup?.totalItemsCount;

    return {
        rootProps: {
            ...restProps,
            enableSeparator,
            multiple,
            onClick: handleClick,
            enableGroupSelection,
            checked: (selectedItemsCount ?? 0) > 0,
        },
        checkboxProps: {
            marginRight: 4,
            checked: (selectedItemsCount ?? 0) > 0,
            checkedIcon: (totalItemsCount === selectedItemsCount
                ? 'tick'
                : 'dash') as CheckedIconType,
            onClick: (event: MouseEvent) => {
                event.stopPropagation();
                event.preventDefault();
                // @ts-ignore
                onClick?.(event);
            },
        },
        typographyProps: {
            paragraph: true,
            tag: 'div',
            maxLines: 2,
            enableContentEllipsis,
        },
        multiple,
        enableGroupSelection,
    };
};
