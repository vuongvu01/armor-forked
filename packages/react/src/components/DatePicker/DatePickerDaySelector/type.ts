import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ObjectLiteralType } from '../../../type';

type DatePickerDaySelectorEffectivePropsType = {
    currentDateUTC: Date;
    displayedDateUTC: Date;
    // add other custom properties here
} & HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    ObjectLiteralType;

export type DatePickerDaySelectorPropsType = DatePickerDaySelectorEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerDaySelectorRootPropsType = DatePickerDaySelectorEffectivePropsType &
    ComponentElementStylePropsType;

export type DatePickerDaySelectorDayButtonPropsType = {
    selected: boolean;
    leftEnd: boolean;
    rightEnd: boolean;
} & ComponentElementStylePropsType;

export type DatePickerDaySelectorDayPaddingPropsType = {
    selected: boolean;
    leftEnd: boolean;
    rightEnd: boolean;
    left?: boolean;
    right?: boolean;
} & ComponentElementStylePropsType;
