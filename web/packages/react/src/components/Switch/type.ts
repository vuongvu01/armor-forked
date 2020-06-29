import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from 'src/system/attributes';
import { Indexed } from 'src/type';
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

type CommonProps = Pick<
    SwitchEffectivePropsType,
    'checked' | 'defaultChecked' | 'className' | 'disabled' | 'theme'
>;

export type SwitchRootPropsType = CommonProps;

export type SwitchLabelPropsType = CommonProps;

export type SwitchSliderPropsType = CommonProps;

export type SwitchPropsType = SwitchEffectivePropsType;
