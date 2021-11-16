import {
    DateRangeEdgeType,
    DateValueAdvancedRangeType,
    DateValueRangeType,
    DateValueType,
} from '../type';
import { DateVector } from './DateVector';
import { TimeVector24 } from './TimeVector24';
import { DateVectorStructureType } from './type';
import { DATE_PICKER_INFINITY } from '../constants';

type DateVectorRangeStructureType = {
    dateStart: DateVector | null;
    dateEnd: DateVector | null;
};

/**
 * @internal
 */
export class DateVectorRange {
    public static createFromLocalDateRange(
        dateRange?: DateValueRangeType | null,
    ) {
        if (!dateRange) {
            return new this();
        }

        return new this(
            dateRange[0]
                ? DateVector.createFromLocalDate(dateRange[0])
                : DATE_PICKER_INFINITY,
            dateRange[1]
                ? DateVector.createFromLocalDate(dateRange[1])
                : DATE_PICKER_INFINITY,
        );
    }

    public static createFromLocalDate(date?: DateValueType | null) {
        if (!date) {
            return new this();
        }

        return new this(
            date ? DateVector.createFromLocalDate(date) : DATE_PICKER_INFINITY,
            date ? DateVector.createFromLocalDate(date) : DATE_PICKER_INFINITY,
        );
    }

    /**
     * @internal
     * @param dateRange
     * @param currentDateVector
     */
    public static createFromLocalDateAdvancedRange(
        dateRange: DateValueAdvancedRangeType,
        currentDateVector: DateVector,
    ) {
        const [left, right] = dateRange;
        return new this(
            this.createLocalDateAdvancedRangeEdge(left, currentDateVector),
            this.createLocalDateAdvancedRangeEdge(right, currentDateVector),
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
        const effectiveDateStart =
            dateStart || ownDateStart || DATE_PICKER_INFINITY;
        const effectiveDateEnd = dateEnd || ownDateEnd || DATE_PICKER_INFINITY;

        return new DateVectorRange(
            effectiveDateStart
                ? effectiveDateStart.clone()
                : DATE_PICKER_INFINITY,
            effectiveDateEnd ? effectiveDateEnd.clone() : DATE_PICKER_INFINITY,
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

    public isInfinite() {
        return this.isInfiniteStart() || this.isInfiniteEnd();
    }

    public isInfiniteStart() {
        return !this.dateStart;
    }

    public isInfiniteEnd() {
        return !this.dateEnd;
    }

    public isFlat() {
        return !!this.dateEnd?.isEqualTo(this.dateStart);
    }

    public isIllegal() {
        if (!this.dateStart || !this.dateEnd) {
            return false;
        }

        return this.dateEnd.isSmallerThanOrEqual(this.dateStart);
    }

    public contains(date: DateVector) {
        if (this.isInfiniteStart()) {
            return date.isSmallerThanOrEqual(this.dateEnd);
        }

        if (this.isInfiniteEnd()) {
            return date.isGreaterThanOrEqual(this.dateStart);
        }

        return (
            date.isGreaterThanOrEqual(this.dateStart) &&
            date.isSmallerThanOrEqual(this.dateEnd)
        );
    }

    private static createLocalDateAdvancedRangeEdge(
        dateEdge: DateRangeEdgeType,
        currentDateVector: DateVector,
    ) {
        if (dateEdge === null) {
            return DATE_PICKER_INFINITY;
        }

        if (dateEdge instanceof Date) {
            return DateVector.createFromLocalDate(dateEdge);
        }

        // string otherwise
        const result = DateVector.createFromMetaString(dateEdge, {
            currentDateVector,
        });
        if (result) {
            return result;
        }

        return DATE_PICKER_INFINITY;
    }
}
