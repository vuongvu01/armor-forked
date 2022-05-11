import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

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
 * # HeaderNavigationMenu
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/111bcf-header-navigation/b/440e0c)
 *
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
            <HeaderNavigationItem className={classOverride.NavigationMenuItem}>
                <HeaderNavigationMenuRoot
                    data-testid={headerNavigationMenuRoot}
                    {...restProps}
                    className={classOverride.NavigationMenu}
                    ref={menuRootRef}
                >
                    <HeaderNavigationMenuTitleContainer
                        ref={menuTitleRef}
                        className={classOverride.TitleContainer}
                    >
                        <HeaderNavigationMenuTitle
                            className={classOverride.NavigationMenuItem}
                        >
                            {headerTitle}
                        </HeaderNavigationMenuTitle>
                        {headerContent && (
                            <MenuExpansionIndicatorItem
                                className={classOverride.NavigationMenuItem}
                                tabIndex={tabIndex}
                                onKeyPress={handleMenuKeyPress}
                            >
                                <MenuExpansionIndicator
                                    displaySeparator={false}
                                    isExpanded={isExpanded}
                                    className={
                                        classOverride.MenuExpansionIndicator
                                    }
                                />
                            </MenuExpansionIndicatorItem>
                        )}
                    </HeaderNavigationMenuTitleContainer>
                    <HeaderNavigationMenuContentContainer
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

export const MemoizedHeaderNavigationMenu = memo(HeaderNavigationMenu);
