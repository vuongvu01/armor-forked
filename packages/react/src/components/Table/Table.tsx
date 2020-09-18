import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useTableClassNames } from './utils/useTableClassNames';
import { TableRoot } from './style';
import { TablePropsType } from './type';
import { tableDefaultTheme } from './theme';
import { tableRootTestId, TABLE_CLASS_PREFIX } from './constants';
import { TableContext } from './utils/TableContext';
import { TableRowSelectionContext } from './utils/TableRowSelectionContext';
import { useTable } from './utils/useTable';
import { ScalarType } from '../../type';

export const Table: FunctionComponent<TablePropsType> = forwardRef(
    function Table(
        {
            className,
            classNames,
            stickyLeftColumn,
            stickyRightColumn,
            stickyHead,
            rowIds,
            selectedRowIds,
            onRowSelectionChange,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(TABLE_CLASS_PREFIX, tableDefaultTheme);
        const classNameComponents = useTableClassNames(
            TABLE_CLASS_PREFIX,
            className,
            classNames,
        );

        const {
            tableContextValue,
            rootReference,
            onLayoutUpdate,
            tableRowSelectionContextValue,
        } = useTable({
            stickyLeftColumn,
            stickyRightColumn,
            stickyHead,
            ref,
            rowIds,
            selectedRowIds,
            onRowSelectionChange,
        });

        return (
            <TableContext.Provider value={tableContextValue}>
                <TableRowSelectionContext.Provider
                    value={tableRowSelectionContextValue}
                >
                    <TableRoot
                        theme={theme}
                        {...restProps}
                        className={classNameComponents.Root}
                        ref={rootReference}
                        data-testid={tableRootTestId}
                        cellPadding="0"
                        cellSpacing="0"
                        onScroll={onLayoutUpdate}
                    />
                </TableRowSelectionContext.Provider>
            </TableContext.Provider>
        );
    },
);

Table.defaultProps = {
    horizontalScroll: false,
    stickyLeftColumn: false,
    stickyRightColumn: false,
    stickyHead: false,
};

/** prop-types are required here for run-time checks */
Table.propTypes = {
    horizontalScroll: PropTypes.bool,
    stickyLeftColumn: PropTypes.bool,
    stickyRightColumn: PropTypes.bool,
    stickyHead: PropTypes.bool,
    selectedRowIds: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    ),
    rowIds: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    ),
    onRowSelectionChange: PropTypes.func,
};
