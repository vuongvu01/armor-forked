import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableCellLabelClassNames } from './utils/useTableCellLabelClassNames';
import { TableCellLabelRoot } from './style';
import { TableCellLabelPropsType } from './type';
import { tableCellLabelDefaultTheme } from './theme';
import {
    tableCellLabelRootTestId,
    TABLE_CELL_LABEL_CLASS_PREFIX,
} from './constants';

export const TableCellLabel: FunctionComponent<TableCellLabelPropsType> = forwardRef(
    function TableCellLabel({ className, classNames, ...restProps }, ref) {
        const theme = useComponentTheme(
            TABLE_CELL_LABEL_CLASS_PREFIX,
            tableCellLabelDefaultTheme,
        );
        const classNameComponents = useTableCellLabelClassNames(
            TABLE_CELL_LABEL_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <TableCellLabelRoot
                data-testid={tableCellLabelRootTestId}
                {...restProps}
                theme={theme}
                className={classNameComponents.Root}
                ref={ref}
            />
        );
    },
);

TableCellLabel.defaultProps = {};

/** prop-types are required here for run-time checks */
TableCellLabel.propTypes = {};
