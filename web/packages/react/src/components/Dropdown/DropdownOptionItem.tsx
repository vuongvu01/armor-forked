import React, { FunctionComponent, MouseEvent } from 'react';

import { DropdownOptionItem as DropdownOptionItemStyle } from './style';
import { Typography } from '../Typography';
import { getItemLabel } from './utils';
import { DropdownOptionItemPropsType } from './type';

const DropdownOptionItem: FunctionComponent<DropdownOptionItemPropsType> = ({
    isSelected,
    itemIndex,
    item,
    onOptionSelect,
    ...restProps
}) => {
    if (!onOptionSelect) {
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
            {...restProps}
        >
            {item ? (
                <Typography margin={0} paragraph>
                    {getItemLabel(item)}
                </Typography>
            ) : null}
        </DropdownOptionItemStyle>
    );
};

export default DropdownOptionItem;
