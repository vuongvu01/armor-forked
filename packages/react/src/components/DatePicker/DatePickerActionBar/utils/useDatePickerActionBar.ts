import { DatePickerActionBarPropsType } from '../type';
import { ReferenceType } from '../../../../type';

export const useDatePickerActionBar = (
    { ...restProps }: DatePickerActionBarPropsType,
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
