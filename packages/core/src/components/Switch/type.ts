import { InputHTMLAttributes, ReactNode } from 'react';
import {
    MarginPropsType,
    PointerEventsPropsType,
} from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../type';

/** 👉 PROPS TYPE */
type SwitchEffectivePropsType = Partial<{
    error: boolean;
    label: ReactNode;
}> &
    InputHTMLAttributes<HTMLInputElement> &
    Omit<InputHTMLAttributes<HTMLLabelElement>, 'onChange'> &
    MarginPropsType;

export type SwitchPropsType = SwitchEffectivePropsType;

export type SwitchRootPropsType = {
    disabled?: boolean;
    reallyChecked?: boolean;
} & InputHTMLAttributes<HTMLLabelElement> &
    ComponentElementStylePropsType &
    MarginPropsType;

export type SwitchTogglePropsType = PointerEventsPropsType &
    ComponentElementStylePropsType;

export type SwitchCheckboxInputPropsType = SwitchEffectivePropsType &
    ComponentElementStylePropsType;
