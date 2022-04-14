import React, { forwardRef } from 'react';

import { useTableBodyClassNames } from './hooks/useTableBodyClassNames';
import { TableBodyRoot } from './style';
import { TableBodyPropsType } from './type';
import { tableBodyRootTestId, TABLE_BODY_CLASS_PREFIX } from './constants';

/**
 * # TableBody
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
