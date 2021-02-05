import * as React from 'react';
import { TabPropsType } from '../Tab/type';

const TabsContext = React.createContext<TabPropsType>({
    currentlyActiveTab: undefined,
    wide: undefined,
    handleClick: undefined,
});

export default TabsContext;
