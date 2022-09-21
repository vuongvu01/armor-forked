import { DATE_PICKER_MONTH_NAMES } from '../constants';
import { DateVectorStructureType, DateVectorMetaParams } from './type';

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

    public static createFromMetaString(
        meta: string,
        { currentDateVector }: DateVectorMetaParams,
    ) {
        const match = meta.trim().match(/current(([+-])(\d+))?/);
        if (match && currentDateVector) {
            const [, , op, amount] = match;
            const result = currentDateVector.clone();
            if (amount && op === '+') {
                result.addDay(parseInt(amount, 10));
            }
            if (amount && op === '-') {
                result.addDay(parseInt(amount, 10) * -1);
            }

            return result;
        }

        return null;
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

    public isGreaterThanOrEqual(vector?: DateVector | null) {
        if (!vector) {
            return false;
        }

        return this.getWeight() >= vector.getWeight();
    }

    public isSmallerThanOrEqual(vector?: DateVector | null) {
        if (!vector) {
            return false;
        }

        return this.getWeight() <= vector.getWeight();
    }

    // todo: this method only check equality down to days, so technically the naming is incorrect
    // todo: rename
    public isEqualTo = (vector?: DateVector | null) => {
        if (!vector) {
            return false;
        }

        const { month, day, year } = this;

        return (
            month === vector.month && day === vector.day && year === vector.year
        );
    };

    // todo: this method not only adds amount of months, but also resets the day to 1
    // todo: therefore, the naming is not entirely correct
    // todo: rename
    // todo: also, the method mutates the object, which is not good
    public addMonth(amount = 0) {
        const { date } = this;
        date.setUTCDate(1);
        date.setUTCMonth(date.getUTCMonth() + amount);
    }

    // todo: this method mutates the object, which is not good
    public addDay(amount = 0) {
        const { date } = this;
        date.setUTCDate(date.getUTCDate() + amount);
    }

    // todo: this method mutates the object, which is not good
    public addMinute(amount = 0) {
        const { date } = this;
        date.setUTCMinutes(date.getUTCMinutes() + amount);
    }

    // todo: this method mutates the object, which is not good
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

    public toString() {
        return `${this.formattedDay}.${this.formattedMonth}.${this.formattedYear} ${this.formattedHour}:${this.formattedMinute}:00`;
    }

    private getWeight() {
        const { year, month, day } = this;
        return new Date(year, month, day).getTime(); // get rid of time different when comparing dates
    }
}
