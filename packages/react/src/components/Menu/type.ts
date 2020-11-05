import { HTMLAttributes } from 'react';
import {
    StylePropsType,
    PropsWithNodeStylePropsType,
    NodeStylePropsTypeNoStyles,
} from '../type';
import {
    MarginAttributesType,
    PaddingAttributesType,
} from '../../system/attributes';
import { Indexed } from '../../type';

type MenuEffectivePropsType = Indexed<{
    enableBottomSeparator?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType &
    MarginAttributesType;

/* Menu component prop type */
export type MenuPropsType = MenuEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* Menu Root node prop type */
export type MenuRootPropsType = MenuEffectivePropsType &
    NodeStylePropsTypeNoStyles;
