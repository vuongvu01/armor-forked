import { HTMLAttributes } from 'react';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
type TableBodyEffectivePropsType = HTMLAttributes<HTMLTableSectionElement>; // includes all HTML TBody properties

/* TableBody component prop type */
export type TableBodyPropsType = TableBodyEffectivePropsType &
    ComponentStylePropsType;

/* TableBody Root node prop type */
export type TableBodyRootPropsType = TableBodyEffectivePropsType &
    ComponentElementStylePropsType;
