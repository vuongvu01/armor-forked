import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    checked?: boolean;
    error?: boolean;
};

type RadioEffectivePropsType = Indexed<{
    // add other custom properties here
    selectedValue?: string;
    error?: boolean;
    typographyProps?: object;
}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type RadioPropsType = RadioEffectivePropsType;

export type RadioGroupPropsType = {
    children: React.ReactElement[];
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    selectedValue?: string;
    typographyProps?: object;
} & InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type RadioRootPropsType = RadioEffectivePropsType &
    ComponentElementStylePropsType;

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

export type RadioMarkPropsType = Pick<
    RadioEffectivePropsType,
    'disabled' | 'checked' | 'theme' | 'className' | 'name'
>;
