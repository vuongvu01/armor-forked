import React, { forwardRef } from 'react';
import { useComponentTheme, useRootRef } from '@deliveryhero/armor-system';

import {
    HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
    headerNavigationMenuContentRoot,
} from './constants';
import { HeaderNavigationMenuContentRoot } from './style';
import { useHeaderNavigationMenuContentClassName } from './hooks';
import { HeaderNavigationMenuContentPropsType } from './type';

export const HeaderNavigationMenuContent = forwardRef<
    HTMLDivElement,
    HeaderNavigationMenuContentPropsType
>(function HeaderNavigationMenuContent(
    { className, children, ...restProps },
    ref,
) {
    const menuContentRef = useRootRef<HTMLDivElement>(ref);

    const theme = useComponentTheme(
        HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
    );

    const classOverride = useHeaderNavigationMenuContentClassName(
        HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationMenuContentRoot
            data-testid={headerNavigationMenuContentRoot}
            {...restProps}
            theme={theme}
            className={classOverride.Root}
            ref={menuContentRef}
        >
            {children}
        </HeaderNavigationMenuContentRoot>
    );
});

HeaderNavigationMenuContent.defaultProps = {};

HeaderNavigationMenuContent.propTypes = {};
