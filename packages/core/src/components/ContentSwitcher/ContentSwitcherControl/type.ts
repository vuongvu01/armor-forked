import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
type ContentSwitcherControlEffectivePropsType = {
    /** String value that will be passed as argument in
     * callback function upon switch change */
    switchName: string;
    /** Reserved - Sets a flag on switch as selected */
    selected?: boolean;
    /** Reserved - Sets the flag on the next switch that comes after selected switch */
    afterSelected?: boolean;
} & HTMLAttributes<HTMLButtonElement> & // includes all HTML Button properties
    MarginPropsType;

export type ContentSwitcherControlPropsType =
    ContentSwitcherControlEffectivePropsType & ComponentStylePropsType;

export type ContentSwitcherControlRootPropsType =
    ContentSwitcherControlEffectivePropsType & ComponentElementStylePropsType;
