import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableRowClassNames } from './utils/useTableRowClassNames';
import { TableRowRoot } from './style';
import { TableRowPropsType } from './type';
import { tableRowRootTestId, TABLE_ROW_CLASS_PREFIX } from './constants';
import { useTableRow } from './utils/useTableRow';
import { TableRowCells } from './TableRowCells';
import { getScalarPropType } from '../../../utils/propTypes';

export const TableRow: FunctionComponent<TableRowPropsType> = forwardRef(
    function TableRow({ className, children, ...restProps }, ref) {
        const theme = useComponentTheme(TABLE_ROW_CLASS_PREFIX);
        const classNameComponents = useTableRowClassNames(
            TABLE_ROW_CLASS_PREFIX,
            className,
        );

        const { rootProps, cellsProps } = useTableRow(restProps);

        return (
            <TableRowRoot
                data-testid={tableRowRootTestId}
                {...rootProps}
                theme={theme}
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
TableRow.propTypes = {
    rowId: getScalarPropType(),
};
