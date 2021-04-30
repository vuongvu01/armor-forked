import React, { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';

export type CheckedIconType = 'tick' | 'dash';

type CheckboxEffectivePropsType = Partial<{
    checkedIcon: CheckedIconType;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: boolean;
    label: string;
    // add other custom properties here
}> &
    InputHTMLAttributes<HTMLLabelElement> &
    MarginAttributesType;

export type CheckboxPropsType = CheckboxEffectivePropsType;

export type CheckboxRootPropsType = CheckboxEffectivePropsType & {
    reallyChecked: boolean;
} & ComponentElementStylePropsType;

export type CheckboxInputPropsType = Pick<
    CheckboxEffectivePropsType,
    | 'autoFocus'
    | 'checked'
    | 'checkedIcon'
    | 'defaultChecked'
    | 'defaultValue'
    | 'disabled'
    | 'form'
    | 'name'
> &
    ComponentElementStylePropsType;

export type CheckboxCheckmarkPropsType = Pick<
    CheckboxEffectivePropsType,
    'checked' | 'checkedIcon' | 'disabled'
> & {
    hasLabel: boolean;
} & ComponentElementStylePropsType;
