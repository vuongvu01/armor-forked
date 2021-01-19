import React, { FunctionComponent } from 'react';
import { DropdownOptionListPropsType, OptionObjectType } from './type';
import { DropdownOptionListRoot } from './style';

import { useTheme } from '../../styling';
import {
    DROPDOWN_OPTION_LIST_CLASS_PREFIX,
    dropdownOptionItem,
} from './constants';
import { DropdownOptionItem } from './DropdownOptionItem';
import { useDropdownOptionList, useDropdownOptionListClassName } from './utils';

export const DropdownOptionList: FunctionComponent<DropdownOptionListPropsType> = ({
    className,
    ...props
}) => {
    const theme = useTheme();

    const {
        rootProps,
        internalOptions,
        disabled,
        internalValue,
        onOptionSelect,
        multiple,
    } = useDropdownOptionList(props);

    const classOverride = useDropdownOptionListClassName(
        DROPDOWN_OPTION_LIST_CLASS_PREFIX,
        className,
        disabled,
    );

    const renderOptionItem = (item: OptionObjectType) => (
        <DropdownOptionItem
            className={`${classOverride.Item} ${
                internalValue.includes(item.value) ? 'active' : ''
            }`}
            isSelected={internalValue.includes(item.value)}
            item={item}
            itemIndex={item.value}
            key={item.value}
            onOptionSelect={onOptionSelect}
            theme={theme}
            multiple={multiple}
            data-testid={dropdownOptionItem}
        />
    );

    return internalOptions.length ? (
        <DropdownOptionListRoot
            {...rootProps}
            className={classOverride.Root}
            theme={theme}
        >
            {internalOptions.map(renderOptionItem)}
        </DropdownOptionListRoot>
    ) : null;
};
