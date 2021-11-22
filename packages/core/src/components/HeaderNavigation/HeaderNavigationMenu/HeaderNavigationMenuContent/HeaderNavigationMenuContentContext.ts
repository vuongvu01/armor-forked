import * as React from 'react';
import { HeaderNavigationMenuContentContextType } from './type';

const HeaderNavigationMenuContentContext = React.createContext<
    HeaderNavigationMenuContentContextType
>({
    isExpanded: undefined,
    setIsExpanded: undefined,
});

export default HeaderNavigationMenuContentContext;
