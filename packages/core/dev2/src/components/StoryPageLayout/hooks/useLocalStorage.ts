import { useCallback, useMemo } from 'react';
import { getWindow } from '../../../util/getWindow';

const win = getWindow();

const FILTER_KEY = 'armor-dev';

export const useLocalStorage = (): [string, (newValue?: string) => void] => {
    const setValue = useCallback(
        (newValue?: string) => {
            if (!win) {
                return;
            }

            const { localStorage } = win;

            if (newValue === '') {
                localStorage.removeItem(FILTER_KEY);
            } else {
                localStorage.setItem(FILTER_KEY, newValue ?? '');
            }
        },
        [win],
    );

    const value = useMemo(() => {
        if (!win) {
            return '';
        }

        const { localStorage } = win;

        return localStorage.getItem(FILTER_KEY) ?? '';
    }, [win]);

    return [value, setValue];
};
