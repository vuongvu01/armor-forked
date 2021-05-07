import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { TABLE_THROTTLE_PERIOD } from '../constants';
import { useInternalRef } from '../../../utils';
import { TableHookPropsType } from './type';
import { TableContextValueType } from '../utils/type';
import { TableStickyColumnMapInternalItem } from '../type';
import { ArrayLikeType, RefType } from '../../../type';
import { LEFT, RIGHT } from '../../../constants';
import { getWindow } from '../../../system/util/globals';
import { useRootRef } from '../../../system';

export const useTable = <E extends HTMLTableElement>(
    { stickyColumns, stickyHead }: TableHookPropsType,
    ref: RefType<E>,
) => {
    // sticky columns and header
    const stickyColumnsInternal = useMemo<
        ArrayLikeType<TableStickyColumnMapInternalItem>
    >(() => {
        let result: ArrayLikeType<TableStickyColumnMapInternalItem> = {};

        if (!stickyColumns) {
            return result;
        }

        let maxLeftOffset = 0;
        let maxRightOffset = 0;
        let leftEdgeItemIndex: number | undefined;
        let rightEdgeItemIndex: number | undefined;

        for (let i = 0; i < stickyColumns.length; i += 1) {
            const { index } = stickyColumns[i];
            const item = {
                ...stickyColumns[i],
                edge: false,
                offset: stickyColumns[i].offset || 0,
            };

            if (item.alignment === LEFT && item.offset >= maxLeftOffset) {
                maxLeftOffset = item.offset;
                leftEdgeItemIndex = index;
            }

            if (item.alignment === RIGHT && item.offset >= maxRightOffset) {
                maxRightOffset = item.offset;
                rightEdgeItemIndex = index;
            }

            result = {
                ...result,
                [index]: item,
            };
        }

        if (leftEdgeItemIndex !== undefined) {
            result[leftEdgeItemIndex].edge = true;
        }
        if (rightEdgeItemIndex !== undefined) {
            result[rightEdgeItemIndex].edge = true;
        }

        return result;
    }, [stickyColumns]);

    const [tableContextValue, setTableContextValue] = useState<
        TableContextValueType
    >({
        data: {
            stickyColumns: stickyColumnsInternal,
            stickyHead,
        },
        update: data => setTableContextValue(data),
    });

    const rootReference = useRootRef<E>(ref);

    const onLayoutUpdateImmediate = useCallback(() => {
        if (!stickyColumns || !stickyColumns.length) {
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
        [onLayoutUpdateImmediate],
    );

    useEffect(() => {
        onLayoutUpdateImmediate();
        const win = getWindow();

        if (win) {
            win.addEventListener('resize', onLayoutUpdate);
        }
        return () => {
            if (win) {
                win.removeEventListener('resize', onLayoutUpdate);
            }
        };
    }, []);

    return {
        tableContextValue,
        rootReference,
        onLayoutUpdate,
    };
};
