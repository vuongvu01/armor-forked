import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableFootClassNames } from './utils/useTableFootClassNames';
import { TableFootRoot } from './style';
import { TableFootPropsType } from './type';
import { tableFootDefaultTheme } from './theme';
import { tableFootRootTestId, TABLE_FOOT_CLASS_PREFIX } from './constants';

export const TableFoot: FunctionComponent<TableFootPropsType> = forwardRef(
    function TableFoot({ className, classNames, ...restProps }, ref) {
        const theme = useComponentTheme(
            TABLE_FOOT_CLASS_PREFIX,
            tableFootDefaultTheme,
        );
        const classNameComponents = useTableFootClassNames(
            TABLE_FOOT_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <TableFootRoot
                theme={theme}
                {...restProps}
                className={classNameComponents.Root}
                ref={ref}
                data-testid={tableFootRootTestId}
            />
        );
    },
);

TableFoot.defaultProps = {};

/** prop-types are required here for run-time checks */
TableFoot.propTypes = {};
