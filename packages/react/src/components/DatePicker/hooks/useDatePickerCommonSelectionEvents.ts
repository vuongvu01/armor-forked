import { MouseEvent, useCallback } from 'react';
import { extractDataFromDOMEvent } from '../utils/extractDataFromDOMEvent';
import { DatePickerEffectiveCommonPropsType } from '../type';

type SelectionPropType = {} & Pick<
    DatePickerEffectiveCommonPropsType,
    'onDayMouseEnter' | 'onDayMouseLeave'
>;

export const useDatePickerCommonSelectionEvents = ({
    onDayMouseEnter,
    onDayMouseLeave,
}: SelectionPropType) => {
    const onMouseEnter = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (!onDayMouseEnter) {
                return;
            }

            const data = extractDataFromDOMEvent(event);
            if (!data) {
                return;
            }

            const { vector } = data;

            onDayMouseEnter(vector.convertToLocalDate());
        },
        [onDayMouseEnter],
    );

    const onMouseLeave = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            if (!onDayMouseLeave) {
                return;
            }

            const data = extractDataFromDOMEvent(event);
            if (!data) {
                return;
            }

            const { vector } = data;

            onDayMouseLeave(vector.convertToLocalDate());
        },
        [onDayMouseEnter],
    );

    return {
        dayButtonProps: {
            onMouseEnter,
            onMouseLeave,
        },
    };
};
