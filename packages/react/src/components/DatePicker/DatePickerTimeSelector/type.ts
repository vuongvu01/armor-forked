import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ObjectLiteralType } from '../../../type';
import { TimeVector24 } from '../utils/TimeVector24';

type DatePickerTimeSelectorEffectivePropsType = {
    value: TimeVector24;
    onChange: (value: TimeVector24) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & // includes all HTML Div attributes
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
