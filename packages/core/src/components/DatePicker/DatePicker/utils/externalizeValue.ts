import { DateVectorRange } from '../../utils/DateVectorRange';
import { TimeVector24 } from '../../utils/TimeVector24';

export const externalizeValue = (
    value: DateVectorRange,
    timeVector?: TimeVector24,
) => value.convertToLocalDate(timeVector);
