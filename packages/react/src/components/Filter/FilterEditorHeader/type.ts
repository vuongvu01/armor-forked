import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system';

/** 👉 PROPS TYPE */
type FilterEditorHeaderEffectivePropsType = Partial<{
    leftAligned: boolean;
    showClearFilterButton: boolean;
    onClearFilterButtonClick: () => void;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type FilterEditorHeaderPropsType = FilterEditorHeaderEffectivePropsType &
    ComponentStylePropsType;

export type FilterEditorHeaderRootPropsType = FilterEditorHeaderEffectivePropsType &
    ComponentElementStylePropsType;
