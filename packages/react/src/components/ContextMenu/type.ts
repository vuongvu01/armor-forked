import { HTMLAttributes, HTMLProps, ReactChild, ReactElement } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import {
    MarginAttributesType,
    SizeAttributesType,
} from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { PopperPlacement } from '../../system/hooks/type';

export type ContextMenuElements = Array<{
    label: ReactChild;
    id: ScalarType;
    props?: HTMLAttributes<HTMLElement>;
}>;

type ContextMenuEffectivePropsType = Indexed<{
    trigger?: ReactElement;
    align?: PopperPlacement;
    open?: boolean;
    onToggle?: (open: boolean) => void;
    menuElements?: ContextMenuElements;
    // add other custom properties here
}> &
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
