// Heavily inspired by: https://material-ui.com/components/use-media-query/
import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';

import { useTheme } from '../../styling';
import { MatchBreakpointFunctionType } from './type';
import { BreakpointCodeType } from '../mixins/type';
import { getWindow } from '../util/getWindow';

const useBreakpoint = (
    code: BreakpointCodeType,
    matchFunction: MatchBreakpointFunctionType,
) => {
    const theme = useTheme();
    const value = theme.breakpoints.values[code];

    const win = getWindow();
    const [match, setMatch] = useState(
        !win ? false : matchFunction(value, win.innerWidth),
    );

    useEffect(() => {
        if (!win) {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return () => {};
        }

        const handler = throttle(100, ({ target }: UIEvent) => {
            if (target) {
                const width = (target as Window).innerWidth;
                setMatch(matchFunction(value, width));
            }
        });
        win.addEventListener('resize', handler);

        return () => {
            win.removeEventListener('resize', handler);
        };
    }, [code, theme, win]);

    if (!win) {
        return false;
    }

    return match;
};

export const useBreakpointUp = (code: BreakpointCodeType) =>
    useBreakpoint(code, (value, width) => width >= value);
export const useBreakpointDown = (code: BreakpointCodeType) =>
    useBreakpoint(code, (value, width) => width < value);
