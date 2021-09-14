import * as React from 'react';

type StepperContextType = {
    currentIndex?: number;
    vertical?: boolean;
    minimal?: boolean;
    handleClick?: (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
        tabIndex: number,
        contentValue?: number,
    ) => void;
};

export const StepperContext = React.createContext<StepperContextType>({
    currentIndex: undefined,
    vertical: undefined,
    minimal: undefined,
    handleClick: undefined,
});
