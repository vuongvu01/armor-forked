import React, { FunctionComponent } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { HeaderNavigationItemRoot } from './style';
import { HeaderNavigationItemPropsType } from './type';
import {
    HEADER_NAVIGATION_ITEM_CLASS_PREFIX,
    headerNavigationItemRoot,
} from './constants';
import { headerNavigationItemDefaultTheme } from './theme';
import { useHeaderNavigationItemClassName } from './hooks';

export const HeaderNavigationItem: FunctionComponent<HeaderNavigationItemPropsType> = ({
    className,
    ...restProps
}) => {
    const theme = useComponentTheme(
        HEADER_NAVIGATION_ITEM_CLASS_PREFIX,
        headerNavigationItemDefaultTheme,
    );

    const classOverride = useHeaderNavigationItemClassName(
        HEADER_NAVIGATION_ITEM_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationItemRoot
            data-testid={headerNavigationItemRoot}
            {...restProps}
            theme={theme}
            className={classOverride.Root}
        />
    );
};
