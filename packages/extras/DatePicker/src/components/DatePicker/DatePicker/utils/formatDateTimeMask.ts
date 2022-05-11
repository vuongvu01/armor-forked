import {
    DATEPICKER_DATE_MASK_TIME_LENGTH,
    DATEPICKER_DATE_MASK_DEFAULT_LENGTH,
} from '../../constants';

export const formatDateTimeMask = (val: string, enableTimePicker: boolean) => {
    const digits = (val.match(/\d+/g) || []).join('');
    const alphabet = (val.match(/[a|p|m]/g) || []).join('');
    const maxLength = enableTimePicker
        ? DATEPICKER_DATE_MASK_TIME_LENGTH
        : DATEPICKER_DATE_MASK_DEFAULT_LENGTH;
    const chars = `${digits}${alphabet}`.split('');
    const result = chars
        .reduce((r, v, index) => {
            switch (true) {
                case index === 2 || index === 4: {
                    return `${r}.${v}`;
                }
                case index === 8 || index === 12: {
                    return `${r} ${v}`;
                }
                case index === 10: {
                    return `${r}:${v}`;
                }
                default:
                    return `${r}${v}`;
            }
        }, '')
        .substring(0, maxLength);
    return `${result}`;
};
