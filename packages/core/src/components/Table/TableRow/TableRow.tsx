import React, { forwardRef } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useTableRowClassNames } from './hooks/useTableRowClassNames';
import { TableRowRoot } from './style';
import { TableRowPropsType } from './type';
import { tableRowRootTestId, TABLE_ROW_CLASS_PREFIX } from './constants';
import { useTableRow } from './hooks/useTableRow';
import { TableRowCells } from './TableRowCells';

/**
 * @armor-docs-component
 */
export const TableRow = forwardRef<HTMLTableRowElement, TableRowPropsType>(
    function TableRow({ className, children, ...restProps }, ref) {
        const theme = useComponentTheme(TABLE_ROW_CLASS_PREFIX);

        const { rootProps, cellsProps, isHovered } = useTableRow(restProps);

        const classNameComponents = useTableRowClassNames(
            TABLE_ROW_CLASS_PREFIX,
            className,
            isHovered,
        );

        return (
            <TableRowRoot
                {...rootProps}
                data-testid={tableRowRootTestId}
                className={classNameComponents.Root}
                theme={theme}
                ref={ref}
            >
                <TableRowCells {...cellsProps}>{children}</TableRowCells>
            </TableRowRoot>
        );
    },
);

TableRow.defaultProps = {
    enableStickyTop: true,
    enableStickyColumns: true,
};

/** prop-types are required here for run-time checks */
TableRow.propTypes = {};
