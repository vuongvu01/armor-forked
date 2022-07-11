import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { ContextMenu } from '@deliveryhero/armor';
import { HeaderNavigationProfilePropsType } from './type';
import { useHeaderNavigationProfileClassName } from './hooks';
import {
    HeaderNavigationProfileRoot,
    HeaderNavigationProfileWrapper,
} from './style';
import {
    HEADER_NAVIGATION_PROFILE_CLASS_PREFIX,
    HEADER_NAVIGATION_PROFILE_ROOT,
} from './constants';
import useHeaderNavigationProfile from './hooks/useHeaderNavigationProfile';
import { HeaderNavigationProfileButton } from './HeaderNavigationProfileButton';
import { HeaderNavigationProfileMenu } from './HeaderNavigationProfileMenu';

/**
 * # HeaderNavigationProfile
 *
 * @armor-docs-component
 */
export const HeaderNavigationProfile = forwardRef<
    HTMLDivElement,
    HeaderNavigationProfilePropsType
>(function HeaderNavigationProfile(
    {
        className,
        selectedValue,
        onSelectedValueChange,
        usernameInitials,
        menuLinks,
        selectorOptions,
        selectorLabel,
        ...restProps
    },
    ref,
) {
    const classOverride = useHeaderNavigationProfileClassName(
        HEADER_NAVIGATION_PROFILE_CLASS_PREFIX,
        className,
    );

    const { selectedValue: selectedValueProp, setSelectedValue } =
        useHeaderNavigationProfile({
            selectedValue,
            onSelectedValueChange,
        });

    return (
        <HeaderNavigationProfileRoot
            {...restProps}
            className={classOverride.NavigationProfile}
        >
            <HeaderNavigationProfileWrapper
                data-testid={HEADER_NAVIGATION_PROFILE_ROOT}
                ref={ref}
                className={classOverride.NavigationProfileWrapper}
            >
                <ContextMenu
                    trigger={
                        <HeaderNavigationProfileButton
                            usernameInitials={usernameInitials}
                            tabIndex={0}
                        />
                    }
                    align="bottom-start"
                >
                    <HeaderNavigationProfileMenu
                        selectedValue={selectedValueProp}
                        onSelectedValueChange={setSelectedValue}
                        menuLinks={menuLinks}
                        selectorOptions={selectorOptions}
                        selectorLabel={selectorLabel}
                    />
                </ContextMenu>
            </HeaderNavigationProfileWrapper>
        </HeaderNavigationProfileRoot>
    );
});

HeaderNavigationProfile.displayName = HEADER_NAVIGATION_PROFILE_CLASS_PREFIX;

HeaderNavigationProfile.propTypes = {
    children: PropTypes.element,
    selectedValue: PropTypes.string,
    onSelectedValueChange: PropTypes.func,
    usernameInitials: PropTypes.string,
    menuLinks: PropTypes.array,
    selectorOptions: PropTypes.array,
    selectorLabel: PropTypes.string,
};

export const MemoizedHeaderNavigationProfile = memo(HeaderNavigationProfile);
