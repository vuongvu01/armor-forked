import React from 'react';
import { TablePropsType } from '../type';

export type TableContextValueDataType = {
    stickyLeftColumnVisible?: boolean;
    stickyRightColumnVisible?: boolean;
    stickyHeadVisible?: boolean;
} & Pick<
    TablePropsType,
    'stickyLeftColumn' | 'stickyRightColumn' | 'stickyHead'
>;

export type TableContextValueType = {
    data: TableContextValueDataType;
    update: (data: TableContextValueType) => void;
};

export const TableContext = React.createContext<TableContextValueType>({
    data: {},
    update: () => {},
});
