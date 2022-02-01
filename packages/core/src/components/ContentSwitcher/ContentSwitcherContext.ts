import * as React from 'react';
import { ContentSwitcherContextType } from './type';

export const ContentSwitcherContext =
    React.createContext<ContentSwitcherContextType>({
        switchName: undefined,
        onSwitchNameChange: undefined,
        childrenIndexMap: undefined,
    });
