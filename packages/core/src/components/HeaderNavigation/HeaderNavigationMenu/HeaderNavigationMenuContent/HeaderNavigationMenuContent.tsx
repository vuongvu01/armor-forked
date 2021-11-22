import React, { forwardRef, useContext } from 'react';
import {
    useComponentTheme,
    useDetectClickOutsideComponent,
    useRootRef,
} from '@deliveryhero/armor-system';

import {
    HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
    headerNavigationMenuContentRoot,
} from './constants';
import { HeaderNavigationMenuContentRoot } from './style';
import { useHeaderNavigationMenuContentClassName } from './hooks';
import { HeaderNavigationMenuContentPropsType } from './type';
import HeaderNavigationMenuContentContext from './HeaderNavigationMenuContentContext';

export const HeaderNavigationMenuContent = forwardRef<
    HTMLDivElement,
    HeaderNavigationMenuContentPropsType
>(function HeaderNavigationMenuContent(
    { className, children, ...restProps },
    ref,
) {
    const menuContentRef = useRootRef<HTMLDivElement>(ref);
    const { isExpanded, setIsExpanded } = useContext(
        HeaderNavigationMenuContentContext,
    );

    const theme = useComponentTheme(
        HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
    );

    const classOverride = useHeaderNavigationMenuContentClassName(
        HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
        className,
    );

    useDetectClickOutsideComponent(menuContentRef, setIsExpanded, isExpanded);

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
