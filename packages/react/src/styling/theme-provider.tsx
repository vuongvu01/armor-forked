import React, { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { RootThemeType } from './type';

export const ThemeProvider = ({
    children,
    theme,
}: {
    children: ReactNode;
    theme: RootThemeType;
}) => (
    <StyledComponentsThemeProvider theme={theme}>
        <>{children}</>
    </StyledComponentsThemeProvider>
);
