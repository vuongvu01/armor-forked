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

type SelectEffectivePropsType = Indexed<{
    disabled?: boolean;
    error?: boolean;
    isFocused?: boolean;
    isListExpanded?: boolean;
    isSelected?: boolean;
    item?: string | { label: string; [key: string]: any }; // aka OptionItemType - defining explicitly to expose into docs
    itemIndex?: number;
    isOptionListShown?: boolean;
    onOptionSelect?: (itemIndex: number) => void;
    onSelectionChange?: (
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

export type SelectOptionListPropsType = Indexed<{
    onClick?: (event: MouseEvent) => void;
}> &
    Pick<
        SelectEffectivePropsType,
        | 'className'
        | 'isOptionListShown'
        | 'isSelected'
        | 'itemIndex'
        | 'item'
        | 'onOptionSelect'
        | 'theme'
    >;

export type SelectOptionItemPropsType = Indexed<{
    isSelected?: boolean;
    item: OptionItemType;
    itemIndex: number;
    onOptionSelect?: (itemIndex: number) => void;
}> &
    Pick<
        SelectEffectivePropsType,
        'className' | 'isOptionListShown' | 'onClick' | 'theme'
    > &
    HTMLAttributes<HTMLElement>;

export type SelectRootPropsType = SelectEffectivePropsType &
    NodeStylePropsType<SelectEffectivePropsType>;
