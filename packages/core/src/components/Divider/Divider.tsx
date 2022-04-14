import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useDividerClassNames } from './hooks/useDividerClassNames';
import { useDivider } from './hooks/useDivider';
import { DividerRoot } from './style';
import { DividerPropsType } from './type';
import { DIVIDER_CLASS_PREFIX } from './constants';

/**
 * # Divider
 *
 * Dividers should only be used where the user needs to see a clear definition between two content of a page.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/7809b7-dividers/b/219d6b)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Divider } from '@deliveryhero/armor';
 *
 * <Divider
 *     marginTop={10}
 *     marginBottom={10}
 *     marginLeft={10}
 *     marginRight={10}
 * />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Divider = forwardRef<HTMLDivElement, DividerPropsType>(
    function Divider({ className, children, ...props }, ref) {
        const classNames = useDividerClassNames(
            DIVIDER_CLASS_PREFIX,
            className,
            props,
        );

        const { rootProps } = useDivider<HTMLDivElement>(props, ref);

        return (
            <DividerRoot {...rootProps} className={classNames.Root}>
                {children}
            </DividerRoot>
        );
    },
);

Divider.defaultProps = {
    horizontal: true,
};

/** prop-types are required here for run-time checks */
Divider.propTypes = {
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
};
