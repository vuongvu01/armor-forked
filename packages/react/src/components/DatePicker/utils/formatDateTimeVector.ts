import { DateVector } from './DateVector';
import { TimeVector24 } from './TimeVector24';

export const formatDateTimeVector = (
    dateVector: DateVector | null,
    enableTime = false,
) => {
    if (!dateVector) {
        return '';
    }

    const year = dateVector.formattedYear;
    const month = dateVector.formattedMonth;
    const day = dateVector.formattedDay;

    if (enableTime) {
        const timeVector = TimeVector24.createFromDateVector(
            dateVector,
        ).convertTo12();

        const { formattedHour, formattedMinute, mode } = timeVector;

        return `${formattedHour}:${formattedMinute} ${mode} ${day}/${month}/${year}`;
    }

    return `${day}/${month}/${year}`;
};
