import { ComponentType } from 'react';
import { TableCellPropsType } from '../type';

type TableCellHookPropsType = Pick<TableCellPropsType, 'isHeader'>;

type UseTableCellType = {
    tag: string | ComponentType<any>;
};

export const useTableCell = ({
    isHeader,
}: TableCellHookPropsType): UseTableCellType => {
    return {
        tag: isHeader ? 'th' : 'td',
    };
};
