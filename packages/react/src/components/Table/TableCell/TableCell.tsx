import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableCellClassNames } from './utils/useTableCellClassNames';
import { TableCellRoot } from './style';
import { TableCellPropsType, TableCellRootPropsType } from './type';
import { tableCellRootTestId, TABLE_CELL_CLASS_PREFIX } from './constants';
import { useTableCell } from './utils/useTableCell';

export const TableCell: FunctionComponent<TableCellPropsType> = forwardRef(
    function TableCell({ className, isHeader, children, ...restProps }, ref) {
        const theme = useComponentTheme(TABLE_CELL_CLASS_PREFIX);
        const classNameComponents = useTableCellClassNames(
            TABLE_CELL_CLASS_PREFIX,
            className,
        );

        const { tag: Tag } = useTableCell({ isHeader });

        // todo: forward only className here, it will be more efficient and neat
        return (
            <TableCellRoot
                data-testid={tableCellRootTestId}
                {...restProps}
                theme={theme}
                isHeader={isHeader}
                className={classNameComponents.Root}
            >
                {(forwardedProps: TableCellRootPropsType) => (
                    <Tag {...forwardedProps} ref={ref}>
                        {children}
                    </Tag>
                )}
            </TableCellRoot>
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
    enableContentBreak: true,
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
