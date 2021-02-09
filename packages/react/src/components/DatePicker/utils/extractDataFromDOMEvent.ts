import { MouseEvent } from 'react';
import { DateVector } from './DateVector';
import { extractNumericDataAttribute } from './extractNumericDataAttribute';

export const extractDataFromDOMEvent = (
    event: MouseEvent<HTMLButtonElement>,
) => {
    const year = extractNumericDataAttribute(event, 'year');
    const month = extractNumericDataAttribute(event, 'month');
    const day = extractNumericDataAttribute(event, 'day');
    const displayedMonth = !!extractNumericDataAttribute(
        event,
        'displayed-month',
    );

    if (year === null || month === null || day === null) {
        return null;
    }

    return {
        vector: DateVector.createFromStructure({
            year,
            month,
            day,
        }),
        displayedMonth,
        withShift: event.shiftKey,
    };
};
