import React, {
    FunctionComponent,
    forwardRef,
    useCallback,
    MouseEvent,
} from 'react';

import { useTableCheckboxCellClassNames } from './utils/useTableCheckboxCellClassNames';
import { TableCheckboxCellRoot, TableCheckboxCellCheckbox } from './style';
import { TableCheckboxCellPropsType } from './type';
import {
    tableCheckboxCellRootTestId,
    TABLE_CHECKBOX_CELL_CLASS_PREFIX,
} from './constants';

export const TableCheckboxCell: FunctionComponent<TableCheckboxCellPropsType> = forwardRef(
    function TableCheckboxCell(
        { className, classNames, checked, checkedIcon, ...restProps },
        ref,
    ) {
        const classNameComponents = useTableCheckboxCellClassNames(
            TABLE_CHECKBOX_CELL_CLASS_PREFIX,
            className,
            classNames,
        );

        const onCheckboxClick = useCallback(
            (e: MouseEvent<HTMLLabelElement>) => e.preventDefault(),
            [],
        );

        return (
            <TableCheckboxCellRoot
                data-testid={tableCheckboxCellRootTestId}
                {...restProps}
                contentAlignX="center"
                className={classNameComponents.Root}
                ref={ref}
            >
                <TableCheckboxCellCheckbox
                    checked={checked}
                    checkedIcon={checkedIcon}
                    onClick={onCheckboxClick}
                />
            </TableCheckboxCellRoot>
        );
    },
);

TableCheckboxCell.defaultProps = {};

/** prop-types are required here for run-time checks */
TableCheckboxCell.propTypes = {};
