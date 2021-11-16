import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useContainerClassNames } from './hooks/useContainerClassNames';
import { ContainerRoot } from './style';
import { ContainerPropsType } from './type';
import { CONTAINER_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const Container = forwardRef<HTMLDivElement, ContainerPropsType>(
    function Container({ className, children, ...restProps }, ref) {
        const theme = useComponentTheme(CONTAINER_CLASS_PREFIX);
        const classNameComponents = useContainerClassNames(
            CONTAINER_CLASS_PREFIX,
            className,
        );

        return (
            <ContainerRoot
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            >
                {children}
            </ContainerRoot>
        );
    },
);

Container.defaultProps = {};

/** prop-types are required here for run-time checks */
Container.propTypes = {};
