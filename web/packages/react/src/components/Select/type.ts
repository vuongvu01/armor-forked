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

export type OptionObjectType = { label: string; [key: string]: any };
export type OptionType = string[] | OptionObjectType[];

type SelectEffectivePropsType = Indexed<{
    disabled?: boolean;
    error?: boolean;
    isFocused?: boolean;
    isListExpanded?: boolean;
    isOptionListShown?: boolean;
    onSelectionChange?: (
        selectedOption: string | object,
        itemIndex?: number,
    ) => void;
    selectedValue?: string | number;
    selectedIndex?: number;
    label?: string;
    options?: OptionType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type SelectPropsType = SelectEffectivePropsType;
export type SelectActionItemPropsType = Pick<
    SelectEffectivePropsType,
    | 'className'
    | 'disabled'
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
