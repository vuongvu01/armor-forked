import { HTMLAttributes } from 'react';
import { ComponentElementStylePropsType } from '../../type';

export type SideSheetBodyPropsType = Partial<{ isFixed: boolean }> &
    HTMLAttributes<HTMLDivElement>;

export type SideSheetBodyRootPropsType = SideSheetBodyPropsType &
    ComponentElementStylePropsType;
