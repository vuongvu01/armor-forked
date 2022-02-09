import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import {
    HEADER_NAVIGATION_MENU_CONTENT_HEADER_CLASS_PREFIX,
    headerNavigationMenuContentHeaderRoot,
} from './constants';
import {
    HeaderNavigationMenuContentHeaderRoot,
    MenuContentHeaderLabel,
    MenuContentHeader,
    MenuContentHeaderItem,
    MenuContentHeaderTitle,
} from './style';
import { useHeaderNavigationMenuContentHeaderClassName } from './hooks';
import { HeaderNavigationMenuContentHeaderPropsType } from './type';
import { headerNavigationMenuContentHeaderTheme } from './theme';

/**
 * @armor-docs-component
 */
export const HeaderNavigationMenuContentHeader: FunctionComponent<
    HeaderNavigationMenuContentHeaderPropsType
> = ({ className, title, label, image, ...restProps }) => {
    const theme = useComponentTheme(
        HEADER_NAVIGATION_MENU_CONTENT_HEADER_CLASS_PREFIX,
        headerNavigationMenuContentHeaderTheme,
    );

    const classOverride = useHeaderNavigationMenuContentHeaderClassName(
        HEADER_NAVIGATION_MENU_CONTENT_HEADER_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationMenuContentHeaderRoot
            data-testid={headerNavigationMenuContentHeaderRoot}
            {...restProps}
            theme={theme}
            className={classOverride.Root}
        >
            <MenuContentHeader
                theme={theme}
                className={classOverride.HeaderNavigationMenuContentHeader}
            >
                <MenuContentHeaderItem
                    theme={theme}
                    className={
                        classOverride.HeaderNavigationMenuContentHeaderItem
                    }
                >
                    {title ? (
                        <MenuContentHeaderTitle
                            label
                            small
                            theme={theme}
                            className={classOverride.Title}
                        >
                            {title}
                        </MenuContentHeaderTitle>
                    ) : null}
                    {label ? (
                        <MenuContentHeaderLabel
                            paragraph
                            medium
                            theme={theme}
                            className={classOverride.Label}
                        >
                            {label}
                        </MenuContentHeaderLabel>
                    ) : null}
                </MenuContentHeaderItem>
                <MenuContentHeaderItem
                    theme={theme}
                    className={
                        classOverride.HeaderNavigationMenuContentHeaderItem
                    }
                >
                    {image || null}
                </MenuContentHeaderItem>
            </MenuContentHeader>
        </HeaderNavigationMenuContentHeaderRoot>
    );
};

HeaderNavigationMenuContentHeader.defaultProps = {};

HeaderNavigationMenuContentHeader.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    image: PropTypes.node,
};
