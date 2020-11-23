import React, { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { Indexed } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type CheckedIconType = 'tick' | 'dash';

type CheckboxEffectivePropsType = Indexed<{
    checkedIcon?: CheckedIconType;
    onChange?: (event: React.MouseEvent<HTMLInputElement>) => void;
    // add other custom properties here
}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type CheckboxPropsType = CheckboxEffectivePropsType;

export type CheckboxRootPropsType = CheckboxEffectivePropsType &
    ComponentElementStylePropsType;

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
    | 'ref'
    | 'theme'
>;

export type CheckboxCheckmarkPropsType = CheckboxEffectivePropsType &
    ComponentElementStylePropsType;
