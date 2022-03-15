import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { PrimaryIconWrapperRoot } from './style';
import { PrimaryIconWrapperPropsType } from './type';
import { PRIMARY_ICON_WRAPPER_CLASS_PREFIX } from './constants';
import { usePrimaryIconWrapperClassNames } from './hooks/usePrimaryIconWrapperClassNames';

export const PrimaryIconWrapper = forwardRef<
    HTMLDivElement,
    PrimaryIconWrapperPropsType
>(function PrimaryIconWrapper({ className, children, ...restProps }, ref) {
    const classNameComponents = usePrimaryIconWrapperClassNames(
        PRIMARY_ICON_WRAPPER_CLASS_PREFIX,
        className,
    );

    return (
        <PrimaryIconWrapperRoot
            {...restProps}
            className={classNameComponents.Root}
            ref={ref}
        >
            {children}
        </PrimaryIconWrapperRoot>
    );
});

PrimaryIconWrapper.defaultProps = {
    disabled: false,
};

/** prop-types are required here for run-time checks */
PrimaryIconWrapper.propTypes = {
    disabled: PropTypes.bool,
};
