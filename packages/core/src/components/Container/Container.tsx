import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';

import { useContainerClassNames } from './hooks/useContainerClassNames';
import { ContainerRoot } from './style';
import { ContainerPropsType } from './type';
import { CONTAINER_CLASS_PREFIX } from './constants';

/**
 * # Container
 *
 * Used to align the content in the center, and limits its width to a certain maximum value.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/62ac46-container/b/41ce23)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Container } from '@deliveryhero/armor';
 *
 * <Container maxWidth="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Container>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Container = forwardRef<HTMLDivElement, ContainerPropsType>(
    function Container({ className, children, ...restProps }, ref) {
        const classNameComponents = useContainerClassNames(
            CONTAINER_CLASS_PREFIX,
            className,
        );

        return (
            <ContainerRoot
                {...restProps}
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
