import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTableRowClassNames } from './utils/useTableRowClassNames';
import { TableRowRoot } from './style';
import { TableRowPropsType } from './type';
import { tableRowDefaultTheme } from './theme';
import { tableRowRootTestId, TABLE_ROW_CLASS_PREFIX } from './constants';
import { useTableRow } from './utils/useTableRow';
import { TableCheckboxCell } from '../TableCheckboxCell';
import {
    CHECKBOX_CHECK_TYPE_DASH,
    CHECKBOX_CHECK_TYPE_TICK,
} from '../../Checkbox';
import { TableRowCells } from './TableRowCells';

export const TableRow: FunctionComponent<TableRowPropsType> = forwardRef(
    function TableRow(
        { className, classNames, rowId, children, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            TABLE_ROW_CLASS_PREFIX,
            tableRowDefaultTheme,
        );
        const classNameComponents = useTableRowClassNames(
            TABLE_ROW_CLASS_PREFIX,
            className,
            classNames,
        );

        const {
            isHeader,
            stickyTop,
            stickyTopVisible,
            stickyLeftColumn,
            stickyRightColumn,
            stickyLeftColumnVisible,
            stickyRightColumnVisible,
            rowSelectionEnabled,
            rowSelected,
            onSelectorCellClick,
            someRowsSelected,
            allRowsSelected,
        } = useTableRow({ rowId });

        return (
            <TableRowRoot
                theme={theme}
                {...restProps}
                className={classNameComponents.Root}
                ref={ref}
                data-testid={tableRowRootTestId}
                isHeader={isHeader}
                rowSelectionEnabled={rowSelectionEnabled}
            >
                {rowSelectionEnabled && (
                    <TableCheckboxCell
                        stickyTop={stickyTop}
                        stickyVisible={
                            stickyTopVisible || stickyLeftColumnVisible
                        }
                        stickyShadowVisible={stickyTop}
                        stickyLeft={stickyLeftColumn}
                        checked={
                            isHeader
                                ? someRowsSelected || allRowsSelected
                                : rowSelected
                        }
                        checkedIcon={
                            !isHeader || allRowsSelected
                                ? CHECKBOX_CHECK_TYPE_TICK
                                : CHECKBOX_CHECK_TYPE_DASH
                        }
                        isHeader={isHeader}
                        onClick={onSelectorCellClick}
                        data-rowid={rowId}
                    />
                )}
                <TableRowCells
                    stickyLeftColumn={stickyLeftColumn}
                    stickyRightColumn={stickyRightColumn}
                    stickyTopVisible={stickyTopVisible}
                    stickyLeftColumnVisible={stickyLeftColumnVisible}
                    stickyRightColumnVisible={stickyRightColumnVisible}
                    stickyTop={stickyTop}
                    isHeader={isHeader}
                    rowSelectionEnabled={rowSelectionEnabled}
                >
                    {children}
                </TableRowCells>
            </TableRowRoot>
        );
    },
);

TableRow.defaultProps = {};

/** prop-types are required here for run-time checks */
TableRow.propTypes = {
    rowId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
