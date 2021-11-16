import { HTMLAttributes, ReactChild } from 'react';
import { MarginPropsType, SizePropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
type FilterLayoutEffectivePropsType = Partial<{
    filterOpen: boolean;
    onFilterOpenChange: (newState: boolean) => void;
    defaultFilterOpen: boolean;
    /** An instance of the <FilterEditor /> component */
    filterEditor: ReactChild;
    /** If set to "sideSheet", the FilterEditor will be displayed in a SideSheet on the right */
    filterEditorPlacement: 'sideSheet' | 'default';
    /** If set to _false_, the component will not render the top border line. Otherwise, it is enabled by default. */
    enableTopSeparator: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType &
    SizePropsType;

export type FilterLayoutPropsType = FilterLayoutEffectivePropsType &
    ComponentStylePropsType;

export type FilterLayoutRootPropsType = FilterLayoutEffectivePropsType &
    ComponentElementStylePropsType;

export type FilterLayoutLeftBarPropsType = {
    open: boolean;
} & ComponentElementStylePropsType;

export type FilterLayoutLeftBarContainerPropsType = ComponentElementStylePropsType;

export type FilterLayoutMainPropsType = ComponentElementStylePropsType;
