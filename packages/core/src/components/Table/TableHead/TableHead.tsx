import React, { forwardRef, memo } from 'react';

import { TableSectionContext } from '../utils/TableSectionContext';

import { useTableHeadClassNames } from './hooks/useTableHeadClassNames';
import { TableHeadRoot } from './style';
import { TableHeadPropsType } from './type';
import { tableHeadRootTestId, TABLE_HEAD_CLASS_PREFIX } from './constants';
import { useTableHead } from './hooks/useTableHead';

/**
 * # TableHead
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
export const TableHead = forwardRef<
    HTMLTableSectionElement,
    TableHeadPropsType
>(function TableHead({ className, ...restProps }, ref) {
    const classNameComponents = useTableHeadClassNames(
        TABLE_HEAD_CLASS_PREFIX,
        className,
    );

    const { tableSectionContextValue, rootReference } = useTableHead({}, ref);

    return (
        <TableSectionContext.Provider value={tableSectionContextValue}>
            <TableHeadRoot
                data-testid={tableHeadRootTestId}
                {...restProps}
                className={classNameComponents.Root}
                ref={rootReference}
            />
        </TableSectionContext.Provider>
    );
});

TableHead.defaultProps = {};

/** prop-types are required here for run-time checks */
TableHead.propTypes = {};

export const MemoizedTableHead = memo(TableHead);
