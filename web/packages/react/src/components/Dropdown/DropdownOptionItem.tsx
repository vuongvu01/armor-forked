import React, { FunctionComponent } from 'react';

import { DropdownOptionItem as DropdownOptionItemStyle } from './style';
import { Typography } from '../Typography';
import { getItemLabel } from './utils';
import { DropdownOptionItemPropsType } from './type';

const DropdownOptionItem: FunctionComponent<DropdownOptionItemPropsType> = ({
    isSelected,
    itemIndex,
    item,
    onOptionSelect,
    ...otherProps
}) => {
    if (typeof itemIndex !== 'number' || !onOptionSelect) {
        console.error(
            'Some of the following parameters are missing or incorrect:',
            JSON.stringify({ itemIndex, onOptionSelect }),
        );
    }
    const handleItemClick = (event: MouseEvent) => {
        event.preventDefault();

        if (onOptionSelect) {
            onOptionSelect(itemIndex);
        }
    };

    return (
        <DropdownOptionItemStyle
            isSelected={isSelected}
            onClick={handleItemClick}
            {...otherProps}
        >
            <Typography margin={0} small paragraph>
                {getItemLabel(item)}
            </Typography>
        </DropdownOptionItemStyle>
    );
};

export default DropdownOptionItem;
