import { HTMLAttributes } from 'react';
import { ComponentElementStylePropsType } from '../../type';
import { MarginAttributesType, PaddingAttributesType } from '../../../system';

export type SideSheetBodyPropsType = Partial<{ isFixed: boolean }> &
    HTMLAttributes<HTMLDivElement> &
    MarginAttributesType &
    PaddingAttributesType;

export type SideSheetBodyRootPropsType = SideSheetBodyPropsType &
    ComponentElementStylePropsType;
