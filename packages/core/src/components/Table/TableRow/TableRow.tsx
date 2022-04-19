import React, { forwardRef } from 'react';

import { useTableRowClassNames } from './hooks/useTableRowClassNames';
import { TableRowRoot } from './style';
import { TableRowPropsType } from './type';
import { tableRowRootTestId, TABLE_ROW_CLASS_PREFIX } from './constants';
import { useTableRow } from './hooks/useTableRow';
import { TableRowCells } from './TableRowCells';

/**
 * # TableRow
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/21c7b5-table/b/527bb6)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import {
 *     Table,
 *     TableHead,
 *     TableBody,
 *     TableRow,
 *     TableCell,
 * } from '@deliveryhero/armor';
 *
 * <Table>
 *     <TableHead>
 *         <TableRow>
 *             <TableCell>Food Companies</TableCell>
 *             <TableCell>Scheme ID</TableCell>
 *         </TableRow>
 *     </TableHead>
 *     <TableBody>
 *         <TableRow>
 *             <TableCell>Kitchen Garden POS</TableCell>
 *             <TableCell>Scheme B</TableCell>
 *         </TableRow>
 *         <TableRow>
 *             <TableCell>KFC HK</TableCell>
 *             <TableCell>Scheme F</TableCell>
 *         </TableRow>
 *     </TableBody>
 * </Table>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const TableRow = forwardRef<HTMLTableRowElement, TableRowPropsType>(
    function TableRow({ className, children, ...restProps }, ref) {
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
