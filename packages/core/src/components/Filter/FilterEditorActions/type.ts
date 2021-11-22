import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
type FilterEditorActionsEffectivePropsType = Partial<{
    showCloseButton: boolean;
    onCloseButtonClick: () => void;
    onApplyFilterButtonClick: () => void;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

export type FilterEditorActionsPropsType = FilterEditorActionsEffectivePropsType &
    ComponentStylePropsType;

export type FilterEditorActionsRootPropsType = FilterEditorActionsEffectivePropsType &
    ComponentElementStylePropsType;
