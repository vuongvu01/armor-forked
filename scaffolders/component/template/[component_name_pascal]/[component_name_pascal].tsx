import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { use<%- component_name_pascal %>ClassNames } from './utils/use<%- component_name_pascal %>ClassNames';
import { use<%- component_name_pascal %> } from './utils/use<%- component_name_pascal %>';
import { <%- component_name_pascal %>Root, <%- component_name_pascal %>SubNode } from './style';
import { <%- component_name_pascal %>PropsType } from './type';
import {
    <%- component_name_snake_uc %>_CLASS_PREFIX,
} from './constants';

export const <%- component_name_pascal %>: FunctionComponent<<%- component_name_pascal %>PropsType> = forwardRef(
    function <%- component_name_pascal %>(
        {
            className,
            children,
            ...restProps
        },
        ref,
    ){
        const theme = useComponentTheme(<%- component_name_snake_uc %>_CLASS_PREFIX);
        const classNameComponents = use<%- component_name_pascal %>ClassNames(
            <%- component_name_snake_uc %>_CLASS_PREFIX,
            className,
        );

        const { rootProps, subNodeProps } = use<%- component_name_pascal %>(restProps);

        return (
            <<%- component_name_pascal %>Root
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            >
                <<%- component_name_pascal %>SubNode
                    theme={theme}
                    className={classNameComponents.SubNode}
                    {...subNodeProps}
                >
                    {children}
                </<%- component_name_pascal %>SubNode>
            </<%- component_name_pascal %>Root>
        );
    },
);

<%- component_name_pascal %>.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
<%- component_name_pascal %>.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
