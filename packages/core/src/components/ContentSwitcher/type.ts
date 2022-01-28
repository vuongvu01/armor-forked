import { HTMLAttributes } from 'react';

import { MarginPropsType, WidthPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type ContentSwitcherEffectivePropsType = Partial<{
    /** Switch with the name passed here will be shown as selected for first load */
    defaultSwitchName: string;
    /** For controlled usage: Switch with the name passed here will be shown as selected */
    switchName: string;
    /** Callback function which will be called after clicking
     * any of the unselected switch controls and
     * receives next switch name
     */
    onSwitchNameChange: (nextSwitchName: string) => void;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType &
    WidthPropsType;

export type ContentSwitcherPropsType = ContentSwitcherEffectivePropsType &
    ComponentStylePropsType;

export type ContentSwitcherRootPropsType = ContentSwitcherEffectivePropsType &
    ComponentElementStylePropsType;

export type ContentSwitcherContextType = Partial<{
    switchName: string;
    onSwitchNameChange: (nextSwitchName: string) => void;
    childrenIndexMap: Record<string, number>;
}>;
