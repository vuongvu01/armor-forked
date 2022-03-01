import { useEffect, useState, useCallback, useContext } from 'react';
import { throttle } from 'throttle-debounce';
import { useRootRef, getWindow } from '@deliveryhero/armor-system';

import { TABLE_HEAD } from '../../utils/TableSectionContext';
import { TableContext } from '../../utils/TableContext';
import { TABLE_THROTTLE_PERIOD } from '../../constants';
import {
    TableContextValueType,
    TableSectionContextValueType,
} from '../../utils/type';
import { RefType } from '../../../../type';

type TableHeadHookPropsType = {};

export const useTableHead = <E extends HTMLTableSectionElement>(
    props: TableHeadHookPropsType,
    ref: RefType<E>,
) => {
    // sticky header
    const tableContextValue = useContext<TableContextValueType>(TableContext);
    const {
        data: { stickyHead },
        update: updateTableContext,
    } = tableContextValue;

    // cell type
    const [tableSectionContextValue] = useState<TableSectionContextValueType>({
        data: {
            section: TABLE_HEAD,
        },
    });

    const rootReference = useRootRef<E>(ref);

    // todo: fix me
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onLayoutUpdate = useCallback(
        throttle(TABLE_THROTTLE_PERIOD, false, () => {
            if (!stickyHead) {
                return;
            }

            if (rootReference.current) {
                const firstCell = rootReference.current.querySelector('th');
                if (!firstCell) {
                    return;
                }

                const headerTop =
                    rootReference.current.getBoundingClientRect().top;
                const cellTop = firstCell.getBoundingClientRect().top;

                const differentLevels = headerTop !== cellTop;
                if (
                    tableContextValue.data.stickyHeadVisible !== differentLevels
                ) {
                    updateTableContext({
                        ...tableContextValue,
                        data: {
                            ...tableContextValue.data,
                            stickyHeadVisible: differentLevels,
                        },
                    });
                }
            }
        }),
        [rootReference, stickyHead, tableContextValue, updateTableContext],
    );

    useEffect(() => {
        const win = getWindow();

        if (win) {
            win.addEventListener('resize', onLayoutUpdate);
            win.addEventListener('scroll', onLayoutUpdate);
        }

        return () => {
            if (win) {
                win.removeEventListener('resize', onLayoutUpdate);
                win.removeEventListener('scroll', onLayoutUpdate);
            }
        };
    }, [onLayoutUpdate]);

    return { tableSectionContextValue, rootReference };
};
