import React, { forwardRef } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useIndicatorClassNames } from './hooks/useIndicatorClassNames';
import { IndicatorRoot } from './style';
import { IndicatorPropsType } from './type';
import { INDICATOR_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const Indicator = forwardRef<HTMLDivElement, IndicatorPropsType>(
    function Indicator({ className, ...restProps }, ref) {
        const theme = useComponentTheme(INDICATOR_CLASS_PREFIX);

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
