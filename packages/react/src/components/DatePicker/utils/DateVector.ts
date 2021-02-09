import { DATE_PICKER_MONTH_NAMES } from '../constants';
import { DateVectorStructureType } from './type';

export class DateVector {
    public static createFromLocalDate(date?: Date) {
        const sourceDate = date || new Date();
        return new this(
            new Date(
                Date.UTC(
                    sourceDate.getFullYear(),
                    sourceDate.getMonth(),
                    sourceDate.getDate(),
                    sourceDate.getHours(),
                    sourceDate.getMinutes(),
                    sourceDate.getSeconds(),
                    sourceDate.getMilliseconds(),
                ),
            ),
        );
    }

    public static createFromStructure({
        year,
        month,
        day,
        hour,
        minute,
    }: Partial<Omit<DateVectorStructureType, 'year' | 'month'>> &
        Pick<DateVectorStructureType, 'year' | 'month'>) {
        return new this(
            new Date(
                Date.UTC(
                    year,
                    month,
                    day !== undefined ? day : 1,
                    hour !== undefined ? hour : 0,
                    minute !== undefined ? minute : 0,
                ),
            ),
        );
    }

    constructor(protected date: Date) {}

    public clone({
        hour,
        minute,
        year,
        month,
        day,
    }: Partial<DateVectorStructureType> = {}) {
        const { date } = this;
        return new DateVector(
            new Date(
                Date.UTC(
                    year !== undefined ? year : date.getUTCFullYear(),
                    month !== undefined ? month : date.getUTCMonth(),
                    day !== undefined ? day : date.getUTCDate(),
                    hour !== undefined ? hour : date.getUTCHours(),
                    minute !== undefined ? minute : date.getUTCMinutes(),
                    date.getUTCSeconds(),
                    date.getUTCMilliseconds(),
                ),
            ),
        );
    }

    public convertToLocalDate() {
        const { date } = this;

        return new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds(),
        );
    }

    public isGreaterThan(vector?: DateVector | null) {
        if (!vector) {
            return false;
        }

        return this.getWeight() >= vector.getWeight();
    }

    public isSmallerThan(vector?: DateVector | null) {
        if (!vector) {
            return false;
        }

        return this.getWeight() <= vector.getWeight();
    }

    public isEqualTo = (vector?: DateVector | null) => {
        if (!vector) {
            return false;
        }

        const { month, day, year } = this;

        return (
            month === vector.month && day === vector.day && year === vector.year
        );
    };

    public addMonth(amount = 0) {
        const { date } = this;
        date.setUTCDate(1);
        date.setUTCMonth(date.getUTCMonth() + amount);
    }

    public addDay(amount = 0) {
        const { date } = this;
        date.setUTCDate(date.getUTCDate() + amount);
    }

    public resetTime() {
        this.date.setUTCHours(0, 0, 0, 0);
    }

    public get hour() {
        return this.date.getUTCHours();
    }

    public get minute() {
        return this.date.getUTCMinutes();
    }

    public get day() {
        return this.date.getUTCDate();
    }

    public get month() {
        return this.date.getUTCMonth();
    }

    public get year() {
        return this.date.getUTCFullYear();
    }

    public get timeStamp() {
        return this.date.getTime();
    }

    public get weekDay() {
        return this.date.getUTCDay();
    }

    public get formattedHour() {
        return this.hour.toString().padStart(2, '0');
    }

    public get formattedMinute() {
        return this.minute.toString().padStart(2, '0');
    }

    public get formattedDay() {
        return this.day.toString().padStart(2, '0');
    }

    public get formattedMonth() {
        return (this.month + 1).toString().padStart(2, '0');
    }

    public get formattedYear() {
        return this.year.toString();
    }

    public get monthName() {
        return DATE_PICKER_MONTH_NAMES[this.month];
    }

    private getWeight() {
        const { year, month, day } = this;
        return year * 365 + month * 30 + day;
    }
}
