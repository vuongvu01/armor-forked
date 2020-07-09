import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disabled?: boolean;
    checked?: boolean;
};

type RadioEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type RadioPropsType = RadioEffectivePropsType;

export type RadioRootPropsType = RadioEffectivePropsType &
    NodeStylePropsType<RadioEffectivePropsType>;

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

export type RadioLabelPropsType = Pick<
    RadioEffectivePropsType,
    'disabled' | 'checked' | 'theme' | 'className' | 'name'
>;
