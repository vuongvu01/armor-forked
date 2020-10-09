import React, { FunctionComponent, forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useIndicatorClassNames, useIndicatorStylesOverride } from './utils';
import { IndicatorRoot } from './style';
import { IndicatorPropsType } from './type';
import { indicatorDefaultTheme } from './theme';
import { INDICATOR_CLASS_PREFIX } from './constants';

export const Indicator: FunctionComponent<IndicatorPropsType> = forwardRef(
    function Indicator({ className, classNames, styles, ...restProps }, ref) {
        const theme = useComponentTheme(
            INDICATOR_CLASS_PREFIX,
            indicatorDefaultTheme,
        );

        const classNameComponents = useIndicatorClassNames(
            INDICATOR_CLASS_PREFIX,
            className,
            classNames,
        );
        const stylesOverride = useIndicatorStylesOverride(styles);

        return (
            <IndicatorRoot
                {...restProps}
                theme={theme}
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
