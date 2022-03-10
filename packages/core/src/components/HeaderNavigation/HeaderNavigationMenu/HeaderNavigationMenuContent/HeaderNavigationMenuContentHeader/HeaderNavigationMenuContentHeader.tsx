import React, { FunctionComponent } from 'react';
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
 * @armor-docs-component
 */
export const HeaderNavigationMenuContentHeader: FunctionComponent<
    HeaderNavigationMenuContentHeaderPropsType
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
