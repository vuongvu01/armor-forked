import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { DateVector } from '../utils/DateVector';

type DatePickerMonthYearSelectorEffectivePropsType = {
    toggleMonthYearSelector: () => void;

    displayedDateVector: DateVector;
    onDisplayedDateVectorChange: (newVector: DateVector) => void;
    // add other custom properties here
} & HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

export type DatePickerMonthYearSelectorPropsType =
    DatePickerMonthYearSelectorEffectivePropsType & ComponentStylePropsType;

export type DatePickerMonthYearSelectorRootPropsType =
    HTMLAttributes<HTMLDivElement> & ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorScrollPropsType =
    ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorListPropsType =
    ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorYearPropsType =
    ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorYearTitlePropsType =
    ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorMonthListPropsType =
    ComponentElementStylePropsType;

export type DatePickerMonthYearSelectorMonthPropsType = {
    selected: boolean;
} & ComponentElementStylePropsType;
