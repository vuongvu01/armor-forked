import React, { forwardRef, memo } from 'react';

import { useTableCheckboxCellClassNames } from './hooks/useTableCheckboxCellClassNames';
import { TableCheckboxCellRoot, TableCheckboxCellCheckbox } from './style';
import { TableCheckboxCellPropsType } from './type';
import { TABLE_CHECKBOX_CELL_CLASS_PREFIX } from './constants';
import { useTableCheckboxCell } from './hooks/useTableCheckboxCell';

/**
 * # TableCheckboxCell
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/21c7b5-table/b/527bb6)
 *
 * @armor-docs-component
 */
export const TableCheckboxCell = forwardRef<
    HTMLTableCellElement,
    TableCheckboxCellPropsType
>(function TableCheckboxCell({ className, ...props }, ref) {
    const classNameComponents = useTableCheckboxCellClassNames(
        TABLE_CHECKBOX_CELL_CLASS_PREFIX,
        className,
    );

    const { rootProps, checkboxProps } = useTableCheckboxCell(props, ref);

    return (
        <TableCheckboxCellRoot
            {...rootProps}
            className={classNameComponents.Root}
        >
            <TableCheckboxCellCheckbox {...checkboxProps} />
        </TableCheckboxCellRoot>
    );
});

TableCheckboxCell.defaultProps = {};

/** prop-types are required here for run-time checks */
TableCheckboxCell.propTypes = {};

export const MemoizedTableCheckboxCell = memo(TableCheckboxCell);
