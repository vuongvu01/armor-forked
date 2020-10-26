import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableRowClassNames } from './utils/useTableRowClassNames';
import { TableRowRoot } from './style';
import { TableRowPropsType } from './type';
import { tableRowDefaultTheme } from './theme';
import { tableRowRootTestId, TABLE_ROW_CLASS_PREFIX } from './constants';
import { useTableRow } from './utils/useTableRow';
import { TableRowCells } from './TableRowCells';

export const TableRow: FunctionComponent<TableRowPropsType> = forwardRef(
    function TableRow({ className, classNames, children, ...restProps }, ref) {
        const theme = useComponentTheme(
            TABLE_ROW_CLASS_PREFIX,
            tableRowDefaultTheme,
        );
        const classNameComponents = useTableRowClassNames(
            TABLE_ROW_CLASS_PREFIX,
            className,
            classNames,
        );

        const {
            isHeader,
            stickyTop,
            stickyTopVisible,
            stickyColumns,
            stickyLeftColumnVisible,
            stickyRightColumnVisible,
        } = useTableRow();

        return (
            <TableRowRoot
                data-testid={tableRowRootTestId}
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
                isHeader={isHeader}
            >
                <TableRowCells
                    stickyColumns={stickyColumns}
                    stickyTopVisible={stickyTopVisible}
                    stickyLeftColumnVisible={stickyLeftColumnVisible}
                    stickyRightColumnVisible={stickyRightColumnVisible}
                    stickyTop={stickyTop}
                    isHeader={isHeader}
                >
                    {children}
                </TableRowCells>
            </TableRowRoot>
        );
    },
);

TableRow.defaultProps = {};

/** prop-types are required here for run-time checks */
TableRow.propTypes = {
    rowId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
