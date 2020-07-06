import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disabled?: boolean;
    checked?: boolean;
};

type SwitchEffectivePropsType = Indexed<{}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type SwitchCheckboxInputPropsType = SwitchEffectivePropsType;

export type SwitchLabelPropsType = SwitchEffectivePropsType;

export type SwitchPropsType = SwitchEffectivePropsType;
