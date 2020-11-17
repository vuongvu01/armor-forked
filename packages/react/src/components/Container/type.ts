import { HTMLAttributes } from 'react';
import { StylePropsType, NodeStylePropsTypeNoStyles } from '../type';
import { WidthAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

type ContainerEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    WidthAttributesType;

/* Container component prop type */
export type ContainerPropsType = ContainerEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* Container Root node prop type */
export type ContainerRootPropsType = ContainerEffectivePropsType &
    NodeStylePropsTypeNoStyles;
