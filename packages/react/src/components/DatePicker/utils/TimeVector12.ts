import { DATE_PICKER_MODE_AM } from '../constants';
import { TimeVector24 } from './TimeVector24';

export type TimeVector12ModeType = 'am' | 'pm';
type TimeVectorStructureType = {
    hour: number;
    minute: number;
    mode: TimeVector12ModeType;
};

export class TimeVector12 {
    constructor(
        public hour: number = 0,
        public minute: number = 0,
        public mode: TimeVector12ModeType = 'am',
    ) {}

    public convertTo24() {
        const { hour, minute, mode } = this;

        let resultHour = hour;
        if (mode === DATE_PICKER_MODE_AM) {
            if (hour === 12) {
                resultHour = 0;
            }
        } else {
            if (hour !== 12) {
                resultHour = 12 + hour;
            }
        }

        return new TimeVector24(resultHour, minute);
    }

    public toJSON() {
        const { hour, minute, mode } = this;
        return {
            hour,
            minute,
            mode,
        };
    }

    public get formattedHour() {
        return this.hour.toString();
    }

    public get formattedMinute() {
        return this.minute.toString().padStart(2, '0');
    }

    public clone({
        hour,
        minute,
        mode,
    }: Partial<TimeVectorStructureType> = {}) {
        return new TimeVector12(
            hour === undefined ? this.hour : hour,
            minute === undefined ? this.minute : minute,
            mode === undefined ? this.mode : mode,
        );
    }
}
