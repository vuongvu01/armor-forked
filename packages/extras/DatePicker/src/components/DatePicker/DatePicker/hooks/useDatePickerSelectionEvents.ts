import { MouseEvent, useCallback } from 'react';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { extractDataFromDOMEvent } from '../../utils/extractDataFromDOMEvent';
import { DatePickerEffectiveCommonPropsType } from '../../type';
import { useCommonDatePickerSelectionEvents } from '../../hooks/useCommonDatePickerSelectionEvents';
import { DateVector } from '../../utils/DateVector';
import { TimeVector24 } from '../../utils/TimeVector24';

type UseDatePickerSelectionPropsType = {
    value: DateVectorRange;
    onChange: (value: DateVectorRange) => void;
    enableCloseOnSelect: boolean;
    closeDropdown: () => void;
    isDateSelectable: (date: DateVector) => boolean;
    enableTimePicker?: boolean;
    timeSelectorValue: TimeVector24;
};

export const useDatePickerSelectionEvents = (
    {
        value,
        onChange,
        enableCloseOnSelect,
        closeDropdown,
        isDateSelectable,
        enableTimePicker,
        timeSelectorValue,
    }: UseDatePickerSelectionPropsType,
    {
        onDayMouseEnter,
        onDayMouseLeave,
    }: Pick<
        DatePickerEffectiveCommonPropsType,
        'onDayMouseEnter' | 'onDayMouseLeave'
    >,
) => {
    const onClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const data = extractDataFromDOMEvent(event);
            if (!data) {
                return;
            }

            const { vector, displayedMonth } = data;
            const selectable = isDateSelectable(vector);
            if (!displayedMonth || !selectable) {
                return;
            }

            let resultVector = vector;

            // copy time from the existing value, if there is something
            if (value.dateStart) {
                const { minute, hour } = value.dateStart;
                resultVector = resultVector.clone({
                    minute,
                    hour,
                });
            } else if (enableTimePicker) {
                const { minute, hour } = timeSelectorValue;
                resultVector = resultVector.clone({
                    minute,
                    hour,
                });
            }

            onChange(
                value.clone({ dateStart: resultVector, dateEnd: resultVector }),
            );
            if (enableCloseOnSelect) {
                closeDropdown();
            }
        },
        [
            isDateSelectable,
            value,
            onChange,
            enableCloseOnSelect,
            closeDropdown,
            enableTimePicker,
            timeSelectorValue,
        ],
    );

    const commonEvents = useCommonDatePickerSelectionEvents({
        onDayMouseEnter,
        onDayMouseLeave,
    });

    return {
        dayButtonProps: {
            onClick,
            ...commonEvents.dayButtonProps,
        },
        selectionStartCandidate: null,
        selectionEndCandidate: null,
    };
};
