import React, { Children, FunctionComponent, ReactElement } from 'react';
import { TableRowCellsPropTypes } from './type';
import {
    TableCellStickyAlignment,
    TableCellStickyOffset,
} from '../TableCell/type';
import { LEFT, RIGHT } from '../../../constants';

export const TableRowCells: FunctionComponent<TableRowCellsPropTypes> = ({
    children,
    stickyColumns,
    stickyTopVisible,
    stickyLeftColumnVisible,
    stickyRightColumnVisible,
    stickyTop,
    isHeader,
}) => {
    let index = 0;
    return (
        <>
            {Children.map(children, child => {
                if (!child) {
                    return null;
                }

                let stickyAlignment: TableCellStickyAlignment | undefined;
                let stickyOffset: TableCellStickyOffset | undefined;
                let stickyColumnShadowVisible = false;
                if (stickyColumns && index in stickyColumns) {
                    stickyAlignment = stickyColumns[index].alignment;
                    stickyOffset = stickyColumns[index].offset;
                    stickyColumnShadowVisible = stickyColumns[index].edge;
                }

                const stickyVisible =
                    stickyTopVisible ||
                    (stickyAlignment === LEFT && stickyLeftColumnVisible) ||
                    (stickyAlignment === RIGHT && stickyRightColumnVisible);

                const stickyShadowVisible =
                    stickyTopVisible || stickyColumnShadowVisible;

                index += 1;
                return React.cloneElement(child as ReactElement, {
                    stickyTop,
                    stickyVisible,
                    stickyAlignment,
                    stickyOffset,
                    stickyShadowVisible,
                    isHeader,
                });
            })}
        </>
    );
};
