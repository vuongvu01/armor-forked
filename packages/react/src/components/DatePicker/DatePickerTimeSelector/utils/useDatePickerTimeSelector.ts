import { DatePickerTimeSelectorPropsType } from '../type';
import { ReferenceType } from '../../../../type';

export const useDatePickerTimeSelector = (
    { ...restProps }: DatePickerTimeSelectorPropsType,
    ref: ReferenceType,
) => {
    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            ref,
        },
    };
};
