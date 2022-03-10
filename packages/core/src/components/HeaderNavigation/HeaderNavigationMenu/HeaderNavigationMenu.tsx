import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { HeaderNavigationMenuPropsType } from './type';
import {
    HEADER_NAVIGATION_MENU_CLASS_PREFIX,
    headerNavigationMenuRoot,
} from './constants';
import { useHeaderNavigationMenuClassName } from './hooks';
import {
    HeaderNavigationMenuContentContainer,
    HeaderNavigationMenuRoot,
    HeaderNavigationMenuTitle,
    HeaderNavigationMenuTitleContainer,
    MenuExpansionIndicator,
    MenuExpansionIndicatorItem,
} from './style';
import HeaderNavigationMenuContentContext from './HeaderNavigationMenuContent/HeaderNavigationMenuContentContext';
import { DHLogoImage } from './DHLogoImage';
import { useHeaderNavigationMenu } from './hooks/useHeaderNavigationMenu';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

/**
 * @armor-docs-component
 */
export const HeaderNavigationMenu = forwardRef<
    HTMLDivElement,
    HeaderNavigationMenuPropsType
>(function HeaderNavigationMenu(
    {
        className,
        headerTitle = <DHLogoImage color="currentColor" />,
        headerContent,
        tabIndex = 0,
        ...restProps
    },
    ref,
) {
    const theme = useComponentTheme(HEADER_NAVIGATION_MENU_CLASS_PREFIX);

    const classOverride = useHeaderNavigationMenuClassName(
        HEADER_NAVIGATION_MENU_CLASS_PREFIX,
        className,
    );

    const {
        menuTitleRef,
        menuRootRef,
        isExpanded,
        setIsExpanded,
        handleMenuKeyPress,
    } = useHeaderNavigationMenu(restProps, ref);

    const contextValue = { isExpanded, setIsExpanded };

    return (
        <HeaderNavigationMenuContentContext.Provider value={contextValue}>
            <HeaderNavigationItem
                theme={theme}
                className={classOverride.NavigationMenuItem}
            >
                <HeaderNavigationMenuRoot
                    data-testid={headerNavigationMenuRoot}
                    {...restProps}
                    theme={theme}
                    className={classOverride.NavigationMenu}
                    ref={menuRootRef}
                >
                    <HeaderNavigationMenuTitleContainer
                        ref={menuTitleRef}
                        theme={theme}
                        className={classOverride.TitleContainer}
                    >
                        <HeaderNavigationMenuTitle
                            theme={theme}
                            className={classOverride.NavigationMenuItem}
                        >
                            {headerTitle}
                        </HeaderNavigationMenuTitle>
                        {headerContent && (
                            <MenuExpansionIndicatorItem
                                theme={theme}
                                className={classOverride.NavigationMenuItem}
                                tabIndex={tabIndex}
                                onKeyPress={handleMenuKeyPress}
                            >
                                <MenuExpansionIndicator
                                    displaySeparator={false}
                                    isExpanded={isExpanded}
                                    theme={theme}
                                    className={
                                        classOverride.MenuExpansionIndicator
                                    }
                                />
                            </MenuExpansionIndicatorItem>
                        )}
                    </HeaderNavigationMenuTitleContainer>
                    <HeaderNavigationMenuContentContainer
                        theme={theme}
                        isExpanded={isExpanded}
                        className={classOverride.NavigationMenuContentContainer}
                    >
                        {isExpanded && headerContent}
                    </HeaderNavigationMenuContentContainer>
                </HeaderNavigationMenuRoot>
            </HeaderNavigationItem>
        </HeaderNavigationMenuContentContext.Provider>
    );
});

HeaderNavigationMenu.defaultProps = {
    tabIndex: 0,
    defaultExpanded: false,
};

HeaderNavigationMenu.propTypes = {
    headerTitle: PropTypes.node,
    headerContent: PropTypes.node,
    /**
     * @deprecated
     * Use defaultExpanded instead
     */
    isMenuExpanded: PropTypes.bool,
    defaultExpanded: PropTypes.bool,
    tabIndex: PropTypes.number,
};
