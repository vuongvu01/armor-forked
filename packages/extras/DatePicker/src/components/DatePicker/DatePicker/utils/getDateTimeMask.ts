export const getDateTimeMask = (val: string, enableTimePicker: boolean) => {
    const digits = (val.match(/\d+/g) || []).join('');
    const alphabet = (val.match(/[a|p|m]/g) || []).join('');
    const days = digits.slice(0, 2).padEnd(2, 'D');
    const months = digits.slice(2, 4).padEnd(2, 'M');
    const years = digits.slice(4, 8).padEnd(4, 'Y');

    if (enableTimePicker) {
        const hours = digits.slice(8, 10).padEnd(2, 'H');
        const minutes = digits.slice(10, 12).padEnd(2, 'M');
        const mode = alphabet.slice(0, 2).padEnd(2, 'X');
        return `${days}.${months}.${years} ${hours}:${minutes} ${mode}`;
    }
    return `${days}.${months}.${years}`;
};
