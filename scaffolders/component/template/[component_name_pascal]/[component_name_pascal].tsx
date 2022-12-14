import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { use<%- component_name_pascal %>ClassNames } from './hooks/use<%- component_name_pascal %>ClassNames';
import { use<%- component_name_pascal %> } from './hooks/use<%- component_name_pascal %>';
import { <%- component_name_pascal %>Root } from './style';
import { <%- component_name_pascal %>PropsType } from './type';
import {
    <%- component_name_snake_uc %>_CLASS_PREFIX,
} from './constants';

/**
 * # <%- component_name_pascal %>
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/XXXXX/b/YYYYYYY)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { <%- component_name_pascal %> } from '@deliveryhero/armor';
 *
 * <<%- component_name_pascal %> />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const <%- component_name_pascal %> = forwardRef<
    HTMLDivElement,
    <%- component_name_pascal %>PropsType
>(function <%- component_name_pascal %>(
    props,
    ref,
){
    const {
        className,
        children,
        ...restProps
    } = props

    const classNames = use<%- component_name_pascal %>ClassNames(
        <%- component_name_snake_uc %>_CLASS_PREFIX,
        className,
    );

    const { rootProps } = use<%- component_name_pascal %><HTMLDivElement>(restProps, ref);

    return (
        <<%- component_name_pascal %>Root
            {...rootProps}
            className={classNames.Root}
        >
            {children}
        </<%- component_name_pascal %>Root>
    );
});

<%- component_name_pascal %>.defaultProps = {
    // TODO: add default props and remove comment
};

/** prop-types are required here for run-time checks */
<%- component_name_pascal %>.propTypes = {
    // TODO: add prop-types and remove comment
};

<%- component_name_pascal %>.displayName = '<%- component_name_pascal %>';

export const Memoized<%- component_name_pascal %> = memo(<%- component_name_pascal %>);
