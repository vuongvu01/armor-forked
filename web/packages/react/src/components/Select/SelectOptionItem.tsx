import React, { FunctionComponent } from 'react';

import { SelectOptionItem as SelectOptionItemStyle } from './style';
import { Typography } from '../Typography';
import { getItemLabel } from './utils';
import { SelectOptionItemPropsType } from './type';

const SelectOptionItem: FunctionComponent<SelectOptionItemPropsType> = ({
    isSelected,
    itemIndex,
    item,
    onOptionSelect,
    ...restProps
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
        <SelectOptionItemStyle
            isSelected={isSelected}
            onClick={handleItemClick}
            {...restProps}
        >
            <Typography margin={0} small paragraph>
                {getItemLabel(item)}
            </Typography>
        </SelectOptionItemStyle>
    );
};

export default SelectOptionItem;
