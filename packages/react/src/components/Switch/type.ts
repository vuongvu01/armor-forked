import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

type SwitchEffectivePropsType = Indexed<{
    error?: boolean;
}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type SwitchCheckboxInputPropsType = SwitchEffectivePropsType;

export type SwitchLabelPropsType = SwitchEffectivePropsType;

export type SwitchPropsType = SwitchEffectivePropsType;
