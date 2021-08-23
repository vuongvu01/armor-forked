import { HTMLAttributes, ReactChild } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType, SizeAttributesType } from '../../../system';

/** 👉 PROPS TYPE */
type FilterLayoutEffectivePropsType = Partial<{
    filterOpen: boolean;
    onFilterOpenChange: (newState: boolean) => void;
    defaultFilterOpen: boolean;
    /** An instance of the <FilterEditor /> component */
    filterEditor: ReactChild;
    /** If set to "sideSheet", the FilterEditor will be displayed in a SideSheet on the right */
    filterEditorPlacement: 'sideSheet' | 'default';
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    SizeAttributesType;

export type FilterLayoutPropsType = FilterLayoutEffectivePropsType &
    ComponentStylePropsType;

export type FilterLayoutRootPropsType = FilterLayoutEffectivePropsType &
    ComponentElementStylePropsType;

export type FilterLayoutLeftBarPropsType = {
    open: boolean;
} & ComponentElementStylePropsType;

export type FilterLayoutLeftBarContainerPropsType = ComponentElementStylePropsType;

export type FilterLayoutMainPropsType = ComponentElementStylePropsType;
