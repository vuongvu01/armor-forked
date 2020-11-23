import { HTMLAttributes, ReactChild, ReactNode } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import {
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { MenuPropsType } from '../Menu/type';
import { MenuElementPropsType } from '../Menu/MenuElement/type';

export type NavigationMenuElement = Indexed<{
    label: ReactChild;
    id: ScalarType;
    items?: NavigationMenuElement[];
    expanded?: boolean;
    selected?: boolean;
    beforeMenu?: ReactNode;
    beforeItems?: ReactNode;
    afterItems?: ReactNode;
    afterMenu?: ReactNode;
    menuElementProps?: MenuElementPropsType;
}>;

type NavigationEffectivePropsType = Indexed<{
    items?: NavigationMenuElement[];
    onElementClick?: (itemId: ScalarType, item: NavigationMenuElement) => void;
    onElementExpansionHandleClick?: (itemId: ScalarType) => void; // todo: should be fired when somebody clicks on the expansion handle, future-reserved
    maxDepthLevel?: number;
    enableEffects?: boolean;
    selectedElementIds?: ScalarType[];
    expandedElementIds?: ScalarType[];
    // add other custom properties here
}> &
    Pick<MenuPropsType, 'enableBottomSeparator'> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    WidthAttributesType &
    MarginAttributesType;

/* Navigation component prop type */
export type NavigationPropsType = NavigationEffectivePropsType &
    ComponentStylePropsType;

/* Navigation Root node prop type */
export type NavigationRootPropsType = NavigationEffectivePropsType &
    ComponentElementStylePropsType;
