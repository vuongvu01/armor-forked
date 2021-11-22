import { HTMLAttributes } from 'react';
import { MarginPropsType, PaddingPropsType } from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../../type';

export type SideSheetBodyPropsType = Partial<{
    isFixed: boolean;
}> &
    HTMLAttributes<HTMLDivElement> &
    MarginPropsType &
    PaddingPropsType;

export type SideSheetBodyRootPropsType = SideSheetBodyPropsType &
    ComponentElementStylePropsType;
