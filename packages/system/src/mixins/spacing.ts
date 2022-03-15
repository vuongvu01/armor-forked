import { ScalarType } from '../type';
import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

export const spacing =
    (value: ScalarType = 1) =>
    ({ theme }: PropsWithThemeType): ScalarType =>
        getAvailableTheme(theme).spacing(value);

export const spacingBreakpoint =
    (value: ScalarType) =>
    ({ theme }: PropsWithThemeType): ScalarType => {
        const currentTheme = getAvailableTheme(theme);

        return currentTheme.breakpoints.mapCodeToValue(
            value,
            currentTheme.spacing,
        );
    };
