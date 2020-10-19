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
    MenuExpansionIndicator,
    MenuExpansionIndicatorPackItem,
} from './style';
import { Pack, PackItem } from '../../Pack';
import { headerNavigationMenuTheme } from './theme';
import HeaderNavigationMenuContentContext from './HeaderNavigationMenuContent/HeaderNavigationMenuContentContext';
import { DHLogoImage } from './DHLogoImage';
import { useHeaderNavigationMenu } from './utils/useHeaderNavigationMenu';
import { useComponentTheme } from '../../../utils/hooks';
import { HeaderNavigationPackItem } from '../HeaderNavigationPackItem';

export const HeaderNavigationMenu: FunctionComponent<HeaderNavigationMenuPropsType> = forwardRef(
    function HeaderNavigationMenu(
        {
            className,
            classNames,
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
            classNames,
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
                <HeaderNavigationPackItem
                    theme={theme}
                    className={classOverride.PackItem}
                    flexGrow={1}
                >
                    <HeaderNavigationMenuRoot
                        data-testid={headerNavigationMenuRoot}
                        {...restProps}
                        theme={theme}
                        className={classOverride.NavigationMenu}
                    >
                        <Pack alignItems="flex-start" ref={internalRef}>
                            <PackItem
                                theme={theme}
                                className={classOverride.PackItem}
                            >
                                {headerTitle}
                            </PackItem>
                            {headerContent && (
                                <MenuExpansionIndicatorPackItem
                                    theme={theme}
                                    className={classOverride.PackItem}
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
                                </MenuExpansionIndicatorPackItem>
                            )}
                        </Pack>
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
                </HeaderNavigationPackItem>
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
