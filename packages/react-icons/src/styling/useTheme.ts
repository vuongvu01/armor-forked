import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultTheme } from './themes';

import { ThemeType } from './type';

const useThemeSC = () => useContext(ThemeContext);
export const useTheme = (theme?: ThemeType) =>
    theme || (useThemeSC() as ThemeType) || defaultTheme;
