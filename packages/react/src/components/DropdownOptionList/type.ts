import { HTMLAttributes, MouseEvent } from 'react';
import { Indexed, ObjectLiteralType, ScalarType } from '../../type';
import {
    DropdownEffectivePropsType,
    DropdownInternalValueType,
} from '../Dropdown/type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    disabled?: boolean;
    isActive?: boolean;
};

export type OptionObjectType = {
    label: string;
    value: ScalarType;
} & ObjectLiteralType;

export type DropdownOptionListPropsType = Indexed<{
    onClick?: (event: MouseEvent) => void;
    disabled?: boolean;
    internalValue: DropdownInternalValueType;
    blurInput?: () => void;
}> &
    Pick<
        DropdownEffectivePropsType,
        | 'className'
        | 'options'
        | 'isOptionListShown'
        | 'multiple'
        | 'formatOption'
    >;

export type DropdownOptionItemPropsType = Indexed<{
    isSelected?: boolean;
    item: OptionObjectType;
    itemIndex: ScalarType;
    onOptionSelect?: (item: OptionObjectType) => void;
}> &
    Pick<
        DropdownEffectivePropsType,
        'className' | 'isOptionListShown' | 'multiple'
    > &
    HTMLAttributes<HTMLElement>;
