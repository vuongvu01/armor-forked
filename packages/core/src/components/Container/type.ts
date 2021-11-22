import { HTMLAttributes } from 'react';
import {
    PaddingPropsType,
    MarginPropsType,
    SizePropsType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type ContainerEffectivePropsType = HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    PaddingPropsType &
    MarginPropsType &
    SizePropsType;

/* Container component prop type */
export type ContainerPropsType = ContainerEffectivePropsType &
    ComponentStylePropsType;

/* Container Root node prop type */
export type ContainerRootPropsType = ContainerEffectivePropsType &
    ComponentElementStylePropsType;
