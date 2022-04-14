import React, { forwardRef } from 'react';

import { useTableCellLabelClassNames } from './hooks/useTableCellLabelClassNames';
import { TableCellLabelRoot } from './style';
import { TableCellLabelPropsType } from './type';
import {
    tableCellLabelRootTestId,
    TABLE_CELL_LABEL_CLASS_PREFIX,
} from './constants';

/**
 * # TableCellLabel
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
 *             <TableCell>
 *                 <TableCellLabel>
 *                     Food Companies
 *                     <EditIcon marginLeft={3} />
 *                 </TableCellLabel>
 *             </TableCell>
 *             <TableCell>
 *                 <TableCellLabel>
 *                     Scheme ID
 *                     <DeleteIcon marginLeft={3} />
 *                 </TableCellLabel>
 *             </TableCell>
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
export const TableCellLabel = forwardRef<
    HTMLDivElement,
    TableCellLabelPropsType
>(function TableCellLabel({ className, ...restProps }, ref) {
    const classNameComponents = useTableCellLabelClassNames(
        TABLE_CELL_LABEL_CLASS_PREFIX,
        className,
    );

    return (
        <TableCellLabelRoot
            data-testid={tableCellLabelRootTestId}
            {...restProps}
            className={classNameComponents.Root}
            ref={ref}
        />
    );
});

TableCellLabel.defaultProps = {};

/** prop-types are required here for run-time checks */
TableCellLabel.propTypes = {};
