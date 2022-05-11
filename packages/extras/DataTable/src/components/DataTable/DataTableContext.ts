import * as React from 'react';

import { DataTableContextType } from './type';

export const DataTableContext = React.createContext<DataTableContextType>({
    selectedRowIds: [],
    unselectRows: () => {},
    data: [],
});
