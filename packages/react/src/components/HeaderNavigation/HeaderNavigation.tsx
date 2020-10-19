import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { HeaderNavigationPropsType } from './type';
import { headerNavigationDefaultTheme } from './theme';
import {
    HEADER_NAVIGATION_CLASS_PREFIX,
    headerNavigationRoot,
} from './constants';
import { HeaderNavigationRoot, HeaderNavigationTitleRoot } from './style';
import { useHeaderNavigationClassName } from './utils';
import { Pack, PackItem } from '../Pack';
import { HeaderNavigationMenu } from './HeaderNavigationMenu';
import { HeaderNavigationPackItem } from './HeaderNavigationPackItem';

export const HeaderNavigation: FunctionComponent<HeaderNavigationPropsType> = forwardRef(
    function HeaderNavigation(
        {
            className,
            classNames,
            isMenuExpanded,
            navigationMenuTitle,
            navigationMenuContent,
            navigationAction,
            links,
            selector,
            title,
            search,
            justifyContent,
            onSearchItemSelect,
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
            classNames,
        );

        return (
            <HeaderNavigationRoot
                data-testid={headerNavigationRoot}
                {...restProps}
                className={classOverride.Root}
                ref={ref}
                theme={theme}
                onSearchItemSelect={onSearchItemSelect}
            >
                <Pack
                    justifyContent={justifyContent}
                    theme={theme}
                    className={classOverride.Pack}
                >
                    <PackItem>
                        <Pack theme={theme} className={classOverride.Pack}>
                            <HeaderNavigationMenu
                                headerTitle={navigationMenuTitle}
                                headerContent={navigationMenuContent}
                                isMenuExpanded={isMenuExpanded}
                            />
                            {title && (
                                <HeaderNavigationPackItem
                                    theme={theme}
                                    className={classOverride.PackItem}
                                    flexGrow={1}
                                >
                                    <HeaderNavigationTitleRoot
                                        theme={theme}
                                        className={
                                            classOverride.NavigationTitle
                                        }
                                    >
                                        {title}
                                    </HeaderNavigationTitleRoot>
                                </HeaderNavigationPackItem>
                            )}
                            {links}
                        </Pack>
                    </PackItem>
                    <PackItem>
                        <Pack
                            alignItems="center"
                            theme={theme}
                            className={classOverride.Pack}
                        >
                            {search}
                            {selector}
                            {navigationAction}
                        </Pack>
                    </PackItem>
                </Pack>
            </HeaderNavigationRoot>
        );
    },
);

HeaderNavigation.defaultProps = {
    justifyContent: 'space-between',
};

HeaderNavigation.propTypes = {
    title: PropTypes.node,
    search: PropTypes.node,
    isMenuExpanded: PropTypes.bool,
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
    ref: PropTypes.func,
};
