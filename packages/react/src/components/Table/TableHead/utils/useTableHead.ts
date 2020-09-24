import {
    useEffect,
    useRef,
    useState,
    Ref,
    useCallback,
    useContext,
} from 'react';
import { throttle } from 'throttle-debounce';
import {
    TABLE_HEAD,
    TableSectionContextValueType,
} from '../../utils/TableSectionContext';
import { TableContext, TableContextValueType } from '../../utils/TableContext';
import { TABLE_THROTTLE_PERIOD } from '../../constants';

type TableHeadHookPropsType = {
    ref: Ref<unknown>;
};

export const useTableHead = ({ ref }: TableHeadHookPropsType) => {
    const tableContextValue = useContext<TableContextValueType>(TableContext);
    const {
        data: { stickyHead },
        update: updateTableContext,
    } = tableContextValue;

    const [tableSectionContextValue] = useState<TableSectionContextValueType>({
        data: {
            section: TABLE_HEAD,
        },
    });

    const rootReference = useRef<HTMLTableSectionElement>();
    useEffect(() => {
        if (ref && rootReference) {
            Object.assign(ref, rootReference);
        }
    }, [rootReference]);

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
        window.addEventListener('resize', onLayoutUpdate);
        window.addEventListener('scroll', onLayoutUpdate);

        return () => {
            window.removeEventListener('resize', onLayoutUpdate);
            window.removeEventListener('scroll', onLayoutUpdate);
        };
    }, [onLayoutUpdate]);

    return { tableSectionContextValue, rootReference };
};
