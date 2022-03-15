import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTableCellClassNames } from './hooks/useTableCellClassNames';
import { TableCellRoot } from './style';
import { TableCellPropsType, TableCellRootPropsType } from './type';
import { TABLE_CELL_CLASS_PREFIX } from './constants';
import { useTableCell } from './hooks/useTableCell';

/**
 * @armor-docs-component
 */
export const TableCell = forwardRef<HTMLTableCellElement, TableCellPropsType>(
    function TableCell({ className, children, ...props }, ref) {
        const classNameComponents = useTableCellClassNames(
            TABLE_CELL_CLASS_PREFIX,
            className,
        );

        const { rootProps, Tag } = useTableCell(props);

        // todo: forward only className here, it will be more efficient and neat
        return (
            <TableCellRoot {...rootProps} className={classNameComponents.Root}>
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
    enableContentWordBreak: true,
    enableContentWrap: true,
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
