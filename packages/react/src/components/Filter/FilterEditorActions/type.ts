import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system';

/** 👉 PROPS TYPE */
type FilterEditorActionsEffectivePropsType = Partial<{
    showCloseButton: boolean;
    onCloseButtonClick: () => void;
    onApplyFilterButtonClick: () => void;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type FilterEditorActionsPropsType = FilterEditorActionsEffectivePropsType &
    ComponentStylePropsType;

export type FilterEditorActionsRootPropsType = FilterEditorActionsEffectivePropsType &
    ComponentElementStylePropsType;
