import React, { FunctionComponent, MouseEvent, useCallback } from 'react';

import { DropdownOptionItem as DropdownOptionItemStyle } from './style';
import { DropdownOptionItemPropsType } from './type';
import { Checkbox } from '../Checkbox';
import { Typography } from '../Typography';

const DropdownOptionItem: FunctionComponent<DropdownOptionItemPropsType> = ({
    isSelected,
    itemIndex,
    item,
    onOptionSelect,
    multiple,
    ...restProps
}) => {
    if (!onOptionSelect) {
        console.error(
            'Some of the following parameters are missing or incorrect:',
            JSON.stringify({ itemIndex, onOptionSelect }),
        );
    }
    const handleItemClick = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();

            if (onOptionSelect) {
                onOptionSelect(itemIndex);
            }
        },
        [onOptionSelect],
    );

    return (
        <DropdownOptionItemStyle
            {...restProps}
            isSelected={isSelected}
            onClick={handleItemClick}
        >
            {multiple && <Checkbox checked={isSelected} marginRight={4} />}
            {item ? (
                <Typography paragraph tag="div" maxLines={2}>
                    {item.label}
                </Typography>
            ) : null}
        </DropdownOptionItemStyle>
    );
};

export default DropdownOptionItem;
