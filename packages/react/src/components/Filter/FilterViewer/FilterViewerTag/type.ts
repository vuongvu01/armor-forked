import { HTMLAttributes, ReactChild, MouseEvent } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../../type';
import { MarginAttributesType } from '../../../../system';

/** 👉 PROPS TYPE */
type FilterViewerTagEffectivePropsType = Partial<{
    label: string;
    value: ReactChild | ReactChild[];
    onCloseButtonClick: (event: MouseEvent<HTMLElement>) => void;
    path: string;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type FilterViewerTagPropsType = FilterViewerTagEffectivePropsType &
    ComponentStylePropsType;

export type FilterViewerTagRootPropsType = FilterViewerTagEffectivePropsType &
    ComponentElementStylePropsType;

export type FilterViewerTagLabelPropsType = ComponentElementStylePropsType;

export type FilterViewerTagValuePropsType = ComponentElementStylePropsType;

export type FilterViewerTagValueSegmentPropsType = {
    moreItems?: boolean;
} & ComponentElementStylePropsType;

export type FilterViewerTagCloseIconContainerPropsType = ComponentElementStylePropsType;

export type FilterViewerTagValueTailElementPropsType = ComponentElementStylePropsType;
