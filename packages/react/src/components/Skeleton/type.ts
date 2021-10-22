import {
    HTMLAttributes,
} from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import {
    MarginAttributesType,
} from '../../system';

/** 👉 PROPS TYPE */
type SkeletonEffectivePropsType = Partial<{
    // exampleProperty: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type SkeletonPropsType = SkeletonEffectivePropsType &
    ComponentStylePropsType;

export type SkeletonRootPropsType = SkeletonEffectivePropsType & ComponentElementStylePropsType;

// export type SkeletonSubNodePropsType = { /* ... add props here or remove this block ...*/ } & ComponentElementStylePropsType;
