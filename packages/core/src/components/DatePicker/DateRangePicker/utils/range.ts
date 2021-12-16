import { throwError } from '@deliveryhero/armor-system';
import { DateVector } from '../../utils/DateVector';

export const getLatestAvailableDate = (
    start: DateVector,
    end: DateVector,
    isDateAllowed: (date: DateVector) => boolean,
) => {
    const nextDate = start.clone();
    let nextAllowedDate = start.clone();
    let safeExit = 0;

    if (start.isSmallerThanOrEqual(end)) {
        while (nextDate.isSmallerThanOrEqual(end)) {
            if (safeExit > 10000) {
                throwError('Potentially endless cycle in DateRangePicker');
            }

            if (!isDateAllowed(nextDate)) {
                break;
            }

            nextAllowedDate = nextDate.clone();
            nextDate.addDay(1);

            safeExit += 1;
        }
    } else {
        while (nextDate.isGreaterThanOrEqual(end)) {
            if (safeExit > 10000) {
                throwError('Potentially endless cycle in DateRangePicker');
            }

            if (!isDateAllowed(nextDate)) {
                break;
            }

            nextAllowedDate = nextDate.clone();
            nextDate.addDay(-1);

            safeExit += 1;
        }
    }

    return nextAllowedDate;
};

export const isRangeLegit = (
    start: DateVector,
    end: DateVector,
    isDateAllowed: (date: DateVector) => boolean,
) => {
    let startDate = start;
    let endDate = end;

    if (startDate.isGreaterThanOrEqual(endDate)) {
        const cup = startDate;
        startDate = endDate;
        endDate = cup;
    }

    let safeExit = 0;
    const nextDate = startDate.clone();
    while (nextDate.isSmallerThanOrEqual(endDate)) {
        if (safeExit > 10000) {
            throwError('Potentially endless cycle in DateRangePicker');
        }

        if (!isDateAllowed(nextDate)) {
            return false;
        }

        nextDate.addDay(1);

        safeExit += 1;
    }

    return true;
};
