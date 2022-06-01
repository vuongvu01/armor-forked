import { ScalarType } from '../type';
import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

const spacingCache = new Map<ScalarType, ScalarType>();

export const spacing =
    (...input: ScalarType[]) =>
    ({ theme }: PropsWithThemeType): string => {
        const { spacing: baseSpacing } = getAvailableTheme(theme);

        const transformValue = (value: ScalarType = 1) => {
            if (spacingCache.has(value)) {
                return spacingCache.get(value);
            }

            const result = value === 0 ? 0 : baseSpacing(value);

            spacingCache.set(value, result);

            return result;
        };

        return input.map(transformValue).join(' ');
    };

export const spacingBreakpoint =
    (value: ScalarType) =>
    ({ theme }: PropsWithThemeType): ScalarType => {
        const currentTheme = getAvailableTheme(theme);

        return currentTheme.breakpoints.mapCodeToValue(
            value,
            currentTheme.spacing,
        );
    };
