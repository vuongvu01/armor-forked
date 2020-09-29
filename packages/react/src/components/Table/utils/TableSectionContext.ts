import React from 'react';
import { TableSectionContextValueType } from './type';

export const TABLE_HEAD = 'thead';

export const TableSectionContext = React.createContext<
    TableSectionContextValueType
>({
    data: {},
});
