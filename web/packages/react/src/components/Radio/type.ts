import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disabled?: boolean;
    checked?: boolean;
};

type RadioEffectivePropsType = Indexed<{
    // add other custom properties here
    selectedValue?: string;
}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type RadioPropsType = RadioEffectivePropsType;

export type RadioGroupPropsType = {
    children: React.ReactElement[];
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    selectedValue?: string;
} & InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type RadioRootPropsType = RadioEffectivePropsType &
    NodeStylePropsType<RadioEffectivePropsType>;

export type RadioInputPropsType = Pick<
    RadioEffectivePropsType,
    | 'autoFocus'
    | 'checked'
    | 'defaultValue'
    | 'disabled'
    | 'form'
    | 'name'
    | 'ref'
    | 'theme'
>;

export type RadioLabelPropsType = Pick<
    RadioEffectivePropsType,
    'disabled' | 'checked' | 'theme' | 'className' | 'name'
>;
