import React, { forwardRef } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useTableCellLabelClassNames } from './hooks/useTableCellLabelClassNames';
import { TableCellLabelRoot } from './style';
import { TableCellLabelPropsType } from './type';
import {
    tableCellLabelRootTestId,
    TABLE_CELL_LABEL_CLASS_PREFIX,
} from './constants';

/**
 * @armor-docs-component
 */
export const TableCellLabel = forwardRef<
    HTMLDivElement,
    TableCellLabelPropsType
>(function TableCellLabel({ className, ...restProps }, ref) {
    const theme = useComponentTheme(TABLE_CELL_LABEL_CLASS_PREFIX);
    const classNameComponents = useTableCellLabelClassNames(
        TABLE_CELL_LABEL_CLASS_PREFIX,
        className,
    );

    return (
        <TableCellLabelRoot
            data-testid={tableCellLabelRootTestId}
            {...restProps}
            theme={theme}
            className={classNameComponents.Root}
            ref={ref}
        />
    );
});

TableCellLabel.defaultProps = {};

/** prop-types are required here for run-time checks */
TableCellLabel.propTypes = {};
