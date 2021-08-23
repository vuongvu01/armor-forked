import React, { forwardRef } from 'react';

import { useTableCheckboxCellClassNames } from './hooks/useTableCheckboxCellClassNames';
import { TableCheckboxCellRoot, TableCheckboxCellCheckbox } from './style';
import { TableCheckboxCellPropsType } from './type';
import { TABLE_CHECKBOX_CELL_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';
import { useTableCheckboxCell } from './hooks/useTableCheckboxCell';

/**
 * @armor-docs-component
 */
export const TableCheckboxCell = forwardRef<
    HTMLTableCellElement,
    TableCheckboxCellPropsType
>(function TableCheckboxCell({ className, ...props }, ref) {
    const theme = useComponentTheme(TABLE_CHECKBOX_CELL_CLASS_PREFIX);

    const classNameComponents = useTableCheckboxCellClassNames(
        TABLE_CHECKBOX_CELL_CLASS_PREFIX,
        className,
    );

    const { rootProps, checkboxProps } = useTableCheckboxCell(props, ref);

    return (
        <TableCheckboxCellRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            <TableCheckboxCellCheckbox {...checkboxProps} theme={theme} />
        </TableCheckboxCellRoot>
    );
});

TableCheckboxCell.defaultProps = {};

/** prop-types are required here for run-time checks */
TableCheckboxCell.propTypes = {};
