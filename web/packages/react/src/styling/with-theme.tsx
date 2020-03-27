import React, { ComponentType, Ref, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultTheme } from './themes/default';

export const withTheme = (
    Component: ComponentType<{ theme: any; ref: Ref<unknown> }>,
) => {
    const WithTheme = React.forwardRef((props, ref) => {
        const theme = useContext(ThemeContext) || defaultTheme;

        return <Component {...props} theme={theme} ref={ref} />;
    });

    WithTheme.displayName = `withTheme(${Component.displayName ||
        Component.name ||
        'Component'})`;

    return WithTheme;
};
