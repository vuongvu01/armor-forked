import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ObjectLiteralType } from '../../../type';
import { DateVectorStructureType } from '../utils/type';
import { DateVector } from '../utils/DateVector';
import { DateVectorRange } from '../utils/DateVectorRange';

export type DatePickerDaySelectorRangeItemType = {
    id: string;
    weekDay: string;
    current: boolean;
    displayedMonth: boolean;
} & DateVectorStructureType;

type DaySelectionStatus = {
    selected: boolean;
    leftEnd: boolean;
    rightEnd: boolean;
    current: boolean;
    displayedMonth: boolean;
};

/** 👉 PROPS TYPE */
type DatePickerDaySelectorEffectivePropsType = {
    selectionStartCandidate: DateVector | null;
    selectionEndCandidate: DateVector | null;
    dayButtonProps: ObjectLiteralType;

    currentDateVector: DateVector;
    dirtyInternalValueVector: DateVectorRange;

    displayedDateVector: DateVector;

    // add other custom properties here
} & HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

export type DatePickerDaySelectorPropsType = DatePickerDaySelectorEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerDaySelectorRootPropsType = HTMLAttributes<
    HTMLDivElement
> &
    ComponentElementStylePropsType;

export type DatePickerDaySelectorDayPropsType = {} & ComponentElementStylePropsType;

export type DatePickerDaySelectorDayButtonPropsType = {} & DaySelectionStatus &
    ComponentElementStylePropsType;

export type DatePickerDaySelectorDayPaddingPropsType = {
    left?: boolean;
    right?: boolean;
} & DaySelectionStatus &
    ComponentElementStylePropsType;
