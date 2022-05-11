import { useMemo } from 'react';
import { DataTablePropsType } from '../type';

export const useDataTablePageNavigation = ({
    pageNavigationProps,

    pageNavigationItemCount,
    pageNavigationPageNumber,
    onPageNavigationPageSelect,
    enablePageNavigation,

    // page size
    pageNavigationPageSize,
    enablePageNavigationPageSizeSelector,
    onPageNavigationPageSizeChange,
    pageNavigationPageSizeList,

    ...restProps
}: DataTablePropsType) => {
    return useMemo(
        () => ({
            result: {
                pageNavigationProps: {
                    itemCount: pageNavigationItemCount,
                    pageNumber: pageNavigationPageNumber,
                    onPageSelect: onPageNavigationPageSelect,
                    pageSize: pageNavigationPageSize,
                    enablePageSizeSelector:
                        enablePageNavigationPageSizeSelector,
                    onPageSizeChange: onPageNavigationPageSizeChange,
                    pageSizeList: pageNavigationPageSizeList,

                    ...pageNavigationProps,
                },
                enablePageNavigation,
            },
            restProps,
        }),
        [
            enablePageNavigation,
            enablePageNavigationPageSizeSelector,
            onPageNavigationPageSelect,
            onPageNavigationPageSizeChange,
            pageNavigationItemCount,
            pageNavigationPageNumber,
            pageNavigationPageSize,
            pageNavigationPageSizeList,
            pageNavigationProps,
            restProps,
        ],
    );
};
