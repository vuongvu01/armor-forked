import { ComponentStylePropsType } from '../../type';
import {
    DatePickerEffectiveCommonPropsType,
    DatePickerEffectiveGenericPropsType,
    DateValueRangeType,
} from '../type';

/** 👉 PROPS TYPE */
type DateRangePickerEffectivePropsType = DatePickerEffectiveGenericPropsType<
    DateValueRangeType
> &
    DatePickerEffectiveCommonPropsType &
    Partial<{
        /** Allows custom formatting of the range of selected dates, as a drop-in replacement for the standard %d - %d format */
        formatDateTimeRange: (
            startDateTime: string,
            endDateTime: string,
        ) => string;
    }>;

export type DateRangePickerPropsType = DateRangePickerEffectivePropsType &
    ComponentStylePropsType;
