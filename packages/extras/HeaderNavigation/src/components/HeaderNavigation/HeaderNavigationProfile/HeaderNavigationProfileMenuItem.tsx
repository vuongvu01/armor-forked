import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { Divider, Flex, FlexItem } from '@deliveryhero/armor';
import { ArrowRightIcon } from '@deliveryhero/armor-icons';
import { HeaderNavigationProfileMenuItemPropsType } from './type';
import { useHeaderNavigationProfileClassName } from './hooks';
import {
    HeaderNavigationProfileMenuItemRoot,
    HeaderNavigationProfileMenuItemLabel,
} from './style';
import {
    HEADER_NAVIGATION_PROFILE_CLASS_PREFIX,
    HEADER_NAVIGATION_PROFILE_MENU_ITEM_ROOT,
} from './constants';

export const HeaderNavigationProfileMenuItem = forwardRef<
    HTMLDivElement,
    HeaderNavigationProfileMenuItemPropsType
>(function HeaderNavigationProfileMenuItem(
    {
        className,
        linkAction,
        linkLabel,
        children,
        href,
        separator,
        target,
        ...restProps
    },
    ref,
) {
    const classOverride = useHeaderNavigationProfileClassName(
        HEADER_NAVIGATION_PROFILE_CLASS_PREFIX,
        className,
    );

    return (
        <>
            <HeaderNavigationProfileMenuItemRoot
                data-testid={HEADER_NAVIGATION_PROFILE_MENU_ITEM_ROOT}
                {...restProps}
                className={classOverride.NavigationProfileMenuItem}
                ref={ref}
                onClick={() => linkAction?.()}
            >
                {linkLabel && (
                    <Flex justifyContent="space-between">
                        {!href && <FlexItem>{linkLabel}</FlexItem>}
                        {href && (
                            <HeaderNavigationProfileMenuItemLabel
                                href={href}
                                target={target}
                            >
                                {linkLabel}
                            </HeaderNavigationProfileMenuItemLabel>
                        )}
                        <FlexItem>
                            <ArrowRightIcon />
                        </FlexItem>
                    </Flex>
                )}
                {children}
            </HeaderNavigationProfileMenuItemRoot>
            {separator && <Divider color={'neutral.03'} />}
        </>
    );
});

HeaderNavigationProfileMenuItem.displayName =
    HEADER_NAVIGATION_PROFILE_MENU_ITEM_ROOT;

HeaderNavigationProfileMenuItem.propTypes = {
    children: PropTypes.element,
    linkLabel: PropTypes.string,
    linkAction: PropTypes.func,
    separator: PropTypes.bool,
    href: PropTypes.string,
};

export const MemoizedHeaderNavigationProfileMenuItem = memo(
    HeaderNavigationProfileMenuItem,
);
