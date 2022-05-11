import React, { forwardRef, memo } from 'react';

import { useIndicatorClassNames } from './hooks/useIndicatorClassNames';
import { IndicatorRoot } from './style';
import { IndicatorPropsType } from './type';
import { INDICATOR_CLASS_PREFIX } from './constants';

/**
 * # Indicator
 *
 * Used signify or draw user's attention
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/9288f3-indicator/b/39a126)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Indicator } from '@deliveryhero/armor';
 *
 * <Indicator />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Indicator = forwardRef<HTMLDivElement, IndicatorPropsType>(
    function Indicator({ className, ...restProps }, ref) {
        const classNameComponents = useIndicatorClassNames(
            INDICATOR_CLASS_PREFIX,
            className,
        );

        return (
            <IndicatorRoot
                {...restProps}
                className={classNameComponents.Root}
                ref={ref}
            />
        );
    },
);

Indicator.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Indicator.propTypes = {};

export const MemoizedIndicator = memo(Indicator);
