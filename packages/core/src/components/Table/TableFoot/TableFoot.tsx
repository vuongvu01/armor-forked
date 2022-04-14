import React, { forwardRef } from 'react';

import { TableSectionContext } from '../utils/TableSectionContext';
import { useTableFoot } from './hooks/useTableFoot';

import { useTableFootClassNames } from './hooks/useTableFootClassNames';
import { TableFootRoot } from './style';
import { TableFootPropsType } from './type';
import { tableFootRootTestId, TABLE_FOOT_CLASS_PREFIX } from './constants';

/**
 * # TableFoot
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
 *     TableFoot,
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
 *     <TableFoot>
 *         <TableRow>
 *             <TableCell colSpan={2}>Total score: 9999</TableCell>
 *         </TableRow>
 *     </TableFoot>
 * </Table>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const TableFoot = forwardRef<
    HTMLTableSectionElement,
    TableFootPropsType
>(function TableFoot({ className, ...restProps }, ref) {
    const classNameComponents = useTableFootClassNames(
        TABLE_FOOT_CLASS_PREFIX,
        className,
    );

    const { tableSectionContextValue } = useTableFoot();

    return (
        <TableSectionContext.Provider value={tableSectionContextValue}>
            <TableFootRoot
                data-testid={tableFootRootTestId}
                {...restProps}
                className={classNameComponents.Root}
                ref={ref}
            />
        </TableSectionContext.Provider>
    );
});

TableFoot.defaultProps = {};

/** prop-types are required here for run-time checks */
TableFoot.propTypes = {};
