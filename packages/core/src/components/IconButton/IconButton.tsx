import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useIconButtonClassNames } from './hooks/useIconButtonClassNames';
import { IconButtonRoot } from './style';
import { IconButtonPropsType } from './type';
import { ICON_BUTTON_CLASS_PREFIX } from './constants';

/**
 * # IconButton
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/43fdf6-icon-button/b/694dd6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { IconButton } from '@deliveryhero/armor';
 * import { ArrowUpIcon } from '@deliveryhero/armor-icons';
 *
 * <IconButton>
 *     <ArrowUpIcon medium />
 * </IconButton>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonPropsType>(
    function IconButton({ className, ...restProps }, ref) {
        const classNameComponents = useIconButtonClassNames(
            ICON_BUTTON_CLASS_PREFIX,
            className,
        );

        return (
            <IconButtonRoot
                {...restProps}
                className={classNameComponents.Root}
                ref={ref}
            />
        );
    },
);

IconButton.defaultProps = {
    light: false,
};

/** prop-types are required here for run-time checks */
IconButton.propTypes = {
    light: PropTypes.bool,
};
