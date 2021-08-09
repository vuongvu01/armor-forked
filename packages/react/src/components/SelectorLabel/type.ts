import { HTMLAttributes } from 'react';
import { TypographyPropsType } from '../Typography/type';
import { ComponentElementStylePropsType } from '../type';

/** 👉 PROPS TYPE */
export type SelectorLabelEffectivePropsType = Partial<{
    error: boolean;
    checked: boolean;
    disabled: boolean;
    typographyProps: TypographyPropsType;
}> &
    HTMLAttributes<HTMLDivElement>;

export type SelectorLabelRootPropsType = SelectorLabelEffectivePropsType &
    ComponentElementStylePropsType;
