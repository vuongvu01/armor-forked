import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
type FilterEditorHeaderEffectivePropsType = Partial<{
    leftAligned: boolean;
    showClearFilterButton: boolean;
    onClearFilterButtonClick: () => void;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

export type FilterEditorHeaderPropsType = FilterEditorHeaderEffectivePropsType &
    ComponentStylePropsType;

export type FilterEditorHeaderRootPropsType = FilterEditorHeaderEffectivePropsType &
    ComponentElementStylePropsType;
