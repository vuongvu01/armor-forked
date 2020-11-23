import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableCellClassNames } from './utils/useTableCellClassNames';
import { TableCellStyle } from './style';
import { TableCellPropsType, TableCellRootPropsType } from './type';
import { tableCellDefaultTheme } from './theme';
import { tableCellRootTestId, TABLE_CELL_CLASS_PREFIX } from './constants';
import { useTableCell } from './utils/useTableCell';

export const TableCell: FunctionComponent<TableCellPropsType> = forwardRef(
    function TableCell({ className, isHeader, children, ...restProps }, ref) {
        const theme = useComponentTheme(
            TABLE_CELL_CLASS_PREFIX,
            tableCellDefaultTheme,
        );
        const classNameComponents = useTableCellClassNames(
            TABLE_CELL_CLASS_PREFIX,
            className,
        );

        const { tag: TableCellRoot } = useTableCell({ isHeader });

        // todo: forward only className here, it will be more efficient and neat
        return (
            <TableCellStyle
                data-testid={tableCellRootTestId}
                {...restProps}
                theme={theme}
                isHeader={isHeader}
                className={classNameComponents.Root}
            >
                {(forwardedProps: TableCellRootPropsType) => (
                    <TableCellRoot {...forwardedProps} ref={ref}>
                        {children}
                    </TableCellRoot>
                )}
            </TableCellStyle>
        );
    },
);

TableCell.defaultProps = {
    stickyTop: false,
    stickyShadowVisible: true,
    stickyOffset: 0,
    isHeader: false,
    disabled: false,
    ellipsis: false,
};

/** prop-types are required here for run-time checks */
TableCell.propTypes = {
    isHeader: PropTypes.bool,
    stickyTop: PropTypes.bool,
    stickyVisible: PropTypes.bool,
    stickyShadowVisible: PropTypes.bool,
    disabled: PropTypes.bool,
    ellipsis: PropTypes.bool,
};
