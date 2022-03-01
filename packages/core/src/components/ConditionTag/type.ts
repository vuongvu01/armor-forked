import { HTMLAttributes, ReactChild, MouseEvent } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type ConditionTagEffectivePropsType = Partial<{
    label: string;
    value: ReactChild | ReactChild[];
    onCloseButtonClick: (event: MouseEvent<HTMLElement>) => void;
    /** If set to _false_, the component will not render the close button. */
    enableCloseIcon: boolean;
    path: string;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

export type ConditionTagPropsType = ConditionTagEffectivePropsType &
    ComponentStylePropsType;

export type ConditionTagRootPropsType = ConditionTagEffectivePropsType &
    ComponentElementStylePropsType;

export type ConditionTagLabelPropsType = ComponentElementStylePropsType;

export type ConditionTagValuePropsType = ComponentElementStylePropsType;

export type ConditionTagValueSegmentPropsType = {
    moreItems?: boolean;
} & ComponentElementStylePropsType;

export type ConditionTagCloseIconContainerPropsType =
    ComponentElementStylePropsType;

export type ConditionTagValueTailElementPropsType =
    ComponentElementStylePropsType;
