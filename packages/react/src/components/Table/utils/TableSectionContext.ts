import React from 'react';

export type TableSectionContextValueDataType = {
    section?: 'thead' | 'tfoot';
};

export type TableSectionContextValueType = {
    data: TableSectionContextValueDataType;
};

export const TABLE_HEAD = 'thead';

export const TableSectionContext = React.createContext<
    TableSectionContextValueType
>({
    data: {},
});
