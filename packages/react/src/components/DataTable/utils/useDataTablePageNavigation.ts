import { DataTablePropsType } from '../type';

export const useDataTablePageNavigation = ({
    pageNavigationItemCount,
    pageNavigationPageNumber,
    pageNavigationPageSize,
    onPageNavigationPageSelect,
    enablePageNavigation,
    ...restProps
}: DataTablePropsType) => {
    return {
        result: {
            pageNavigationProps: {
                itemCount: pageNavigationItemCount,
                pageNumber: pageNavigationPageNumber,
                pageSize: pageNavigationPageSize,
                onPageSelect: onPageNavigationPageSelect,
            },
            enablePageNavigation,
        },
        restProps,
    };
};
