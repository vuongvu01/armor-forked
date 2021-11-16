import React, { forwardRef } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useTableActionClassNames } from './hooks/useTableActionClassNames';
import { TableActionRoot } from './style';
import { TableActionPropsType } from './type';
import { tableActionDefaultTheme } from './theme';
import { tableActionRootTestId, TABLE_ACTION_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const TableAction = forwardRef<HTMLDivElement, TableActionPropsType>(
    function TableAction({ className, ...restProps }, ref) {
        const theme = useComponentTheme(
            TABLE_ACTION_CLASS_PREFIX,
            tableActionDefaultTheme,
        );
        const classNameComponents = useTableActionClassNames(
            TABLE_ACTION_CLASS_PREFIX,
            className,
        );

        return (
            <TableActionRoot
                data-testid={tableActionRootTestId}
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            />
        );
    },
);

TableAction.defaultProps = {};

/** prop-types are required here for run-time checks */
TableAction.propTypes = {};
