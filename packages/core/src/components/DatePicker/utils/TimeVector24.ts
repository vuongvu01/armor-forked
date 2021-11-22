import { DATE_PICKER_MODE_AM, DATE_PICKER_MODE_PM } from '../constants';
import { TimeVector12, TimeVector12ModeType } from './TimeVector12';
import { DateVector } from './DateVector';

export class TimeVector24 {
    public static createFromDateVector(dateVector: DateVector) {
        return new this(dateVector.hour, dateVector.minute);
    }

    constructor(public hour: number = 0, public minute: number = 0) {}

    public convertTo12() {
        const { hour, minute } = this;

        let resultHour = hour;
        let mode: TimeVector12ModeType = DATE_PICKER_MODE_AM;

        if (hour === 0) {
            resultHour = 12;
        } else if (hour === 12) {
            mode = DATE_PICKER_MODE_PM;
        } else if (hour > 12 && hour <= 23) {
            resultHour = hour - 12;
            mode = DATE_PICKER_MODE_PM;
        }

        return new TimeVector12(resultHour, minute, mode);
    }

    public toJSON() {
        const { hour, minute } = this;
        return {
            hour,
            minute,
        };
    }
}
