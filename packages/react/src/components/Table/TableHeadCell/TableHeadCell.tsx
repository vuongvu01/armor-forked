import React, { FunctionComponent, forwardRef } from 'react';
import {
    SortLetterIcon,
    SortNumberIcon,
    ArrowUpTailIcon,
    ArrowDownTailIcon,
} from '@deliveryhero/armor-icons';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../../utils/hooks';
import { useTableHeadCellClassNames } from './utils/useTableHeadCellClassNames';
import { TableHeadCellRoot } from './style';
import { TableHeadCellPropsType } from './type';
import { tableHeadCellDefaultTheme } from './theme';
import { useTableHeadCell } from './utils/useTableHeadCell';
import {
    tableHeadCellRootTestId,
    TABLE_HEAD_CELL_CLASS_PREFIX,
    TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL,
    TABLE_HEAD_CELL_SORTING_TYPE_ALPHABETICAL,
} from './constants';
import { TableCellLabel } from '../TableCellLabel';

export const TableHeadCell: FunctionComponent<TableHeadCellPropsType> = forwardRef(
    function TableHeadCell(
        {
            className,
            classNames,
            children,
            columnId,
            sortable,
            onClick,
            sortType, // todo: rename to rowSortType
            rowSortOrder,
            onRowSortOrderChange,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            TABLE_HEAD_CELL_CLASS_PREFIX,
            tableHeadCellDefaultTheme,
        );
        const classNameComponents = useTableHeadCellClassNames(
            TABLE_HEAD_CELL_CLASS_PREFIX,
            className,
            classNames,
        );

        const {
            sortingEnabled,
            onRootClick,
            isAscending,
            isDescending,
            isIconAlphabetical,
            isIconNumerical,
        } = useTableHeadCell({
            sortable,
            columnId,
            onClick,
            sortType,
            rowSortOrder,
            onRowSortOrderChange,
        });

        return (
            <TableHeadCellRoot
                data-testid={tableHeadCellRootTestId}
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
                onClick={onRootClick}
                sortingEnabled={sortingEnabled}
            >
                <TableCellLabel>
                    {children}
                    {isIconAlphabetical && (
                        <SortLetterIcon
                            marginLeft={2}
                            className={classNameComponents.AlphabeticalIcon}
                        />
                    )}
                    {isIconNumerical && (
                        <SortNumberIcon
                            marginLeft={2}
                            className={classNameComponents.NumericalIcon}
                        />
                    )}
                    {isAscending && (
                        <ArrowUpTailIcon
                            marginLeft={2}
                            className={classNameComponents.ArrowUpIcon}
                        />
                    )}
                    {isDescending && (
                        <ArrowDownTailIcon
                            marginLeft={2}
                            className={classNameComponents.ArrowDownIcon}
                        />
                    )}
                </TableCellLabel>
            </TableHeadCellRoot>
        );
    },
);

TableHeadCell.defaultProps = {
    sortable: false,
};

/** prop-types are required here for run-time checks */
TableHeadCell.propTypes = {
    sortable: PropTypes.bool,
    columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sortType: PropTypes.oneOf([
        TABLE_HEAD_CELL_SORTING_TYPE_NUMERICAL,
        TABLE_HEAD_CELL_SORTING_TYPE_ALPHABETICAL,
    ]),
};
