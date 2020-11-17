import React, { FunctionComponent, forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useContainerClassNames } from './utils/useContainerClassNames';
import { ContainerRoot } from './style';
import { ContainerPropsType } from './type';
import { CONTAINER_CLASS_PREFIX } from './constants';

export const Container: FunctionComponent<ContainerPropsType> = forwardRef(
    function Container({ className, classNames, children, ...restProps }, ref) {
        const theme = useComponentTheme(CONTAINER_CLASS_PREFIX);
        const classNameComponents = useContainerClassNames(
            CONTAINER_CLASS_PREFIX,
            className,
            classNames,
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
