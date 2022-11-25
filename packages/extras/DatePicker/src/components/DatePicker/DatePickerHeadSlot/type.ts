import { HTMLAttributes, ReactNode } from 'react';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type DatePickerHeadSlotEffectivePropsType = {
    content: ReactNode;
    // add other custom properties here
} & HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

export type DatePickerHeadSlotPropsType = DatePickerHeadSlotEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerHeadSlotRootPropsType = HTMLAttributes<HTMLDivElement> &
    ComponentElementStylePropsType;
