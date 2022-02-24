import React, { forwardRef } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { TableSectionContext } from '../utils/TableSectionContext';

import { useTableHeadClassNames } from './hooks/useTableHeadClassNames';
import { TableHeadRoot } from './style';
import { TableHeadPropsType } from './type';
import { tableHeadRootTestId, TABLE_HEAD_CLASS_PREFIX } from './constants';
import { useTableHead } from './hooks/useTableHead';

/**
 * @armor-docs-component
 */
export const TableHead = forwardRef<
    HTMLTableSectionElement,
    TableHeadPropsType
>(function TableHead({ className, ...restProps }, ref) {
    const theme = useComponentTheme(TABLE_HEAD_CLASS_PREFIX);
    const classNameComponents = useTableHeadClassNames(
        TABLE_HEAD_CLASS_PREFIX,
        className,
    );

    const { tableSectionContextValue, rootReference } = useTableHead({}, ref);

    return (
        <TableSectionContext.Provider value={tableSectionContextValue}>
            <TableHeadRoot
                data-testid={tableHeadRootTestId}
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={rootReference}
            />
        </TableSectionContext.Provider>
    );
});

TableHead.defaultProps = {};

/** prop-types are required here for run-time checks */
TableHead.propTypes = {};
