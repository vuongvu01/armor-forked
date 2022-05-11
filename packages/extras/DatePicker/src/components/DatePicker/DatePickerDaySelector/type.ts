import { HTMLAttributes } from 'react';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { DateVectorStructureType } from '../utils/type';
import { DateVector } from '../utils/DateVector';
import { DateVectorRange } from '../utils/DateVectorRange';

export type DatePickerDaySelectorRangeItemType = {
    id: string;
    weekDay: string;
    current: boolean;
    displayedMonth: boolean;
    date: DateVector;
} & DateVectorStructureType;

type DaySelectionStatus = {
    selected: boolean;
    allowed: boolean;
    free: boolean;
    leftEnd: boolean;
    rightEnd: boolean;
    current: boolean;
    displayedMonth: boolean;
};

/** 👉 PROPS TYPE */
type DatePickerDaySelectorEffectivePropsType = {
    selectionStartCandidate: DateVector | null;
    selectionEndCandidate: DateVector | null;
    dayButtonProps: Record<string, any>;

    currentDateVector: DateVector;
    dirtyInternalValueVector: DateVectorRange;

    displayedDateVector: DateVector;
    isDateAllowed: (date: DateVector) => boolean;
    isDateFree: (date: DateVector) => boolean;

    // add other custom properties here
} & HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

export type DatePickerDaySelectorPropsType =
    DatePickerDaySelectorEffectivePropsType & ComponentStylePropsType;

export type DatePickerDaySelectorRootPropsType =
    HTMLAttributes<HTMLDivElement> & ComponentElementStylePropsType;

export type DatePickerDaySelectorDayPropsType =
    {} & ComponentElementStylePropsType;

export type DatePickerDaySelectorDayButtonPropsType = {} & DaySelectionStatus &
    ComponentElementStylePropsType;

export type DatePickerDaySelectorDayPaddingPropsType = {
    left?: boolean;
    right?: boolean;
} & DaySelectionStatus &
    ComponentElementStylePropsType;
