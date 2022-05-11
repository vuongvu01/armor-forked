import { MouseEvent } from 'react';
import { extractNumericDataAttribute } from '@deliveryhero/armor-system';

import { DateVector } from './DateVector';

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
    const allowed = extractNumericDataAttribute(event, 'allowed');

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
        allowed,
    };
};
