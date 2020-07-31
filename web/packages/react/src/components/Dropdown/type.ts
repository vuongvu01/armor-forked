import { HTMLAttributes, MouseEvent } from 'react';

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
export type OptionItemType = string | OptionObjectType;
export type OptionType = OptionItemType[];

type DropdownEffectivePropsType = Indexed<{
    disabled?: boolean;
    error?: boolean;
    isActionSeparatorDisplayed?: boolean;
    isListExpanded?: boolean;
    isSelected?: boolean;
    item?: string | { label: string; [key: string]: any }; // aka OptionItemType - defining explicitly to expose into docs
    itemIndex?: number;
    isOptionListShown?: boolean;
    onOptionSelect?: (itemIndex: number) => void;
    onSelect?: (
        selectedOption: string | { label: string; [key: string]: any }, // similarly here - to expose into storybook, otherwise it says just OptionItemType
        itemIndex?: number,
    ) => void;
    selectedValue?: string | number;
    selectedIndex?: number;
    label?: string;
    options?: (string | { label: string; [key: string]: any })[]; // aka OptionType - defining explicitly to expose into docs
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type DropdownPropsType = DropdownEffectivePropsType;
export type DropdownActionItemPropsType = Pick<
    DropdownEffectivePropsType,
    | 'className'
    | 'disabled'
    | 'error'
    | 'isActionSeparatorDisplayed'
    | 'isOptionListShown'
    | 'tabIndex'
    | 'theme'
    | 'onClick'
>;

export type DropdownOptionListPropsType = Indexed<{
    onClick?: (event: MouseEvent) => void;
}> &
    Pick<
        DropdownEffectivePropsType,
        | 'className'
        | 'isOptionListShown'
        | 'isSelected'
        | 'itemIndex'
        | 'item'
        | 'onOptionSelect'
        | 'theme'
    >;

export type DropdownOptionItemPropsType = Indexed<{
    isSelected?: boolean;
    item: OptionItemType;
    itemIndex: number;
    onOptionSelect?: (itemIndex: number) => void;
}> &
    Pick<
        DropdownEffectivePropsType,
        'className' | 'isOptionListShown' | 'onClick' | 'theme'
    > &
    HTMLAttributes<HTMLElement>;

export type DropdownRootPropsType = DropdownEffectivePropsType &
    NodeStylePropsType<DropdownEffectivePropsType>;