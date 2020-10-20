import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableActionClassNames } from './utils/useTableActionClassNames';
import { TableActionRoot } from './style';
import { TableActionPropsType } from './type';
import { tableActionDefaultTheme } from './theme';
import { tableActionRootTestId, TABLE_ACTION_CLASS_PREFIX } from './constants';

export const TableAction: FunctionComponent<TableActionPropsType> = forwardRef(
    function TableAction({ className, classNames, ...restProps }, ref) {
        const theme = useComponentTheme(
            TABLE_ACTION_CLASS_PREFIX,
            tableActionDefaultTheme,
        );
        const classNameComponents = useTableActionClassNames(
            TABLE_ACTION_CLASS_PREFIX,
            className,
            classNames,
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
