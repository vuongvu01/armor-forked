import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ObjectLiteralType } from '../../../type';

type DatePickerTimeSelectorEffectivePropsType = Partial<{
    // exampleProperty: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    ObjectLiteralType;

/* DatePickerTimeSelector component prop type */
export type DatePickerTimeSelectorPropsType = DatePickerTimeSelectorEffectivePropsType &
    ComponentStylePropsType;

/* DatePickerTimeSelector Root node prop type */
export type DatePickerTimeSelectorRootPropsType = DatePickerTimeSelectorEffectivePropsType &
    ComponentElementStylePropsType;

export type DatePickerTimeSelectorButtonPropsType = {
    selected?: boolean;
} & ComponentElementStylePropsType;
