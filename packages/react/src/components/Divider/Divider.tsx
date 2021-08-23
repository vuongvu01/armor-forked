import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useDividerClassNames } from './hooks/useDividerClassNames';
import { useDivider } from './hooks/useDivider';
import { DividerRoot } from './style';
import { DividerPropsType } from './type';
import { DIVIDER_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../utils/hooks';

/**
 * @armor-docs-component
 */
export const Divider = forwardRef<HTMLDivElement, DividerPropsType>(
    function Divider({ className, children, ...props }, ref) {
        const theme = useComponentTheme(DIVIDER_CLASS_PREFIX);
        const classNames = useDividerClassNames(
            DIVIDER_CLASS_PREFIX,
            className,
            props,
        );

        const { rootProps } = useDivider<HTMLDivElement>(props, ref);

        return (
            <DividerRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
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
