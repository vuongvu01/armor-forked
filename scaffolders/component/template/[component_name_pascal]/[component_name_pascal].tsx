import React, { FC, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../styling';
import { use<%- component_name_pascal %>ClassNames } from './hooks/use<%- component_name_pascal %>ClassNames';
import { use<%- component_name_pascal %> } from './hooks/use<%- component_name_pascal %>';
import { <%- component_name_pascal %>Root } from './style';
import { <%- component_name_pascal %>PropsType } from './type';
import {
    <%- component_name_snake_uc %>_CLASS_PREFIX,
} from './constants';
import { useComponentTheme } from '../../../utils/hooks';

export const <%- component_name_pascal %>: FC<<%- component_name_pascal %>PropsType> = forwardRef(
    function <%- component_name_pascal %>(
        {
            className,
            children,
            ...props
        },
        ref,
    ){
        const theme = useComponentTheme(<%- component_name_snake_uc %>_CLASS_PREFIX);
        const classNameComponents = use<%- component_name_pascal %>ClassNames(
            <%- component_name_snake_uc %>_CLASS_PREFIX,
            className,
        );

        const { rootProps } = use<%- component_name_pascal %>(props, ref);

        return (
            <<%- component_name_pascal %>Root
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                {children}
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
