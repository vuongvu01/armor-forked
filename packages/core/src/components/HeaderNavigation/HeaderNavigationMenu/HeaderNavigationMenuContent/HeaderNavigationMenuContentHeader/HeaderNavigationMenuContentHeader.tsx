import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

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

/**
 * # HeaderNavigationMenuContentHeader
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/111bcf-header-navigation/b/440e0c)
 *
 * @armor-docs-component
 */
export const HeaderNavigationMenuContentHeader: FC<
    React.PropsWithChildren<HeaderNavigationMenuContentHeaderPropsType>
> = ({ className, title, label, image, ...restProps }) => {
    const classOverride = useHeaderNavigationMenuContentHeaderClassName(
        HEADER_NAVIGATION_MENU_CONTENT_HEADER_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationMenuContentHeaderRoot
            data-testid={headerNavigationMenuContentHeaderRoot}
            {...restProps}
            className={classOverride.Root}
        >
            <MenuContentHeader
                className={classOverride.HeaderNavigationMenuContentHeader}
            >
                <MenuContentHeaderItem
                    className={
                        classOverride.HeaderNavigationMenuContentHeaderItem
                    }
                >
                    {title ? (
                        <MenuContentHeaderTitle
                            label
                            small
                            className={classOverride.Title}
                        >
                            {title}
                        </MenuContentHeaderTitle>
                    ) : null}
                    {label ? (
                        <MenuContentHeaderLabel
                            paragraph
                            medium
                            className={classOverride.Label}
                        >
                            {label}
                        </MenuContentHeaderLabel>
                    ) : null}
                </MenuContentHeaderItem>
                <MenuContentHeaderItem
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

export const MemoizedHeaderNavigationMenuContentHeader = memo(
    HeaderNavigationMenuContentHeader,
);
