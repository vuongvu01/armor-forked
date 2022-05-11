import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useListClassNames } from './hooks/useListClassNames';
import { ListRoot } from './style';
import { ListPropsType } from './type';
import { LIST_CLASS_PREFIX } from './constants';

/**
 * # List
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/220cd6-list/b/76988e)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { List, ListItem } from '@deliveryhero/armor';
 *
 * <List>
 *     <ListItem enableSecondaryItem={false}>Primary Only</ListItem>
 *     <ListItem secondaryItemText='Secondary Text'>Primary and Secondary</ListItem>
 *     <ListItem divider={true} secondaryItemText='Secondary Text'>With divider</ListItem>
 *     <ListItem disabled={true} secondaryItemText='Secondary Text'>Disabled</ListItem>
 * </List>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const List = forwardRef<HTMLDivElement, ListPropsType>(function List(
    { className, ...restProps },
    ref,
) {
    const classNameComponents = useListClassNames(LIST_CLASS_PREFIX, className);

    return (
        <ListRoot
            {...restProps}
            className={classNameComponents.Root}
            ref={ref}
        />
    );
});

List.defaultProps = {
    small: false,
};

/** prop-types are required here for run-time checks */
List.propTypes = {
    small: PropTypes.bool,
};

export const MemoizedList = memo(List);
