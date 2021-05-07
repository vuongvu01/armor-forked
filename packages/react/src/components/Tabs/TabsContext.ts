import * as React from 'react';

type TabsContextType = {
    currentlyActiveTab?: number;
    wide?: boolean;
    handleClick?: (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
        tabIndex?: number,
        contentValue?: number,
    ) => void;
};

const TabsContext = React.createContext<TabsContextType>({
    currentlyActiveTab: undefined,
    wide: undefined,
    handleClick: undefined,
});

export default TabsContext;
