import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useTableClassNames } from './hooks/useTableClassNames';
import { TableRoot } from './style';
import { TablePropsType } from './type';
import { tableRootTestId, TABLE_CLASS_PREFIX } from './constants';
import { TableContext } from './utils/TableContext';
import { useTable } from './hooks/useTable';

/**
 * # Table
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
export const Table = forwardRef<HTMLTableElement, TablePropsType>(
    function Table(
        { className, stickyColumns, stickyHead, ...restProps },
        ref,
    ) {
        const classNameComponents = useTableClassNames(
            TABLE_CLASS_PREFIX,
            className,
        );

        const { tableContextValue, rootReference, onLayoutUpdate } = useTable(
            {
                stickyColumns,
                stickyHead,
            },
            ref,
        );

        return (
            <TableContext.Provider value={tableContextValue}>
                <TableRoot
                    data-testid={tableRootTestId}
                    {...restProps}
                    className={classNameComponents.Root}
                    ref={rootReference}
                    cellPadding="0"
                    cellSpacing="0"
                    onScroll={onLayoutUpdate}
                />
            </TableContext.Provider>
        );
    },
);

Table.defaultProps = {
    horizontalScroll: false,
    stickyHead: false,
    enableFixedLayout: true,
};

/** prop-types are required here for run-time checks */
Table.propTypes = {
    horizontalScroll: PropTypes.bool,
    stickyHead: PropTypes.bool,
};

export const MemoizedTable = memo(Table);
