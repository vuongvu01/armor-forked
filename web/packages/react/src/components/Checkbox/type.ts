import React, { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { Indexed } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type CheckedIconType = 'tick' | 'dash';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disabled?: boolean;
    checked?: boolean;
};

type CheckboxEffectivePropsType = Indexed<{
    checkedIcon?: CheckedIconType;
    onChange?: (event: React.MouseEvent<HTMLInputElement>) => void;
    // add other custom properties here
}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type CheckboxPropsType = CheckboxEffectivePropsType;

export type CheckboxRootPropsType = CheckboxEffectivePropsType &
    NodeStylePropsType<CheckboxEffectivePropsType>;

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
    NodeStylePropsType<CheckboxEffectivePropsType>;
