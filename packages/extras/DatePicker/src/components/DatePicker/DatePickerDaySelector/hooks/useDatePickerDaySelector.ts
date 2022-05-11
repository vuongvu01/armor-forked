import {
    appendBEMModifierOnCondition,
    UnpackedType,
} from '@deliveryhero/armor-system';

import { DatePickerDaySelectorPropsType } from '../type';
import { useDatePickerDaySelectorCalendar } from './useDatePickerDaySelectorCalendar';
import { RefType } from '../../../../type';
import { DATE_PICKER_DAY_SELECTOR_WEEK_DAYS } from '../constants';
import { useDatePickerDaySelectorSelection } from './useDatePickerDaySelectorSelection';

export const useDatePickerDaySelector = <E extends HTMLDivElement>(
    props: DatePickerDaySelectorPropsType,
    ref: RefType<E>,
) => {
    const {
        displayedDateVector,
        currentDateVector,
        dirtyInternalValueVector,
        dayButtonProps,
        selectionStartCandidate,
        selectionEndCandidate,
        isDateAllowed,
        isDateFree,
    } = props;

    const calendar = useDatePickerDaySelectorCalendar(
        displayedDateVector,
        currentDateVector,
    );
    const calendarWithSelection = useDatePickerDaySelectorSelection(
        calendar,
        dirtyInternalValueVector,
        selectionStartCandidate,
        selectionEndCandidate,
        isDateAllowed,
        isDateFree,
    );

    return {
        rootProps: {
            ...props,
            ref,
        },
        getDayProps: (
            item: UnpackedType<typeof calendarWithSelection>,
            baseClassName: string,
        ) => {
            const {
                day,
                month,
                year,
                displayedMonth,
                buttonProps: { selected, allowed, free, rightEnd, leftEnd },
            } = item;

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
                )} ${appendBEMModifierOnCondition(
                    baseClassName,
                    'allowed',
                    allowed,
                )}`,
                'data-day': day,
                'data-month': month,
                'data-year': year,
                'data-displayed-month': displayedMonth ? '1' : '0',
                'data-allowed': allowed ? '1' : '0',
                'data-free': free ? '1' : '0',
            };
        },

        weekDays: DATE_PICKER_DAY_SELECTOR_WEEK_DAYS,
        dayMatrix: calendarWithSelection,
    };
};
