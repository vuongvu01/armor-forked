import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultTheme } from './themes';

import { RootThemeType } from './type';

const useThemeSC = () => useContext<RootThemeType>(ThemeContext);
export const useTheme = (theme?: RootThemeType) => {
    const scTheme = useThemeSC() as RootThemeType;

    if (theme) {
        return theme;
    }
    if (scTheme) {
        return scTheme;
    }

    return defaultTheme;
};
