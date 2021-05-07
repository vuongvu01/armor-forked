import { HTMLAttributes, ReactChild, ReactNode } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType, WidthAttributesType } from '../../system';
import { ObjectLiteralType, ScalarType } from '../../type';
import { MenuPropsType, MenuElementPropsType } from '../Menu';

export type NavigationMenuElementType = {
    label: ReactChild;
    id: ScalarType;
    items?: NavigationMenuElementType[];
    expanded?: boolean;
    selected?: boolean;
    beforeMenu?: ReactNode;
    beforeItems?: ReactNode;
    afterItems?: ReactNode;
    afterMenu?: ReactNode;
    menuElementProps?: MenuElementPropsType;
} & ObjectLiteralType;

type NavigationEffectivePropsType = Partial<{
    items: NavigationMenuElementType[];
    onElementClick: (
        itemId: ScalarType,
        item: NavigationMenuElementType,
    ) => void;
    onElementExpansionHandleClick: (itemId: ScalarType) => void; // todo: should be fired when somebody clicks on the expansion handle, future-reserved
    maxDepthLevel: number;
    enableEffects: boolean;
    selectedElementIds: ScalarType[];
    expandedElementIds: ScalarType[];
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
