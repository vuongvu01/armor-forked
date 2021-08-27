import { HTMLAttributes, ReactChild, ReactNode } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType, WidthAttributesType } from '../../system';
import { ObjectLiteralType, ScalarType } from '../../type';
import { MenuElementPropsType } from '../Menu';

export type NavigationMenuElementType = {
    /** Item label, which is displayed */
    label: ReactChild;
    /** Item id to make the internal logic work */
    id: ScalarType;
    /**
     * Sub-items of the item
     */
    items?: NavigationMenuElementType[];
    /** Indicates whether an item is rendered as expanded */
    expanded?: boolean;
    /** Indicates whether an item is rendered as selected */
    selected?: boolean;
    /** React node to be rendered before the menu chunk */
    beforeMenu?: ReactNode;
    /** React node to be rendered before the items chunk */
    beforeItems?: ReactNode;
    /** React node to be rendered after the items chunk */
    afterItems?: ReactNode;
    /** React node to be rendered after the menu chunk */
    afterMenu?: ReactNode;
    /** Props to be forwarded to the MenuElement component */
    menuElementProps?: MenuElementPropsType;
} & ObjectLiteralType;

/** 👉 PROPS TYPE */
type NavigationEffectivePropsType = Partial<{
    /**
     * Describes a structure of menu items to be rendered
     */
    items: NavigationMenuElementType[];
    /** A callback which is triggered when a user clicks on the menu element */
    onElementClick: (
        itemId: ScalarType,
        item: NavigationMenuElementType,
    ) => void;
    /**
     * @ignore
     */
    onElementExpansionHandleClick: (itemId: ScalarType) => void; // todo: should be fired when somebody clicks on the expansion handle, future-reserved
    /** Regulates the maximum depth level of sub-menus. This prevents endless loops from happening in case if a corrupted item structure was used. Each level has a specific offset on the left, which matches the depth. **NOTE: currently only the 3-level offset is supported.** */
    maxDepthLevel: number;
    /** If set to false, the transition effects will be disabled */
    enableEffects: boolean;
    /** Sets a list of item ids which will be rendered as selected */
    selectedElementIds: ScalarType[];
    /** Sets a list of item ids which will be rendered as expanded */
    expandedElementIds: ScalarType[];
    /** If set to true, a bottom horizontal separator will be rendered */
    enableBottomSeparator: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    WidthAttributesType &
    MarginAttributesType;

/* Navigation component prop type */
export type NavigationPropsType = NavigationEffectivePropsType &
    ComponentStylePropsType;

/* Navigation Root node prop type */
export type NavigationRootPropsType = NavigationEffectivePropsType &
    ComponentElementStylePropsType;
