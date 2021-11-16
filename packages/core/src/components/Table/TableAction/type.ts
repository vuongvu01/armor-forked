import { HTMLAttributes } from 'react';
import { MarginPropsType, PaddingPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
type TableActionEffectivePropsType = HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    PaddingPropsType &
    MarginPropsType;

/* TableAction component prop type */
export type TableActionPropsType = TableActionEffectivePropsType &
    ComponentStylePropsType;

/* TableAction Root node prop type */
export type TableActionRootPropsType = TableActionEffectivePropsType &
    ComponentElementStylePropsType;
