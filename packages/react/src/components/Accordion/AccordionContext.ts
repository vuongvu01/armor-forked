import * as React from 'react';
import { AccordionContextType } from './type';

const AccordionContext = React.createContext<AccordionContextType>({
    disabled: false,
    isExpanded: false,
    onToggle: () => {},
});

export default AccordionContext;
