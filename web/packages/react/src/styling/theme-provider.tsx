import React, { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeType } from './type';

export const ThemeProvider = ({
    children,
    theme,
}: {
    children: ReactNode;
    theme: ThemeType;
}) => (
    <StyledComponentsThemeProvider theme={theme}>
        <>{children}</>
    </StyledComponentsThemeProvider>
);
