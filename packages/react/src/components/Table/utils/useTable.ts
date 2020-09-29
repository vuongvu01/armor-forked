import { Ref, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { TABLE_THROTTLE_PERIOD } from '../constants';
import { TableHookPropsType, TableContextValueType } from './type';

export const useTable = ({
    stickyLeftColumn,
    stickyRightColumn,
    stickyHead,
    rowIds,
    selectedRowIds,
    onRowSelectionChange,
    ref,
    rowSortOrder,
    onRowSortOrderChange,
}: TableHookPropsType) => {
    const [tableContextValue, setTableContextValue] = useState<
        TableContextValueType
    >({
        data: {
            stickyLeftColumn,
            stickyRightColumn,
            stickyHead,
        },
        update: data => setTableContextValue(data),
    });

    const rootReference = useRef<HTMLTableElement>();
    useEffect(() => {
        if (ref && rootReference) {
            Object.assign(ref, rootReference);
        }
    }, [rootReference]);

    const onLayoutUpdateImmediate = useCallback(() => {
        if (!stickyLeftColumn && !stickyRightColumn) {
            return;
        }

        if (rootReference.current) {
            const { scrollLeft } = rootReference.current;

            const node = rootReference.current;
            const firstChild = node.children[0];
            if (!firstChild) {
                return;
            }

            const tableWidth = node.getBoundingClientRect().width;
            const firstChildWidth = firstChild.getBoundingClientRect().width;

            const differentLevelsLeft = scrollLeft > 0;
            const differentLevelsRight =
                Math.ceil(tableWidth + scrollLeft) < Math.ceil(firstChildWidth);

            const {
                data: { stickyLeftColumnVisible, stickyRightColumnVisible },
            } = tableContextValue;

            if (
                stickyRightColumnVisible !== differentLevelsRight ||
                stickyLeftColumnVisible !== differentLevelsLeft
            ) {
                setTableContextValue({
                    ...tableContextValue,
                    data: {
                        ...tableContextValue.data,
                        stickyLeftColumnVisible: differentLevelsLeft,
                        stickyRightColumnVisible: differentLevelsRight,
                    },
                });
            }
        }
    }, []);

    const onLayoutUpdate = useCallback(
        throttle(TABLE_THROTTLE_PERIOD, false, onLayoutUpdateImmediate),
        [],
    );

    useEffect(() => {
        onLayoutUpdateImmediate();

        window.addEventListener('resize', onLayoutUpdate);
        return () => {
            window.removeEventListener('resize', onLayoutUpdate);
        };
    }, []);

    const tableRowSelectionContextValue = useMemo(
        () => ({
            rowIds,
            selectedRowIds,
            onRowSelectionChange,
        }),
        [rowIds, selectedRowIds, onRowSelectionChange],
    );

    const tableRowSortOrderContextValue = useMemo(
        () => ({
            rowSortOrder,
            onRowSortOrderChange,
        }),
        [rowSortOrder, onRowSortOrderChange],
    );

    return {
        tableContextValue,
        rootReference,
        onLayoutUpdate,
        tableRowSelectionContextValue,
        tableRowSortOrderContextValue,
    };
};
