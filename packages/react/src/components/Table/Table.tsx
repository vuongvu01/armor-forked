import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useTableClassNames } from './utils/useTableClassNames';
import { TableRoot } from './style';
import { TablePropsType } from './type';
import { tableDefaultTheme } from './theme';
import { tableRootTestId, TABLE_CLASS_PREFIX } from './constants';
import { TableContext } from './utils/TableContext';
import { useTable } from './utils/useTable';

export const Table: FunctionComponent<TablePropsType> = forwardRef(
    function Table(
        { className, classNames, stickyColumns, stickyHead, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(TABLE_CLASS_PREFIX, tableDefaultTheme);
        const classNameComponents = useTableClassNames(
            TABLE_CLASS_PREFIX,
            className,
            classNames,
        );

        const { tableContextValue, rootReference, onLayoutUpdate } = useTable({
            stickyColumns,
            stickyHead,
            ref,
        });

        return (
            <TableContext.Provider value={tableContextValue}>
                <TableRoot
                    data-testid={tableRootTestId}
                    {...restProps}
                    theme={theme}
                    className={classNameComponents.Root}
                    ref={rootReference}
                    cellPadding="0"
                    cellSpacing="0"
                    onScroll={onLayoutUpdate}
                />
            </TableContext.Provider>
        );
    },
);

Table.defaultProps = {
    horizontalScroll: false,
    stickyHead: false,
};

/** prop-types are required here for run-time checks */
Table.propTypes = {
    horizontalScroll: PropTypes.bool,
    stickyHead: PropTypes.bool,
    selectedRowIds: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    ),
    rowIds: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    ),
    onRowSelectionChange: PropTypes.func,
};
