import React, { forwardRef, memo } from 'react';

import { useTableActionClassNames } from './hooks/useTableActionClassNames';
import { TableActionRoot } from './style';
import { TableActionPropsType } from './type';
import { tableActionRootTestId, TABLE_ACTION_CLASS_PREFIX } from './constants';

/**
 * # TableAction
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
 *     TableAction,
 *     Box,
 * } from '@deliveryhero/armor';
 * import {
 *     EditIcon,
 *     DeleteIcon,
 *     EllipsisVerticalIcon,
 * } from '@deliveryhero/armor-icons';
 *
 * <Table>
 *     <TableHead>
 *         <TableRow>
 *             <TableCell>
 *                 Food Companies
 *             </TableCell>
 *             <TableCell>
 *                 Scheme ID
 *             </TableCell>
 *             <TableCell>Actions</TableCell>
 *         </TableRow>
 *     </TableHead>
 *     <TableBody>
 *         <TableRow>
 *             <TableCell>Kitchen Garden POS</TableCell>
 *             <TableCell>Scheme B</TableCell>
 *             <TableCell color="$color.neutral.05">
 *                 <Box
 *                     style={{
 *                         display: 'flex',
 *                         alignItems: 'center',
 *                     }}
 *                     height={6}
 *                 >
 *                     <TableAction marginRight={6}>
 *                         <EditIcon />
 *                     </TableAction>
 *                     <TableAction marginRight={6}>
 *                         <DeleteIcon />
 *                     </TableAction>
 *                     <TableAction>
 *                         <EllipsisVerticalIcon />
 *                     </TableAction>
 *                 </Box>
 *             </TableCell>
 *         </TableRow>
 *     </TableBody>
 * </Table>
 * ```
 * ***
 *
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

export const MemoizedTableAction = memo(TableAction);
