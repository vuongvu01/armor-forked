import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType, WidthAttributesType } from '../../system';
import { ObjectLiteralType } from '../../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';

export type DateValueType = Date;
export type DateValueRangeType = [Date, Date];

export type DatePickerEffectiveGenericPropsType<V> = Partial<{
    // todo: We do not take the standard onChange, value, defaultValue names here
    // todo: because the best way of making the API for a date picker
    // todo: is still a subject of practical experimenting.
    // todo: the following 3 properties may be deprecated in the future in favor of better onChange, value, defaultValue
    onDateValueChange: (dateValue: V | undefined) => void;
    dateValue: V;
    defaultDateValue: V;

    enableActionButtons: boolean;
    enableTimePicker: boolean;

    label: string;
    disabled: boolean;
    readOnly: boolean;

    defaultMonthYearSelectorOpen: boolean;

    // add other custom properties here
}> &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    WidthAttributesType &
    ObjectLiteralType;

/** 👉 PROPS TYPE */
export type DatePickerEffectivePropsType = DatePickerEffectiveGenericPropsType<
    DateValueType
>;

/** 👉 PROPS TYPE */
type DateRangePickerEffectivePropsType = DatePickerEffectiveGenericPropsType<
    DateValueRangeType
>;

export type DatePickerPropsType = DatePickerEffectivePropsType &
    ComponentStylePropsType;

export type DateRangePickerPropsType = DateRangePickerEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerRootPropsType = DatePickerEffectivePropsType &
    ComponentElementStylePropsType;

export type DatePickerDropdownPropsType = {
    zIndex: number;
} & ComponentElementStylePropsType;

export type DatePickerArrowPropsType = {};

export type DatePickerTopBarMonthNavigationButtonForwardPropsType = {
    disabled: boolean;
} & ComponentElementStylePropsType;

export type DatePickerTopBarMonthYearSelectorTogglePropsType = {
    open: boolean;
} & ComponentElementStylePropsType;

export type DatePickerTopBarMonthYearSelectorToggleArrowPropsType = {
    open: boolean;
} & ComponentElementStylePropsType;
