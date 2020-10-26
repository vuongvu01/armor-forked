import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { DataTableDataType, DataTablePropsType } from '../type';
import { ScalarType } from '../../../type';

export const useDataTableRowSelection = (
    dataSafe: DataTableDataType[],
    {
        enableRowSelection,
        defaultSelectedRowIds,
        selectedRowIds,
        onRowSelectionChange,
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
        enableRowSelection,
        selectedRowIds: selectedRowIdsActual,
        onHeadSelectorCellClick,
        onDataSelectorCellClick,
        allRowsSelected,
        someRowsSelected,
    };
};
