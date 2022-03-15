import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useListClassNames } from './hooks/useListClassNames';
import { ListRoot } from './style';
import { ListPropsType } from './type';
import { LIST_CLASS_PREFIX } from './constants';

/**
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
