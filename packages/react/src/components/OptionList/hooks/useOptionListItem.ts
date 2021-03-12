import { useCallback } from 'react';

import { OptionListItemPropsType } from '../type';

export const useOptionListItem = ({
    isSelected,
    onOptionSelect,
    item,
    multiple,
    checkedIcon,
    ...restProps
}: OptionListItemPropsType) => {
    const handleItemClick = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();

            if (onOptionSelect) {
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
        },
        checkboxProps: {
            checked: isSelected,
            marginRight: 4,
            checkedIcon,
        },
        typographyProps: {
            paragraph: true,
            tag: 'div',
            maxLines: 2,
        },
        multiple,
        label: item.label,
    };
};
