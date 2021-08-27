import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import {
    PaddingAttributesType,
    MarginAttributesType,
    SizeAttributesType,
} from '../../system';

/** 👉 PROPS TYPE */
type ContainerEffectivePropsType = HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType &
    MarginAttributesType &
    SizeAttributesType;

/* Container component prop type */
export type ContainerPropsType = ContainerEffectivePropsType &
    ComponentStylePropsType;

/* Container Root node prop type */
export type ContainerRootPropsType = ContainerEffectivePropsType &
    ComponentElementStylePropsType;
