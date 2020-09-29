import React from 'react';
import { TableContextValueType } from './type';

export const TableContext = React.createContext<TableContextValueType>({
    data: {},
    update: () => {},
});
