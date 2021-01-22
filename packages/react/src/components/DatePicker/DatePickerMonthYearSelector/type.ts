import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { ObjectLiteralType } from '../../../type';

type DatePickerMonthYearSelectorEffectivePropsType = Partial<{
    // exampleProperty: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    ObjectLiteralType;

export type DatePickerMonthYearSelectorPropsType = DatePickerMonthYearSelectorEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerMonthYearSelectorRootPropsType = DatePickerMonthYearSelectorEffectivePropsType &
    ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorListPropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorYearPropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorYearTitlePropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorMonthListPropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorMonthPropsType = {} & ComponentElementStylePropsType;
