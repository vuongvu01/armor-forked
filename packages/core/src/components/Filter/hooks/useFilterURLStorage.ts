import { useCallback, useMemo } from 'react';
import queryString from 'query-string';
import { consoleWarn, getWindow } from '@deliveryhero/armor-system';

import { FilterConditionValueType } from '../type';
import { isFilterValueEmpty } from '../utils/isFilterValueEmpty';

const win = getWindow();

export const useFilterURLStorage = <F extends FilterConditionValueType>(
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

            const { location } = win;

            let serializedQuery = '';
            if (isFilterValueEmpty(newValue)) {
                serializedQuery = queryString.exclude(`?${location.search}`, [
                    filterId,
                ]);
            } else {
                serializedQuery = queryString.stringifyUrl({
                    url: `?${location.search}`,
                    query: { [filterId]: JSON.stringify(newValue) },
                });
            }

            win.history.replaceState({}, '', serializedQuery || '?');
        },
        [filterId],
    );

    const initialValue = useMemo(() => {
        if (!win) {
            return undefined;
        }

        let result: F | undefined;
        const parsedQuery = queryString.parseUrl(win.location.href).query;
        try {
            const serializedValue = parsedQuery[filterId] as string;
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
