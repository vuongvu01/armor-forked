import { useMemo } from 'react';

/**
 * Use this helper to return a sort function which will be used in Array.prototype.sort()
 * @param {string} key - the property you want to compare between each element
 * @returns - a sort function
 */
export function sortBy(key: string) {
    return (
        optionA: { [prop: string]: any },
        optionB: { [prop: string]: any },
    ): number => {
        if (typeof optionA[key] === 'string') {
            return (optionA[key] || '').localeCompare(optionB[key] || '');
        }

        if (typeof optionA[key] === 'number') {
            if (optionA[key] > optionB[key]) return 1;
            if (optionA[key] < optionB[key]) return -1;
            return 0;
        }

        return 0;
    };
}

export function useSortedList<T>(list: T[], key: string): T[] {
    const sortedList = useMemo(() => list.sort(sortBy(key)), [list, key]);

    return sortedList;
}
