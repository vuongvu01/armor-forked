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

type SelectEffectivePropsType = Indexed<{
    disabled?: boolean;
    error?: boolean;
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

export type SelectPropsType = SelectEffectivePropsType;
export type SelectActionItemPropsType = Pick<
    SelectEffectivePropsType,
    | 'className'
    | 'error'
    | 'isFocused'
    | 'isOptionListShown'
    | 'theme'
    | 'onClick'
>;
export type SelectOptionItemPropsType = Pick<
    SelectEffectivePropsType,
    | 'className'
    | 'isSelected'
    | 'itemIndex'
    | 'item'
    | 'onOptionSelect'
    | 'theme'
>;

export type SelectRootPropsType = SelectEffectivePropsType &
    NodeStylePropsType<SelectEffectivePropsType>;
