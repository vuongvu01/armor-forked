import * as React from 'react';
import { AccordionContextType } from './type';

export const AccordionContext = React.createContext<AccordionContextType>({
    disabled: false,
    isExpanded: false,
    onToggle: () => {},
});
