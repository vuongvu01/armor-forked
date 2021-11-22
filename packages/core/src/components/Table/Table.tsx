import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useTableClassNames } from './hooks/useTableClassNames';
import { TableRoot } from './style';
import { TablePropsType } from './type';
import { tableDefaultTheme } from './theme';
import { tableRootTestId, TABLE_CLASS_PREFIX } from './constants';
import { TableContext } from './utils/TableContext';
import { useTable } from './hooks/useTable';

/**
 * @armor-docs-component
 */
export const Table = forwardRef<HTMLTableElement, TablePropsType>(
    function Table(
        { className, stickyColumns, stickyHead, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(TABLE_CLASS_PREFIX, tableDefaultTheme);
        const classNameComponents = useTableClassNames(
            TABLE_CLASS_PREFIX,
            className,
        );

        const { tableContextValue, rootReference, onLayoutUpdate } = useTable(
            {
                stickyColumns,
                stickyHead,
            },
            ref,
        );

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
    enableFixedLayout: true,
};

/** prop-types are required here for run-time checks */
Table.propTypes = {
    horizontalScroll: PropTypes.bool,
    stickyHead: PropTypes.bool,
};
