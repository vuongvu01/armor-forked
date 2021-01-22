import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import {
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { ObjectLiteralType } from '../../type';

export type DateValueType = Date; // todo: we can also support string or number in the future

type DatePickerEffectiveCommonPropsType = Partial<{
    enableActionButtons: boolean;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    WidthAttributesType &
    ObjectLiteralType;

type DatePickerEffectivePropsType = Partial<{
    // todo: We do not take the standard onChange, value, defaultValue names here
    // todo: because the best way of making the API for a date picker
    // todo: is still a subject of practical experimenting.
    // todo: the following 3 properties may be deprecated in the future in favor of better onChange, value, defaultValue
    onDateValueChange: () => (date: DateValueType) => void;
    dateValue: DateValueType;
    defaultDateValue: DateValueType;

    enableTimePicker: boolean;
    // add other custom properties here
}> &
    DatePickerEffectiveCommonPropsType;

export type DateValueRangeType = [DateValueType, DateValueType];

type DateRangePickerEffectivePropsType = Partial<{
    // todo: We do not take the standard onChange, value, defaultValue names here
    // todo: because the best way of making the API for a date picker
    // todo: is still a subject of practical experimenting.
    // todo: the following 3 properties may be deprecated in the future in favor of better onChange, value, defaultValue
    onDateValueChange: () => (range: DateValueRangeType) => void;
    dateValue: DateValueRangeType;
    defaultDateValue: DateValueRangeType;

    // add other custom properties here
}> &
    DatePickerEffectiveCommonPropsType;

export type DatePickerPropsType = DatePickerEffectivePropsType &
    ComponentStylePropsType;

export type DateRangePickerPropsType = DateRangePickerEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerRootPropsType = DatePickerEffectivePropsType &
    ComponentElementStylePropsType;

export type DatePickerMonthNavigationButtonForwardPropsType = {
    disabled: boolean;
} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorTogglePropsType = {
    open: boolean;
} & ComponentElementStylePropsType;
