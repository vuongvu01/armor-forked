import React, { FunctionComponent, forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useIndicatorClassNames } from './utils/useIndicatorClassNames';
import { IndicatorRoot } from './style';
import { IndicatorPropsType } from './type';
import { indicatorDefaultTheme } from './theme';
import { INDICATOR_CLASS_PREFIX } from './constants';

export const Indicator: FunctionComponent<IndicatorPropsType> = forwardRef(
    function Indicator({ className, ...restProps }, ref) {
        const theme = useComponentTheme(
            INDICATOR_CLASS_PREFIX,
            indicatorDefaultTheme,
        );

        const classNameComponents = useIndicatorClassNames(
            INDICATOR_CLASS_PREFIX,
            className,
        );

        return (
            <IndicatorRoot
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            />
        );
    },
);

Indicator.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Indicator.propTypes = {};
