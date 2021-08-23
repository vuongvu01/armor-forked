import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { HeaderNavigationPropsType } from './type';
import { headerNavigationDefaultTheme } from './theme';
import {
    HEADER_NAVIGATION_CLASS_PREFIX,
    headerNavigationRoot,
} from './constants';
import {
    HeaderNavigationContent,
    HeaderNavigationContentItem,
    HeaderNavigationContentLeft,
    HeaderNavigationContentRight,
    HeaderNavigationRoot,
    HeaderNavigationTitleRoot,
} from './style';
import { useHeaderNavigationClassName } from './hooks';
import { HeaderNavigationMenu } from './HeaderNavigationMenu';
import { HeaderNavigationItem } from './HeaderNavigationItem';

/**
 * @armor-docs-component
 */
export const HeaderNavigation = forwardRef<
    HTMLDivElement,
    HeaderNavigationPropsType
>(function HeaderNavigation(
    {
        className,
        /**
         * @deprecated
         * Use defaultExpanded instead
         */
        isMenuExpanded,
        defaultExpanded,
        navigationMenuTitle,
        navigationMenuContent,
        navigationAction,
        links,
        selector,
        title,
        search,
        ...restProps
    },
    ref,
) {
    const theme = useComponentTheme(
        HEADER_NAVIGATION_CLASS_PREFIX,
        headerNavigationDefaultTheme,
    );

    const classOverride = useHeaderNavigationClassName(
        HEADER_NAVIGATION_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationRoot
            data-testid={headerNavigationRoot}
            {...restProps}
            className={classOverride.Root}
            ref={ref}
            theme={theme}
        >
            <HeaderNavigationContent
                theme={theme}
                className={classOverride.HeaderNavigationContent}
            >
                <HeaderNavigationContentItem
                    theme={theme}
                    className={classOverride.HeaderNavigationContentItem}
                >
                    <HeaderNavigationContentLeft
                        theme={theme}
                        className={classOverride.HeaderNavigationContentLeft}
                    >
                        {(navigationMenuTitle || navigationMenuContent) && (
                            <HeaderNavigationMenu
                                headerTitle={navigationMenuTitle}
                                headerContent={navigationMenuContent}
                                isMenuExpanded={isMenuExpanded}
                                defaultExpanded={defaultExpanded}
                            />
                        )}
                        {title && (
                            <HeaderNavigationItem
                                theme={theme}
                                className={classOverride.HeaderNavigationItem}
                            >
                                <HeaderNavigationTitleRoot
                                    theme={theme}
                                    className={classOverride.NavigationTitle}
                                >
                                    {title}
                                </HeaderNavigationTitleRoot>
                            </HeaderNavigationItem>
                        )}
                        {links}
                    </HeaderNavigationContentLeft>
                </HeaderNavigationContentItem>
                <HeaderNavigationContentItem
                    theme={theme}
                    className={classOverride.HeaderNavigationContentItem}
                >
                    <HeaderNavigationContentRight
                        theme={theme}
                        className={classOverride.HeaderNavigationContentRight}
                    >
                        {search}
                        {selector}
                        {navigationAction}
                    </HeaderNavigationContentRight>
                </HeaderNavigationContentItem>
            </HeaderNavigationContent>
        </HeaderNavigationRoot>
    );
});

HeaderNavigation.defaultProps = {
    justifyContent: 'space-between',
};

HeaderNavigation.propTypes = {
    title: PropTypes.node,
    search: PropTypes.node,
    /**
     * @deprecated
     * Use defaultExpanded instead
     */
    isMenuExpanded: PropTypes.bool,
    defaultExpanded: PropTypes.bool,
    justifyContent: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'start',
        'end',
        'left',
        'right',
    ]),
    navigationMenuTitle: PropTypes.node,
    navigationMenuContent: PropTypes.node,
    navigationAction: PropTypes.node,
    links: PropTypes.node,
    selector: PropTypes.node,
};
