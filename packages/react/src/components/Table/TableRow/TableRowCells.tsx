import React, { Children, FunctionComponent } from 'react';
import { TableRowCellsPropTypes } from './type';
import { TABLE_CHECKBOX_CELL_WIDTH } from '../TableCheckboxCell/constants';

export const TableRowCells: FunctionComponent<TableRowCellsPropTypes> = ({
    children,
    stickyLeftColumn,
    stickyRightColumn,
    stickyTopVisible,
    stickyLeftColumnVisible,
    stickyRightColumnVisible,
    stickyTop,
    isHeader,
    rowSelectionEnabled,
}) => {
    const childrenCount = Children.count(children) - 1;
    return (
        <>
            {Children.map(children, (child, index) => {
                const stickyLeft = !index && stickyLeftColumn;
                const stickyRight =
                    index === childrenCount && stickyRightColumn;
                const stickyVisible =
                    stickyTopVisible ||
                    (stickyLeft && stickyLeftColumnVisible) ||
                    (stickyRight && stickyRightColumnVisible);

                // @ts-ignore
                return React.cloneElement(child, {
                    stickyTop,
                    stickyLeft,
                    stickyRight,
                    stickyVisible,
                    stickyLeftOffset: rowSelectionEnabled
                        ? TABLE_CHECKBOX_CELL_WIDTH
                        : 0,
                    isHeader,
                });
            })}
        </>
    );
};
