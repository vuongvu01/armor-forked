import React, { FC } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { RootThemeType } from './type';

export const ThemeProvider: FC<React.PropsWithChildren<{
    theme: RootThemeType;
}>> = ({ children, theme }) => (
    <StyledComponentsThemeProvider theme={theme}>
        <>{children}</>
    </StyledComponentsThemeProvider>
);
