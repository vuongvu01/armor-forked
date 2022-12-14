import React, { forwardRef, memo } from 'react';
import {
    SortAlphabetIcon,
    SortNumberIcon,
    ArrowUpTailIcon,
    ArrowDownTailIcon,
} from '@deliveryhero/armor-icons';
import PropTypes from 'prop-types';

import { useTableHeadCellClassNames } from './hooks/useTableHeadCellClassNames';
import { TableHeadCellRoot } from './style';
import { TableHeadCellPropsType } from './type';
import { useTableHeadCell } from './hooks/useTableHeadCell';
import {
    TABLE_HEAD_CELL_CLASS_PREFIX,
    TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL,
    TABLE_HEAD_CELL_SORTING_TYPE_ALPHABETICAL,
} from './constants';
import { TableCellLabel } from '../TableCellLabel';

/**
 * # TableHeadCell
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/21c7b5-table/b/527bb6)
 *
 * @armor-docs-component
 */
export const TableHeadCell = forwardRef<
    HTMLTableCellElement,
    TableHeadCellPropsType
>(function TableHeadCell({ className, children, ...props }, ref) {
    const classNameComponents = useTableHeadCellClassNames(
        TABLE_HEAD_CELL_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        sortingIconProps,

        isAscending,
        isDescending,
        isIconAlphabetical,
        isIconNumerical,
    } = useTableHeadCell(props, ref);

    return (
        <TableHeadCellRoot {...rootProps} className={classNameComponents.Root}>
            <TableCellLabel>
                {children}
                {isIconAlphabetical && (
                    <SortAlphabetIcon
                        {...sortingIconProps}
                        medium
                        className={classNameComponents.AlphabeticalIcon}
                    />
                )}
                {isIconNumerical && (
                    <SortNumberIcon
                        {...sortingIconProps}
                        medium
                        className={classNameComponents.NumericalIcon}
                    />
                )}
                {isAscending && (
                    <ArrowUpTailIcon
                        {...sortingIconProps}
                        small
                        className={classNameComponents.ArrowUpIcon}
                    />
                )}
                {isDescending && (
                    <ArrowDownTailIcon
                        {...sortingIconProps}
                        small
                        className={classNameComponents.ArrowDownIcon}
                    />
                )}
            </TableCellLabel>
        </TableHeadCellRoot>
    );
});

TableHeadCell.defaultProps = {
    sortable: false,
};

/** prop-types are required here for run-time checks */
TableHeadCell.propTypes = {
    sortable: PropTypes.bool,
    columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rowSortType: PropTypes.oneOf([
        TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL,
        TABLE_HEAD_CELL_SORTING_TYPE_ALPHABETICAL,
    ]),
};

export const MemoizedTableHeadCell = memo(TableHeadCell);
