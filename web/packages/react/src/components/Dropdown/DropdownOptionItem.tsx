import React, { FunctionComponent, MouseEvent, useCallback } from 'react';

import { DropdownOptionItem as DropdownOptionItemStyle } from './style';
import { Typography } from '../Typography';
import { DropdownOptionItemPropsType } from './type';
import { Checkbox } from '../Checkbox';

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
            isSelected={isSelected}
            onClick={handleItemClick}
            {...restProps}
        >
            {multiple && <Checkbox checked={isSelected} marginRight={4} />}
            {item ? (
                <Typography margin={0} paragraph>
                    {item.label}
                </Typography>
            ) : null}
        </DropdownOptionItemStyle>
    );
};

export default DropdownOptionItem;
