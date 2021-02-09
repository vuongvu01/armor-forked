import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { ObjectLiteralType } from '../../../type';
import { DateVector } from '../utils/DateVector';

type DatePickerMonthYearSelectorEffectivePropsType = {
    toggleMonthYearSelector: () => void;

    displayedDateVector: DateVector;
    onDisplayedDateVectorChange: (newVector: DateVector) => void;
    // add other custom properties here
} & HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    ObjectLiteralType;

export type DatePickerMonthYearSelectorPropsType = DatePickerMonthYearSelectorEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerMonthYearSelectorRootPropsType = DatePickerMonthYearSelectorEffectivePropsType &
    ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorScrollPropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorListPropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorYearPropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorYearTitlePropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorMonthListPropsType = {} & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorMonthPropsType = {
    selected: boolean;
} & ComponentElementStylePropsType;
