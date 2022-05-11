export const getDateTimeMask = (val: string) => {
    const digits = (val.match(/\d+/g) || []).join('');
    const dayStart = digits.slice(0, 2).padEnd(2, 'D');
    const monthStart = digits.slice(2, 4).padEnd(2, 'M');
    const yearStart = digits.slice(4, 8).padEnd(4, 'Y');

    const dayEnd = digits.slice(8, 10).padEnd(2, 'D');
    const monthEnd = digits.slice(10, 12).padEnd(2, 'M');
    const yearEnd = digits.slice(12, 16).padEnd(4, 'Y');

    return `${dayStart}.${monthStart}.${yearStart} - ${dayEnd}.${monthEnd}.${yearEnd}`;
};
