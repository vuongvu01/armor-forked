import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ObjectLiteralType } from '../../../type';
import { DateVector } from '../utils/DateVector';

type DatePickerTopBarEffectivePropsType = {
    monthYearSelectorOpen: boolean;
    onMonthYearToggleClick: () => void;

    displayedDateVector: DateVector;
    onDisplayedDateVectorChange: (newDisplayedDateVector: DateVector) => void;
    // add other custom properties here
} & HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    ObjectLiteralType;

export type DatePickerTopBarPropsType = DatePickerTopBarEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerTopBarRootPropsType = DatePickerTopBarEffectivePropsType &
    ComponentElementStylePropsType;
