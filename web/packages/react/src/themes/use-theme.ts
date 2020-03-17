import { useTheme as useThemeSC } from 'styled-components';
import { defaultTheme } from './default-theme';
import { Theme } from './type';

export const useTheme = () => (useThemeSC() as Theme) || defaultTheme;
