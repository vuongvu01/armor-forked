import React, { forwardRef } from 'react';

import { useTableBodyClassNames } from './hooks/useTableBodyClassNames';
import { TableBodyRoot } from './style';
import { TableBodyPropsType } from './type';
import { tableBodyRootTestId, TABLE_BODY_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const TableBody = forwardRef<
    HTMLTableSectionElement,
    TableBodyPropsType
>(function TableBody({ className, ...restProps }, ref) {
    const classNameComponents = useTableBodyClassNames(
        TABLE_BODY_CLASS_PREFIX,
        className,
    );

    return (
        <TableBodyRoot
            data-testid={tableBodyRootTestId}
            {...restProps}
            className={classNameComponents.Root}
            ref={ref}
        />
    );
});

TableBody.defaultProps = {};

/** prop-types are required here for run-time checks */
TableBody.propTypes = {};
