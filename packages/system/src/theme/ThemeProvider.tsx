import React, { FC } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';
import { DefaultGlobalStyle } from './DefaultGlobalStyle';
import { ThemeProviderPropsType } from './type';

export const ThemeProvider: FC<ThemeProviderPropsType> = ({
    children,
    disableGlobalStyle,
    ...restProps
}) => {
    return (
        <BaseThemeProvider {...restProps}>
            {!disableGlobalStyle && <DefaultGlobalStyle />}
            {children}
        </BaseThemeProvider>
    );
};
