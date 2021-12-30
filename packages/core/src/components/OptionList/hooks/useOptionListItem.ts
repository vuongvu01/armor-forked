import { MouseEvent, useCallback } from 'react';

import { OptionListItemPropsType } from '../type';

export const useOptionListItem = ({
    isSelected,
    onOptionSelect,
    item,
    multiple,
    checkedIcon,
    enableContentEllipsis,
    renderItemAdditionalInfo,
    cursorPosition,
    optionIndex,
    ...restProps
}: OptionListItemPropsType) => {
    const handleItemClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            event.stopPropagation();

            if (onOptionSelect && !item?.disabled) {
                onOptionSelect(item);
            }
        },
        [onOptionSelect, item],
    );

    return {
        rootProps: {
            ...restProps,
            isSelected,
            item,
            onClick: handleItemClick,
            isFocused: cursorPosition === optionIndex,
        },
        checkboxProps: {
            checked: isSelected,
            marginRight: 4,
            checkedIcon,
            disabled: item?.disabled,
        },
        typographyProps: {
            paragraph: true,
            tag: 'div',
            maxLines: 2,
            disabled: item?.disabled,
            enableContentEllipsis,
        },
        multiple,
        label: item.label,
        showAdditionalInfo: !!renderItemAdditionalInfo,
        getAdditionalInfo: () =>
            renderItemAdditionalInfo ? renderItemAdditionalInfo(item) : null,
    };
};
