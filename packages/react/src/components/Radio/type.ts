import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { TypographyPropsType } from '../Typography/type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    checked?: boolean;
    error?: boolean;
};

type RadioEffectivePropsType = Partial<{
    // add other custom properties here
    selectedValue: string;
    error: boolean;
    typographyProps: TypographyPropsType;
    label: ReactNode;
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
    'autoFocus' | 'checked' | 'defaultValue' | 'disabled' | 'form' | 'name'
> &
    ComponentElementStylePropsType;

export type RadioMarkPropsType = Pick<
    RadioEffectivePropsType,
    'disabled' | 'checked' | 'name'
> &
    ComponentElementStylePropsType;
