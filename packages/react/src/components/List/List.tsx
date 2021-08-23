import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

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
    const theme = useComponentTheme(LIST_CLASS_PREFIX);
    const classNameComponents = useListClassNames(LIST_CLASS_PREFIX, className);

    return (
        <ListRoot
            {...restProps}
            theme={theme}
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
