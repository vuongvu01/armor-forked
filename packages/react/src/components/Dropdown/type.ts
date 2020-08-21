import { HTMLAttributes, InputHTMLAttributes, MouseEvent } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disabled?: boolean;
    isActive?: boolean;
};

export type OptionObjectType = {
    label: string;
    value: ScalarType;
    [key: string]: any;
};
export type OptionItemType = string | OptionObjectType;
export type OptionType = OptionItemType[];

export type DropdownValueType =
    | string
    | ReadonlyArray<number | string>
    | number;

export type DropdownInternalValueType = ReadonlyArray<number | string>;

export type DropdownInternalOptionType = OptionObjectType[];

export type DropDownOnSelectType = (
    selectedOption:
        | string
        | { label: string; value: string | number; [key: string]: any }, // similarly here - to expose into storybook, otherwise it says just OptionItemType
    itemIndex?: number,
) => void;

export type DropdownOnValueUpdateType = (
    value: DropdownInternalValueType,
    multiple: boolean | undefined,
    selectedOption: OptionObjectType,
    itemIndex?: number,
    options?: OptionType,
) => void;

export type DropdownOnChangeEventType = {
    target: {
        value?: DropdownValueType;
    };
};

export type DropdownOnChangeType = (event: DropdownOnChangeEventType) => void;

export type DropdownOnRenderSelectedValueType = (
    value: DropdownInternalValueType,
    options: DropdownInternalOptionType,
) => string;

type DropdownEffectivePropsType = Indexed<{
    error?: boolean;
    isActionSeparatorDisplayed?: boolean;
    isListExpanded?: boolean;
    isSelected?: boolean;
    item?:
        | string
        | { label: string; value: string | number; [key: string]: any }; // aka OptionItemType - defining explicitly to expose into docs
    itemIndex?: number;
    isOptionListShown?: boolean;
    onOptionSelect?: (itemIndex: number) => void;
    onSelect?: DropDownOnSelectType;
    selectedValue?: string | number;
    selectedIndex?: number;
    label?: string;
    options?:
        | string[]
        | { label: string; value: string | number; [key: string]: any }[]; // aka OptionType - defining explicitly to expose into docs
    multiple?: boolean;
    value?: string | ReadonlyArray<string> | ReadonlyArray<number> | number; // aka DropdownValueType - defining explicitly to expose into docs
    defaultValue?:
        | string
        | ReadonlyArray<string>
        | ReadonlyArray<number>
        | number; // aka OptionType - defining explicitly to expose into docs
    onChange?: (event: DropdownOnChangeEventType) => void;
    onRenderSelectedValue?: (
        value: DropdownInternalValueType,
        options: DropdownInternalOptionType,
    ) => string;
}> &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'value' | 'onChange' | 'defaultValue'
    > &
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
    item: OptionObjectType;
    itemIndex: number;
    onOptionSelect?: (itemIndex: number) => void;
}> &
    Pick<
        DropdownEffectivePropsType,
        'className' | 'isOptionListShown' | 'onClick' | 'theme' | 'multiple'
    > &
    HTMLAttributes<HTMLElement>;

export type DropdownRootPropsType = DropdownEffectivePropsType &
    NodeStylePropsType<DropdownEffectivePropsType>;
