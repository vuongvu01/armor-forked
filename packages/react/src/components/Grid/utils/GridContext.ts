import * as React from 'react';

import { GridContextType } from '../type';

export const GridContext = React.createContext<GridContextType>({
    spacing: undefined,
});
