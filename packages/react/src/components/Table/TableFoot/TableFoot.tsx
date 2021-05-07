import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TableSectionContext } from '../utils/TableSectionContext';
import { useTableFoot } from './hooks/useTableFoot';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableFootClassNames } from './hooks/useTableFootClassNames';
import { TableFootRoot } from './style';
import { TableFootPropsType } from './type';
import { tableFootRootTestId, TABLE_FOOT_CLASS_PREFIX } from './constants';

export const TableFoot = forwardRef<
    HTMLTableSectionElement,
    TableFootPropsType
>(function TableFoot({ className, ...restProps }, ref) {
    const theme = useComponentTheme(TABLE_FOOT_CLASS_PREFIX);
    const classNameComponents = useTableFootClassNames(
        TABLE_FOOT_CLASS_PREFIX,
        className,
    );

    const { tableSectionContextValue } = useTableFoot();

    return (
        <TableSectionContext.Provider value={tableSectionContextValue}>
            <TableFootRoot
                data-testid={tableFootRootTestId}
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            />
        </TableSectionContext.Provider>
    );
});

TableFoot.defaultProps = {};

/** prop-types are required here for run-time checks */
TableFoot.propTypes = {};
