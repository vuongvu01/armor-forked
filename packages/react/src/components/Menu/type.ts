import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
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
    expanded?: boolean;
    enableEffects?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    PaddingAttributesType &
    MarginAttributesType;

/* Menu component prop type */
export type MenuPropsType = MenuEffectivePropsType & ComponentStylePropsType;

/* Menu Root node prop type */
export type MenuRootPropsType = MenuEffectivePropsType &
    ComponentElementStylePropsType;
