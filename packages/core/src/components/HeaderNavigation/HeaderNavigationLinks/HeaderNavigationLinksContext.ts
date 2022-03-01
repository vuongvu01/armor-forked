import * as React from 'react';

import { HeaderNavigationLinksContextType } from './type';

const HeaderNavigationLinksContext =
    React.createContext<HeaderNavigationLinksContextType>({
        onLinkClick: undefined,
    });

export default HeaderNavigationLinksContext;
