import { DateValueRangeType, DateValueType } from '../type';
import { DateVector } from './DateVector';
import { TimeVector24 } from './TimeVector24';
import { DateVectorStructureType } from './type';

type DateVectorRangeStructureType = {
    dateStart: DateVector | null;
    dateEnd: DateVector | null;
};

export class DateVectorRange {
    public static createFromLocalDateRange(dateRange?: DateValueRangeType) {
        if (!dateRange) {
            return new this();
        }

        return new this(
            dateRange[0] ? DateVector.createFromLocalDate(dateRange[0]) : null,
            dateRange[1] ? DateVector.createFromLocalDate(dateRange[1]) : null,
        );
    }

    public static createFromLocalDate(date?: DateValueType) {
        if (!date) {
            return new this();
        }

        return new this(
            date ? DateVector.createFromLocalDate(date) : null,
            date ? DateVector.createFromLocalDate(date) : null,
        );
    }

    constructor(
        public dateStart: DateVector | null = null,
        public dateEnd: DateVector | null = null,
    ) {}

    public clone({
        dateStart,
        dateEnd,
    }: Partial<DateVectorRangeStructureType> = {}) {
        const { dateStart: ownDateStart, dateEnd: ownDateEnd } = this;
        const effectiveDateStart = dateStart || ownDateStart || null;
        const effectiveDateEnd = dateEnd || ownDateEnd || null;

        return new DateVectorRange(
            effectiveDateStart ? effectiveDateStart.clone() : null,
            effectiveDateEnd ? effectiveDateEnd.clone() : null,
        );
    }

    public convertToLocalDateRange(timeVector?: TimeVector24) {
        const { dateStart, dateEnd } = this;

        let time: Partial<DateVectorStructureType> = {};
        if (timeVector) {
            time = {
                hour: timeVector.hour,
                minute: timeVector.minute,
            };
        }

        let start: Date | undefined;
        if (dateStart) {
            start = dateStart.clone(time).convertToLocalDate();
        }

        let end: Date | undefined;
        if (dateEnd) {
            end = dateEnd.clone(time).convertToLocalDate();
        }

        return [start, end] as DateValueRangeType;
    }

    public convertToLocalDate(timeVector?: TimeVector24) {
        const { dateStart } = this;

        let time: Partial<DateVectorStructureType> = {};
        if (timeVector) {
            time = {
                hour: timeVector.hour,
                minute: timeVector.minute,
            };
        }

        let start: DateValueType | undefined;
        if (dateStart) {
            start = dateStart.clone(time).convertToLocalDate();
        }

        return start;
    }

    public isEmpty() {
        return !this.dateStart || !this.dateEnd;
    }

    public isNarrow() {
        return this.dateEnd?.isEqualTo(this.dateStart);
    }
}
