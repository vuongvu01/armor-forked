import { InputHTMLAttributes } from 'react';

import {
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';
import { OptionObjectType } from '../DropdownOptionList/type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    disabled?: boolean;
    isActive?: boolean;
};

export type OptionItemType = string | OptionObjectType;
export type OptionType = OptionItemType[];

export type DropdownValueType =
    | string
    | ReadonlyArray<number | string>
    | number;

export type DropdownInternalValueType = ReadonlyArray<number | string>;

export type DropdownInternalOptionType = OptionObjectType[];

export type DropdownSelectedOptionType =
    | string
    | { label: string; value: string | number; [key: string]: any }; // similarly here - to expose into storybook, otherwise it says just OptionItemType

export type DropDownOnSelectType = (
    selectedOption: DropdownSelectedOptionType,
    itemIndex?: number,
) => void;

export type DropdownOnValueUpdateType = (
    value: DropdownInternalValueType,
    multiple: boolean | undefined,
    selectedOption: OptionObjectType,
    itemIndex?: ScalarType,
    options?: OptionType,
    isFlat?: boolean,
) => void;

export type DropdownOnChangeEventType = {
    target: {
        value?: DropdownValueType;
        name?: string;
    };
};

export type DropdownOnChangeType = (event: DropdownOnChangeEventType) => void;
export type OptionFormatType = (option: OptionItemType) => string;

export type DropdownOnRenderSelectedValueType = (
    value: DropdownInternalValueType,
    options: DropdownInternalOptionType,
) => string;

export type DropdownEffectivePropsType = Indexed<{
    error?: boolean;
    displaySeparator?: boolean;
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
    isActionSeparatorDisplayed?: boolean;
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
    formatOption?: OptionFormatType;
}> &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'value' | 'onChange' | 'defaultValue' | 'onSelect'
    > &
    MarginAttributesType &
    WidthAttributesType;

export type DropdownPropsType = DropdownEffectivePropsType;

export type ExpansionIndicatorContainerPropsType = Indexed<{}>;

export type DropdownRootPropsType = DropdownEffectivePropsType &
    ComponentElementStylePropsType;
