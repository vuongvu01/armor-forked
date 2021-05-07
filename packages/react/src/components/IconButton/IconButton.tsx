import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useIconButtonClassNames } from './hooks/useIconButtonClassNames';
import { IconButtonRoot } from './style';
import { IconButtonPropsType } from './type';
import { ICON_BUTTON_CLASS_PREFIX } from './constants';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonPropsType>(
    function IconButton({ className, ...restProps }, ref) {
        const theme = useComponentTheme(ICON_BUTTON_CLASS_PREFIX);
        const classNameComponents = useIconButtonClassNames(
            ICON_BUTTON_CLASS_PREFIX,
            className,
        );

        return (
            <IconButtonRoot
                {...restProps}
                theme={theme}
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
