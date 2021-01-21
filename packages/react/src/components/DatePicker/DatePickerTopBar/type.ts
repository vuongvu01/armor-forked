import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ObjectLiteralType } from '../../../type';

type DatePickerTopBarEffectivePropsType = Partial<{
    monthYearSelectorOpen: boolean;
    onMonthYearToggleClick: () => void;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    ObjectLiteralType;

export type DatePickerTopBarPropsType = DatePickerTopBarEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerTopBarRootPropsType = DatePickerTopBarEffectivePropsType &
    ComponentElementStylePropsType;
