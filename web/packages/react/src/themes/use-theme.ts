import { useTheme as useThemeSC } from 'styled-components';
import { defaultTheme } from './default-theme';
import { ThemeType } from './type';

export const useTheme = () => (useThemeSC() as ThemeType) || defaultTheme;
