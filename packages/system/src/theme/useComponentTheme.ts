import { ThemeType, useTheme } from './index';

/**
 * @deprecated
 */
export const useComponentTheme = (classPrefix: string): ThemeType => {
    const theme = useTheme();

    return theme.armor as ThemeType;
};
