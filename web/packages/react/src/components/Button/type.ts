import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
    ReactNode,
} from 'react';

import { MarginAttributesType, WidthAttributesType } from '../../system';
import { ChildrenSemanticsType } from './utils/generateChildrenSemantics';
import { Indexed } from '../../type';
import { StylePropsType, PropsWithNodeStylePropsType } from '../type';

export type ButtonTagType = string | ComponentType<any>;

type ButtonEffectivePropsType = Indexed<{
    tag?: ButtonTagType;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    danger?: boolean;
    small?: boolean;
    wide?: boolean;
    before?: ReactNode;
    after?: ReactNode;
    childrenSemantics?: ChildrenSemanticsType;
    // add other custom properties here
}> &
    ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button attributes
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> & // and 3 attributes from HTML Anchor
    WidthAttributesType &
    MarginAttributesType;

/* Button component prop type */
export type ButtonPropsType = ButtonEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* Button Root node prop type */
export type ButtonRootPropsType = PropsWithNodeStylePropsType<
    ButtonEffectivePropsType
>;

/* Button Root node prop type */
export type ButtonContentPropsType = PropsWithNodeStylePropsType<
    ButtonEffectivePropsType
>;
