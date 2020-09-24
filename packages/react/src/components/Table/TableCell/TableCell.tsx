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
    function TableCell(
        { className, classNames, isHeader, children, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            TABLE_CELL_CLASS_PREFIX,
            tableCellDefaultTheme,
        );
        const classNameComponents = useTableCellClassNames(
            TABLE_CELL_CLASS_PREFIX,
            className,
            classNames,
        );

        const { tag: TableCellRoot } = useTableCell({ isHeader });

        return (
            <TableCellStyle
                theme={theme}
                {...restProps}
                isHeader={isHeader}
                className={classNameComponents.Root}
                data-testid={tableCellRootTestId}
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
    stickyLeft: false,
    stickyRight: false,
    stickyTop: false,
    stickyLeftOffset: 0,
    stickyShadowVisible: true,
    isHeader: false,
    disabled: false,
    ellipsis: false,
};

/** prop-types are required here for run-time checks */
TableCell.propTypes = {
    stickyLeft: PropTypes.bool,
    stickyLeftOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    stickyRight: PropTypes.bool,
    isHeader: PropTypes.bool,
    stickyTop: PropTypes.bool,
    stickyVisible: PropTypes.bool,
    stickyShadowVisible: PropTypes.bool,
    disabled: PropTypes.bool,
    ellipsis: PropTypes.bool,
};
