import * as React from 'react';

import { StepperContextType } from './type';

export const StepperContext = React.createContext<StepperContextType>({
    currentIndex: undefined,
    vertical: undefined,
    minimal: undefined,
    handleClick: undefined,
    isActivityLogView: undefined,
});
