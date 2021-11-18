import { MouseEvent, useCallback } from 'react';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { extractDataFromDOMEvent } from '../../utils/extractDataFromDOMEvent';
import { DatePickerEffectiveCommonPropsType } from '../../type';
import { useDatePickerCommonSelectionEvents } from '../../hooks/useDatePickerCommonSelectionEvents';

type SelectionPropType = {
    value: DateVectorRange;
    onChange: (value: DateVectorRange) => void;
} & Pick<
    DatePickerEffectiveCommonPropsType,
    'onDayMouseEnter' | 'onDayMouseLeave'
>;

export const useDatePickerSelectionEvents = ({
    value,
    onChange,
    onDayMouseEnter,
    onDayMouseLeave,
}: SelectionPropType) => {
    const onClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const data = extractDataFromDOMEvent(event);
            if (!data) {
                return;
            }

            const { vector, displayedMonth, allowed } = data;
            if (!displayedMonth || !allowed) {
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
            }

            onChange(
                value.clone({ dateStart: resultVector, dateEnd: resultVector }),
            );
        },
        [value, onChange],
    );

    const commonEvents = useDatePickerCommonSelectionEvents({
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
