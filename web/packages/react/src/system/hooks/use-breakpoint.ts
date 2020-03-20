// Heavily inspired by: https://material-ui.com/components/use-media-query/

import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { BreakpointCode } from '../mixins/type';
import { useTheme } from '../../themes';
import { MatchBreakpointFunctionType } from './type';

const useBreakpoint = (
    code: BreakpointCode,
    matchFunction: MatchBreakpointFunctionType,
) => {
    const theme = useTheme();
    const value = theme.breakpoints.values[code];

    const [match, setMatch] = useState(
        typeof window === 'undefined'
            ? false
            : matchFunction(value, window.innerWidth),
    );

    useEffect(() => {
        if (typeof window === 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return () => {};
        }

        const handler = throttle(100, ({ target }: UIEvent) => {
            if (target) {
                const width = (target as Window).innerWidth;
                setMatch(matchFunction(value, width));
            }
        });
        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        };
    }, [code, theme]);

    if (typeof window === 'undefined') {
        return false;
    }

    return match;
};

export const useBreakpointUp = (code: BreakpointCode) =>
    useBreakpoint(code, (value, width) => width >= value);
export const useBreakpointDown = (code: BreakpointCode) =>
    useBreakpoint(code, (value, width) => width < value);
