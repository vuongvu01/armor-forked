import { MouseEvent, useCallback } from 'react';
import { DateVectorRange } from '../utils/DateVectorRange';
import { extractDataFromDOMEvent } from '../utils/extractDataFromDOMEvent';

type SelectionPropType = {
    value: DateVectorRange;
    onChange: (value: DateVectorRange) => void;
};

export const useDatePickerSelectionEvents = ({
    value,
    onChange,
}: SelectionPropType) => {
    const onClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const data = extractDataFromDOMEvent(event);
            if (!data || !data.displayedMonth) {
                return;
            }

            const { vector } = data;

            onChange(value.clone({ dateStart: vector, dateEnd: vector }));
        },
        [value, onChange],
    );

    return {
        dayButtonProps: {
            onClick,
        },
        selectionStartCandidate: null,
        selectionEndCandidate: null,
    };
};
