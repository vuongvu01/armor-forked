import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { TableSectionContext } from '../utils/TableSectionContext';

import { useTableHeadClassNames } from './utils/useTableHeadClassNames';
import { TableHeadRoot } from './style';
import { TableHeadPropsType } from './type';
import { tableHeadDefaultTheme } from './theme';
import { tableHeadRootTestId, TABLE_HEAD_CLASS_PREFIX } from './constants';
import { useTableHead } from './utils/useTableHead';

export const TableHead: FunctionComponent<TableHeadPropsType> = forwardRef(
    function TableHead({ className, ...restProps }, ref) {
        const theme = useComponentTheme(
            TABLE_HEAD_CLASS_PREFIX,
            tableHeadDefaultTheme,
        );
        const classNameComponents = useTableHeadClassNames(
            TABLE_HEAD_CLASS_PREFIX,
            className,
        );

        const { tableSectionContextValue, rootReference } = useTableHead({
            ref,
        });

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
    },
);

TableHead.defaultProps = {};

/** prop-types are required here for run-time checks */
TableHead.propTypes = {};
