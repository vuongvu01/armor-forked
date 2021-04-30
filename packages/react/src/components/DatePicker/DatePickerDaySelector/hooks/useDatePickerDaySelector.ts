import { DatePickerDaySelectorPropsType } from '../type';
import { useDatePickerDaySelectorCalendar } from './useDatePickerDaySelectorCalendar';
import { RefType, UnpackedType } from '../../../../type';
import { DATE_PICKER_DAY_SELECTOR_WEEK_DAYS } from '../constants';
import { useDatePickerDaySelectorSelection } from './useDatePickerDaySelectorSelection';
import { appendBEMModifierOnCondition } from '../../../../utils';

export const useDatePickerDaySelector = <E extends HTMLDivElement>(
    {
        displayedDateVector,
        currentDateVector,
        dirtyInternalValueVector,
        dayButtonProps,
        selectionStartCandidate,
        selectionEndCandidate,
        ...restProps
    }: DatePickerDaySelectorPropsType,
    ref: RefType<E>,
) => {
    const calendar = useDatePickerDaySelectorCalendar(
        displayedDateVector,
        currentDateVector,
    );
    const calendarWithSelection = useDatePickerDaySelectorSelection(
        calendar,
        dirtyInternalValueVector,
        selectionStartCandidate,
        selectionEndCandidate,
    );

    return {
        rootProps: {
            ...restProps,
            ref,
        },
        getDayProps: (
            day: UnpackedType<typeof calendarWithSelection>,
            baseClassName: string,
        ) => {
            const {
                selected,
                rightEnd,
                leftEnd,
                displayedMonth,
            } = day.buttonProps;

            return {
                ...dayButtonProps,
                className: `${baseClassName} ${appendBEMModifierOnCondition(
                    baseClassName,
                    'displayedMonth',
                    displayedMonth,
                )} ${appendBEMModifierOnCondition(
                    baseClassName,
                    'selectedLeftEnd',
                    leftEnd,
                )} ${appendBEMModifierOnCondition(
                    baseClassName,
                    'selectedRightEnd',
                    rightEnd,
                )} ${appendBEMModifierOnCondition(
                    baseClassName,
                    'selectedMiddle',
                    !rightEnd && !leftEnd && selected,
                )}`,
            };
        },

        weekDays: DATE_PICKER_DAY_SELECTOR_WEEK_DAYS,
        dayMatrix: calendarWithSelection,
    };
};
