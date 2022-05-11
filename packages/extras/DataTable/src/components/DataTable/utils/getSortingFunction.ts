import { TableHeadCellSortType } from '../type';

// todo: add memoization here
export const getSortingFunction = (sortType: TableHeadCellSortType) => {
    if (sortType === 'alphabetical') {
        return (
            valueA: string | number,
            valueB: string | number,
            way: 'asc' | 'desc',
        ) => {
            return way === 'asc'
                ? valueA.toString().localeCompare(valueB.toString())
                : valueB.toString().localeCompare(valueA.toString());
        };
    }

    return (
        valueA: string | number,
        valueB: string | number,
        way: 'asc' | 'desc',
    ) => {
        if (valueA > valueB) {
            return way === 'asc' ? 1 : -1;
        }

        if (valueA < valueB) {
            return way === 'asc' ? -1 : 1;
        }

        return 0;
    };
};
