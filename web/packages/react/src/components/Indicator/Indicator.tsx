import React, { FunctionComponent, forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';

import { useIndicatorClassNames, useIndicatorStylesOverride } from './utils';
import { IndicatorRoot } from './style';
import { IndicatorPropsType } from './type';
import { indicatorDefaultTheme } from './theme';

const CLASS_PREFIX = 'Indicator';

export const Indicator: FunctionComponent<IndicatorPropsType> = forwardRef(
    function Indicator({ className, classNames, styles, ...restProps }, ref) {
        const theme = useTheme();
        useThemeOverride(CLASS_PREFIX, theme, indicatorDefaultTheme);

        const classNameComponents = useIndicatorClassNames(
            CLASS_PREFIX,
            className,
            classNames,
        );
        const stylesOverride = useIndicatorStylesOverride(styles);

        return (
            <IndicatorRoot
                theme={theme}
                {...restProps}
                className={classNameComponents.Root}
                styles={stylesOverride.Root}
                ref={ref}
            />
        );
    },
);

Indicator.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Indicator.propTypes = {};
