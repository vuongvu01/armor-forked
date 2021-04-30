import { HTMLAttributes, ReactChild, ReactElement } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { SizeAttributesType, PopperPropsType } from '../../system';
import { ScalarType } from '../../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';

export type ContextMenuElements = Array<{
    label: ReactChild;
    id: ScalarType;
    props?: HTMLAttributes<HTMLElement>;
}>;

type ContextMenuEffectivePropsType = Partial<{
    trigger: ReactElement;
    menuElements: ContextMenuElements;

    /**
     * @deprecated
     * @see onOpenChange
     * */
    onToggle: (open: boolean) => void;

    // add other custom properties here
}> &
    PopperPropsType &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    SizeAttributesType;

/* ContextMenu component prop type */
export type ContextMenuPropsType = ContextMenuEffectivePropsType &
    ComponentStylePropsType;

/* ContextMenu Root node prop type */
export type ContextMenuRootPropsType = ContextMenuEffectivePropsType & {
    displayMenuElements: boolean;
} & ComponentElementStylePropsType;

/* ContextMenu SubNode node prop type */
export type ContextMenuSubNodePropsType = {} & ComponentElementStylePropsType;
