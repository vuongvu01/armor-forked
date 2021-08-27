import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
export type TableHeadEffectivePropsType = HTMLAttributes<
    HTMLTableSectionElement
>; // includes all HTML THead attributes

/* TableHead component prop type */
export type TableHeadPropsType = TableHeadEffectivePropsType &
    ComponentStylePropsType;

/* TableHead Root node prop type */
export type TableHeadRootPropsType = TableHeadEffectivePropsType &
    ComponentElementStylePropsType;
