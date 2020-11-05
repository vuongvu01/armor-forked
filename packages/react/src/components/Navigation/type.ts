import { HTMLAttributes, ReactChild, ReactNode } from 'react';
import { StylePropsType, NodeStylePropsTypeNoStyles } from '../type';
import {
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { MenuPropsType } from '../Menu/type';

export type NavigationMenuElement = Indexed<{
    label: ReactChild;
    id: ScalarType;
    items?: NavigationMenuElement[];
    expanded?: boolean;
    selected?: boolean;
    beforeItems?: ReactNode;
    afterItems?: ReactNode;
}>;

type NavigationEffectivePropsType = Indexed<{
    items?: NavigationMenuElement[];
    onElementClick?: (itemId: ScalarType, item: NavigationMenuElement) => void;
    onElementExpansionHandleClick?: (itemId: ScalarType) => void; // todo: should be fired when somebody clicks on the expansion handle, future-reserved
    maxDepthLevel?: number;
    enableEffects?: boolean;
    // add other custom properties here
}> &
    Pick<MenuPropsType, 'enableBottomSeparator'> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    WidthAttributesType &
    MarginAttributesType;

/* Navigation component prop type */
export type NavigationPropsType = NavigationEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* Navigation Root node prop type */
export type NavigationRootPropsType = NavigationEffectivePropsType &
    NodeStylePropsTypeNoStyles;
