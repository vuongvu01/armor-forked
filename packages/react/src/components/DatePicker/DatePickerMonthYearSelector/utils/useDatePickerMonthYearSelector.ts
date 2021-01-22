import { DatePickerMonthYearSelectorPropsType } from '../type';
import { ReferenceType } from '../../../../type';

export const useDatePickerMonthYearSelector = (
    { exampleProperty, ...restProps }: DatePickerMonthYearSelectorPropsType,
    ref: ReferenceType,
) => {
    // put all your component logic here

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    return {
        rootProps: {
            ...restProps,
            ref,
        },

        months,
    };
};
