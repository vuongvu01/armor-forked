import { HTMLAttributes } from 'react';

import { ComponentElementStylePropsType } from '../../type';

export type SideSheetHeaderPropsType = Partial<{
    description: string;
    title: string;
}> &
    HTMLAttributes<HTMLDivElement>;

export type SideSheetHeaderRootPropsType = ComponentElementStylePropsType;

export type SideSheetHeaderDescriptionPropsType = ComponentElementStylePropsType;
