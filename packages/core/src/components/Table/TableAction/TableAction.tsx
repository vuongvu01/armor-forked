import React, { forwardRef } from 'react';

import { useTableActionClassNames } from './hooks/useTableActionClassNames';
import { TableActionRoot } from './style';
import { TableActionPropsType } from './type';
import { tableActionRootTestId, TABLE_ACTION_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const TableAction = forwardRef<HTMLDivElement, TableActionPropsType>(
    function TableAction({ className, ...restProps }, ref) {
        const classNameComponents = useTableActionClassNames(
            TABLE_ACTION_CLASS_PREFIX,
            className,
        );

        return (
            <TableActionRoot
                data-testid={tableActionRootTestId}
                {...restProps}
                className={classNameComponents.Root}
                ref={ref}
            />
        );
    },
);

TableAction.defaultProps = {};

/** prop-types are required here for run-time checks */
TableAction.propTypes = {};
