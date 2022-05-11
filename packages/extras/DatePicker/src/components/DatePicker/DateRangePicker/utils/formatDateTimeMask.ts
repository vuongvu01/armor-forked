import { DATERANGEPICKER_DATE_MASK_LENGTH } from '../constants';

export const formatDateTimeMask = (val: string) => {
    const digits = (val.match(/\d+/g) || []).join('');
    const maxLength = DATERANGEPICKER_DATE_MASK_LENGTH;
    const chars = digits.split('');
    const result = chars
        .reduce((r, v, index) => {
            if (index === 2 || index === 4 || index === 10 || index === 12) {
                return `${r}.${v}`;
            }
            if (index === 8) {
                return `${r} - ${v}`;
            }
            return `${r}${v}`;
        }, '')
        .substring(0, maxLength);
    return `${result}`;
};
