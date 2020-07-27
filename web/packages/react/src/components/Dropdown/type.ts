import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disabled?: boolean;
    isActive?: boolean;
};

type DropdownEffectivePropsType = Indexed<{
    disabled?: boolean;
    isFocused?: boolean;
    isOptionListShown?: boolean;
    onSelectionChange: (
        selectedOption: string | object,
        itemIndex?: number,
    ) => void;
    selectedValue?: string | number;
    selectedIndex?: number;
    label?: string;
    options?: any[];
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type DropdownPropsType = DropdownEffectivePropsType;
export type DropdownActionItemPropsType = Pick<
    DropdownEffectivePropsType,
    'className' | 'isFocused' | 'isOptionListShown' | 'theme' | 'onClick'
>;
export type DropdownOptionItemPropsType = Pick<
    DropdownEffectivePropsType,
    'className' | 'isSelected' | 'itemIndex' | 'item' | 'onOptionSelect'
>;

export type DropdownRootPropsType = DropdownEffectivePropsType &
    NodeStylePropsType<DropdownEffectivePropsType>;
