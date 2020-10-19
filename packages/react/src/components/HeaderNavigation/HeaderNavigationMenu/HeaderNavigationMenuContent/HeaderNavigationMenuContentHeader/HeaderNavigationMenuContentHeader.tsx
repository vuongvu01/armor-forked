import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../../../utils/hooks';
import {
    HEADER_NAVIGATION_MENU_CONTENT_HEADER_CLASS_PREFIX,
    headerNavigationMenuContentHeaderRoot,
} from './constants';
import {
    HeaderNavigationMenuContentHeaderRoot,
    MenuContentHeaderLabel,
    MenuContentHeaderPack,
    MenuContentHeaderPackItem,
    MenuContentHeaderTitle,
} from './style';
import { useHeaderNavigationMenuContentHeaderClassName } from './utils';
import { HeaderNavigationMenuContentHeaderPropsType } from './type';
import { headerNavigationMenuContentHeaderTheme } from './theme';

export const HeaderNavigationMenuContentHeader: FunctionComponent<HeaderNavigationMenuContentHeaderPropsType> = ({
    className,
    classNames,
    title,
    label,
    image,
    ...restProps
}) => {
    const theme = useComponentTheme(
        HEADER_NAVIGATION_MENU_CONTENT_HEADER_CLASS_PREFIX,
        headerNavigationMenuContentHeaderTheme,
    );

    const classOverride = useHeaderNavigationMenuContentHeaderClassName(
        HEADER_NAVIGATION_MENU_CONTENT_HEADER_CLASS_PREFIX,
        className,
        classNames,
    );

    return (
        <HeaderNavigationMenuContentHeaderRoot
            data-testid={headerNavigationMenuContentHeaderRoot}
            {...restProps}
            theme={theme}
            className={classOverride.Root}
        >
            <MenuContentHeaderPack
                justifyContent="space-between"
                alignItems="center"
                theme={theme}
                className={classOverride.Pack}
            >
                <MenuContentHeaderPackItem
                    flexGrow={3}
                    theme={theme}
                    className={classOverride.PackItem}
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
                </MenuContentHeaderPackItem>
                <MenuContentHeaderPackItem
                    theme={theme}
                    className={classOverride.PackItem}
                >
                    {image || null}
                </MenuContentHeaderPackItem>
            </MenuContentHeaderPack>
        </HeaderNavigationMenuContentHeaderRoot>
    );
};

HeaderNavigationMenuContentHeader.defaultProps = {};

HeaderNavigationMenuContentHeader.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    image: PropTypes.node,
};
