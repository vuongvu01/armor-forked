import { InputHTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { PointerEventsType } from '../../styling/pointerEvents';

type SwitchEffectivePropsType = Partial<{
    error: boolean;
    label: ReactNode;
}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type SwitchPropsType = SwitchEffectivePropsType;

export type SwitchRootPropsType = {
    disabled?: boolean;
    reallyChecked?: boolean;
} & ComponentElementStylePropsType;

export type SwitchTogglePropsType = PointerEventsType &
    ComponentElementStylePropsType;

export type SwitchCheckboxInputPropsType = SwitchEffectivePropsType &
    ComponentElementStylePropsType;
