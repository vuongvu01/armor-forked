import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { DataTableDataType, DataTablePropsType } from '../type';
import { ScalarType } from '../../../type';
import {
    CHECKBOX_CHECK_TYPE_DASH,
    CHECKBOX_CHECK_TYPE_TICK,
} from '../../Checkbox';

export const useDataTableRowSelection = (
    dataSafe: DataTableDataType[],
    {
        enableRowSelection,
        defaultSelectedRowIds,
        selectedRowIds,
        onRowSelectionChange,
        ...restProps
    }: DataTablePropsType,
) => {
    const [selectedRowIdsInternal, setSelectedRowIdsInternal] = useState<
        ScalarType[]
    >(defaultSelectedRowIds || []); // controllable & uncontrollable
    const selectedRowIdsActual = selectedRowIds || selectedRowIdsInternal;
    const onRowSelectionChangeInternal = useCallback(
        (selection: ScalarType[]) => {
            // controllable & uncontrollable
            if (!selectedRowIds) {
                setSelectedRowIdsInternal(selection);
            }
            if (onRowSelectionChange) {
                onRowSelectionChange(selection);
            }
        },
        [onRowSelectionChange, selectedRowIds],
    );

    const rowIds = useMemo(() => dataSafe.map(item => item.id), [dataSafe]);

    const allRowsSelected =
        !!selectedRowIdsActual &&
        !!rowIds &&
        selectedRowIdsActual.length === rowIds.length;
    const someRowsSelected =
        !!selectedRowIdsActual && !!selectedRowIdsActual.length;

    const onHeadSelectorCellClick = useCallback(() => {
        if (!enableRowSelection) {
            return;
        }

        if (!someRowsSelected || (someRowsSelected && !allRowsSelected)) {
            onRowSelectionChangeInternal(rowIds ? [...rowIds] : []);
        } else {
            onRowSelectionChangeInternal([]);
        }
    }, [
        rowIds,
        someRowsSelected,
        allRowsSelected,
        onRowSelectionChangeInternal,
        enableRowSelection,
    ]);

    const onDataSelectorCellClick = useCallback(
        (event: MouseEvent<HTMLTableDataCellElement>) => {
            if (!enableRowSelection) {
                return;
            }

            const rowId = event.currentTarget.getAttribute('data-rowid');

            if (!rowId) {
                return;
            }

            const selected = selectedRowIdsActual.includes(rowId);

            onRowSelectionChangeInternal(
                selected
                    ? selectedRowIdsActual.filter(id => id !== rowId)
                    : [rowId, ...selectedRowIdsActual],
            );
        },
        [
            selectedRowIdsActual,
            onRowSelectionChangeInternal,
            enableRowSelection,
        ],
    );

    return {
        result: {
            enableRowSelection,
            getSelectAllCheckboxCellProps: () => ({
                checked: someRowsSelected || allRowsSelected,
                checkedIcon: (allRowsSelected
                    ? CHECKBOX_CHECK_TYPE_TICK
                    : CHECKBOX_CHECK_TYPE_DASH) as 'tick' | 'dash',
                isHeader: true,
                onClick: onHeadSelectorCellClick,
            }),
            getSelectRowCheckboxCellProps: (rowId: ScalarType) => {
                const isRowSelected =
                    enableRowSelection && selectedRowIdsActual.includes(rowId);

                return {
                    checked: isRowSelected,
                    onClick: onDataSelectorCellClick,
                    'data-rowid': rowId,
                };
            },
            onDataSelectorCellClick,
        },
        restProps,
    };
};
