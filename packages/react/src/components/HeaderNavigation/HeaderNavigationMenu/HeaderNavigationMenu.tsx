import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationMenuPropsType } from './type';
import {
    HEADER_NAVIGATION_MENU_CLASS_PREFIX,
    headerNavigationMenuRoot,
} from './constants';
import { useHeaderNavigationMenuClassName } from './utils';
import {
    HeaderNavigationMenuContentContainer,
    HeaderNavigationMenuRoot,
    HeaderNavigationMenuTitle,
    HeaderNavigationMenuTitleContainer,
    MenuExpansionIndicator,
    MenuExpansionIndicatorItem,
} from './style';
import { headerNavigationMenuTheme } from './theme';
import HeaderNavigationMenuContentContext from './HeaderNavigationMenuContent/HeaderNavigationMenuContentContext';
import { DHLogoImage } from './DHLogoImage';
import { useHeaderNavigationMenu } from './utils/useHeaderNavigationMenu';
import { useComponentTheme } from '../../../utils/hooks';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

export const HeaderNavigationMenu: FunctionComponent<HeaderNavigationMenuPropsType> = forwardRef(
    function HeaderNavigationMenu(
        {
            className,
            headerTitle = <DHLogoImage />,
            headerContent,
            isMenuExpanded,
            tabIndex,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            HEADER_NAVIGATION_MENU_CLASS_PREFIX,
            headerNavigationMenuTheme,
        );

        const classOverride = useHeaderNavigationMenuClassName(
            HEADER_NAVIGATION_MENU_CLASS_PREFIX,
            className,
        );

        const {
            internalRef,
            isExpanded,
            setIsExpanded,
        } = useHeaderNavigationMenu({
            ref,
            isMenuExpanded,
        });

        const contextValue = { isExpanded, setIsExpanded };

        return (
            <HeaderNavigationMenuContentContext.Provider value={contextValue}>
                <HeaderNavigationItem
                    theme={theme}
                    className={classOverride.NavigationMenuItem}
                    flexGrow={1}
                >
                    <HeaderNavigationMenuRoot
                        data-testid={headerNavigationMenuRoot}
                        {...restProps}
                        theme={theme}
                        className={classOverride.NavigationMenu}
                    >
                        <HeaderNavigationMenuTitleContainer ref={internalRef}>
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
                                >
                                    <MenuExpansionIndicator
                                        displaySeparator={false}
                                        isExpanded={isExpanded}
                                        theme={theme}
                                        className={
                                            classOverride.MenuExpansionIndicator
                                        }
                                        tabIndex={tabIndex}
                                    />
                                </MenuExpansionIndicatorItem>
                            )}
                        </HeaderNavigationMenuTitleContainer>
                        <HeaderNavigationMenuContentContainer
                            theme={theme}
                            isExpanded={isExpanded}
                            className={
                                classOverride.NavigationMenuContentContainer
                            }
                        >
                            {isExpanded && headerContent}
                        </HeaderNavigationMenuContentContainer>
                    </HeaderNavigationMenuRoot>
                </HeaderNavigationItem>
            </HeaderNavigationMenuContentContext.Provider>
        );
    },
);

HeaderNavigationMenu.defaultProps = {
    tabIndex: 0,
    isMenuExpanded: false,
};

HeaderNavigationMenu.propTypes = {
    headerTitle: PropTypes.node,
    headerContent: PropTypes.node,
    isMenuExpanded: PropTypes.bool,
    tabIndex: PropTypes.number,
};
