import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from '@deliveryhero/armor';
import { HeaderNavigationProfileMenuPropsType } from './type';
import { useHeaderNavigationProfileClassName } from './hooks';
import { HeaderNavigationProfileMenuRoot } from './style';
import {
    HEADER_NAVIGATION_PROFILE_CLASS_PREFIX,
    HEADER_NAVIGATION_PROFILE_MENU_ROOT,
} from './constants';
import { HeaderNavigationProfileMenuItem } from './HeaderNavigationProfileMenuItem';

export const HeaderNavigationProfileMenu = forwardRef<
    HTMLDivElement,
    HeaderNavigationProfileMenuPropsType
>(function HeaderNavigationProfileMenu(
    {
        className,
        menuLinks,
        selectorOptions,
        selectorLabel,
        onSelectedValueChange,
        selectedValue,
        ...restProps
    },
    ref,
) {
    const classOverride = useHeaderNavigationProfileClassName(
        HEADER_NAVIGATION_PROFILE_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationProfileMenuRoot
            data-testid={HEADER_NAVIGATION_PROFILE_MENU_ROOT}
            className={classOverride.NavigationProfileMenu}
            ref={ref}
            {...restProps}
        >
            <HeaderNavigationProfileMenuItem>
                <Dropdown
                    options={selectorOptions}
                    onChange={(event) =>
                        onSelectedValueChange?.(event.target.value)
                    }
                    value={selectedValue}
                    enablePortal={false}
                    label={selectorLabel}
                    wide
                />
            </HeaderNavigationProfileMenuItem>
            {menuLinks?.map(
                ({ id, linkLabel, linkAction, href, target }, index) => (
                    <HeaderNavigationProfileMenuItem
                        key={id}
                        linkLabel={linkLabel}
                        linkAction={linkAction}
                        separator={index < menuLinks.length - 1}
                        href={href}
                        target={target}
                    />
                ),
            )}
        </HeaderNavigationProfileMenuRoot>
    );
});

HeaderNavigationProfileMenu.displayName = HEADER_NAVIGATION_PROFILE_MENU_ROOT;

HeaderNavigationProfileMenu.propTypes = {
    menuLinks: PropTypes.array,
    selectorOptions: PropTypes.array,
    selectorLabel: PropTypes.string,
    onSelectedValueChange: PropTypes.func,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const MemoizedHeaderNavigationProfileMenu = memo(
    HeaderNavigationProfileMenu,
);
