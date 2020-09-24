import React from 'react';
import { TableEffectivePropsType } from '../type';

export type TableRowSelectionContextValueType = Pick<
    TableEffectivePropsType,
    'rowIds' | 'selectedRowIds' | 'onRowSelectionChange'
>;

export const TableRowSelectionContext = React.createContext<
    TableRowSelectionContextValueType
>({});
