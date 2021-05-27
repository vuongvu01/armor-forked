import { useCallback, useMemo } from 'react';
import { FilterConditionValueType } from '../type';
import { getWindow } from '../../../system/util/globals';
import { consoleWarn } from '../../../system/util/consoleWarn';
import { isFilterValueEmpty } from '../utils/isFilterValueEmpty';

const win = getWindow();

export const useFilterLocalStorage = <F extends FilterConditionValueType>(
    filterId: string,
) => {
    const setValue = useCallback(
        (newValue: F) => {
            if (!win) {
                return;
            }
            if (!filterId) {
                consoleWarn('You should submit the filterId parameter');
                return;
            }

            const { localStorage } = win;
            const filterKey = `filter:${filterId}`;

            if (isFilterValueEmpty(newValue)) {
                localStorage.removeItem(filterKey);
            } else {
                localStorage.setItem(filterKey, JSON.stringify(newValue));
            }
        },
        [win, filterId],
    );

    const initialValue = useMemo(() => {
        if (!win) {
            return undefined;
        }

        const { localStorage } = win;

        let result: F | undefined;
        const serializedValue = localStorage.getItem(`filter:${filterId}`);
        try {
            if (serializedValue) {
                result = JSON.parse(serializedValue);
            }
        } catch (error) {
            // do nothing
        }

        return result;
    }, [win]);

    return [initialValue, setValue];
};
