import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableBodyClassNames } from './utils/useTableBodyClassNames';
import { TableBodyRoot } from './style';
import { TableBodyPropsType } from './type';
import { tableBodyDefaultTheme } from './theme';
import { tableBodyRootTestId, TABLE_BODY_CLASS_PREFIX } from './constants';

export const TableBody: FunctionComponent<TableBodyPropsType> = forwardRef(
    function TableBody({ className, classNames, ...restProps }, ref) {
        const theme = useComponentTheme(
            TABLE_BODY_CLASS_PREFIX,
            tableBodyDefaultTheme,
        );
        const classNameComponents = useTableBodyClassNames(
            TABLE_BODY_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <TableBodyRoot
                theme={theme}
                {...restProps}
                className={classNameComponents.Root}
                ref={ref}
                data-testid={tableBodyRootTestId}
            />
        );
    },
);

TableBody.defaultProps = {};

/** prop-types are required here for run-time checks */
TableBody.propTypes = {};
