import { useCallback, WheelEvent } from 'react';
import { debounce } from 'throttle-debounce';
import { DatePickerDaySelectorPropsType } from '../type';
import { useDatePickerDaySelectorCalendar } from './useDatePickerDaySelectorCalendar';
import { ReferenceType } from '../../../../type';
import { DATE_PICKER_DAY_SELECTOR_WEEK_DAYS } from '../constants';
import { useDatePickerDaySelectorSelection } from './useDatePickerDaySelectorSelection';

export const useDatePickerDaySelector = (
    {
        displayedDateVector,
        onDisplayedDateVectorChange,
        currentDateVector,
        dirtyInternalValueVector,
        dayButtonProps,
        selectionStartCandidate,
        selectionEndCandidate,
        ...restProps
    }: DatePickerDaySelectorPropsType,
    ref: ReferenceType,
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

    const navigateMonth = useCallback(
        debounce(100, (direction: boolean) => {
            const newVector = displayedDateVector.clone();
            newVector.addMonth(direction ? 1 : -1);
            onDisplayedDateVectorChange(newVector);
        }),
        [onDisplayedDateVectorChange, displayedDateVector],
    );
    const onWheel = useCallback(
        (event: WheelEvent<HTMLDivElement>) => navigateMonth(event.deltaX > 0),
        [onDisplayedDateVectorChange, displayedDateVector],
    );

    return {
        rootProps: {
            ...restProps,
            onWheel,
            ref,
        },
        dayButtonProps,

        weekDays: DATE_PICKER_DAY_SELECTOR_WEEK_DAYS,
        dayMatrix: calendarWithSelection,
    };
};
