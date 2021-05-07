import { HTMLAttributes } from 'react';
import { TypographyPropsType } from '../Typography/type';
import { ComponentElementStylePropsType } from '../type';

export type SelectorLabelPropsType = Partial<{
    error: boolean;
    checked: boolean;
    disabled: boolean;
    typographyProps: TypographyPropsType;
}> &
    HTMLAttributes<HTMLDivElement>;

export type SelectorLabelRootPropsType = SelectorLabelPropsType &
    ComponentElementStylePropsType;
