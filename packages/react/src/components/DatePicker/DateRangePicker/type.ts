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
        formatDateTimeRange: (
            startDateTime: string,
            endDateTime: string,
        ) => string;
    }>;

export type DateRangePickerPropsType = DateRangePickerEffectivePropsType &
    ComponentStylePropsType;
