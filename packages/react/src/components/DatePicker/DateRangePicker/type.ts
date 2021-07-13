import { ComponentStylePropsType } from '../../type';
import {
    DatePickerEffectiveGenericPropsType,
    DateValueRangeType,
} from '../type';

/** 👉 PROPS TYPE */
type DateRangePickerEffectivePropsType = DatePickerEffectiveGenericPropsType<
    DateValueRangeType
> &
    Partial<{
        formatDateTimeRange: (
            startDateTime: string,
            endDateTime: string,
        ) => string;
    }>;

export type DateRangePickerPropsType = DateRangePickerEffectivePropsType &
    ComponentStylePropsType;
