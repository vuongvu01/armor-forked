import { useEffect, useRef, useState, useCallback, useContext } from 'react';
import { throttle } from 'throttle-debounce';
import { TABLE_HEAD } from '../../utils/TableSectionContext';
import { TableContext } from '../../utils/TableContext';
import { TABLE_THROTTLE_PERIOD } from '../../constants';
import {
    TableContextValueType,
    TableSectionContextValueType,
} from '../../utils/type';
import { TableHeadHookPropsType } from './type';
import { useInternalRef } from '../../../../utils';
import { getWindow } from '../../../../system/util/getWindow';

export const useTableHead = ({ ref }: TableHeadHookPropsType) => {
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

    const rootReference = useRef<HTMLTableSectionElement>();

    useInternalRef(ref, rootReference);

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

                const headerTop = rootReference.current.getBoundingClientRect()
                    .top;
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
        [],
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
