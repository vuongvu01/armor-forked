import {
    DatePickerEffectiveCommonPropsType,
    DatePickerEffectiveGenericPropsType,
    DateValueType,
} from '../type';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
export type DatePickerEffectivePropsType = DatePickerEffectiveGenericPropsType<
    DateValueType
> &
    Partial<{
        enableTodayButton: boolean;
    }> &
    DatePickerEffectiveCommonPropsType;

export type DatePickerPropsType = DatePickerEffectivePropsType &
    ComponentStylePropsType;

export type DatePickerRootPropsType = DatePickerEffectivePropsType &
    ComponentElementStylePropsType;
