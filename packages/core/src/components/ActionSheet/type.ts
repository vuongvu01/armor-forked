import { HTMLAttributes, ReactChild } from 'react';
import { MarginPropsType, WidthPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type ActionSheetEffectivePropsType = Partial<{
    /** Sets the title in left portion of the ActionSheet */
    label: ReactChild;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    WidthPropsType &
    MarginPropsType;

export type ActionSheetPropsType = ActionSheetEffectivePropsType &
    ComponentStylePropsType;

export type ActionSheetRootPropsType = ActionSheetEffectivePropsType &
    ComponentElementStylePropsType;

export type ActionSheetLabelContainerPropsType = ActionSheetEffectivePropsType &
    ComponentElementStylePropsType;

// export type ActionSheetSubNodePropsType = {} & ComponentElementStylePropsType;
