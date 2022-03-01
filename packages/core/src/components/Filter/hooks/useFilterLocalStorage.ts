import { useCallback, useMemo } from 'react';
import { getWindow, consoleWarn } from '@deliveryhero/armor-system';

import { FilterConditionValueElementOrGroupType } from '../type';
import { isFilterValueEmpty } from '../utils/isFilterValueEmpty';

const win = getWindow();

export const useFilterLocalStorage = <
    F extends FilterConditionValueElementOrGroupType,
>(
    filterId: string,
): [F | undefined, (newValue?: F) => void] => {
    const setValue = useCallback(
        (newValue?: F) => {
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
        [filterId],
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
    }, [filterId]);

    return [initialValue, setValue];
};
