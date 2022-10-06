import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationProfilePropsType } from './type';
import { useHeaderNavigationProfileClassName } from './hooks';
import {
    HeaderNavigationProfileRoot,
    HeaderNavigationProfileWrapper,
    HeaderNavigationProfileDropdownOptionListWrapper,
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
        open,
        onOpenChange,
        zIndex,
        ...restProps
    },
    ref,
) {
    const classOverride = useHeaderNavigationProfileClassName(
        HEADER_NAVIGATION_PROFILE_CLASS_PREFIX,
        className,
    );

    const {
        selectedValue: selectedValueProp,
        setSelectedValue,
        openState,
        setOpenState,
        listContainerProps,
    } = useHeaderNavigationProfile({
        selectedValue,
        onSelectedValueChange,
        open,
        onOpenChange,
        zIndex,
    });

    return (
        <>
            <HeaderNavigationProfileRoot
                {...restProps}
                className={classOverride.NavigationProfile}
            >
                <HeaderNavigationProfileWrapper
                    data-testid={HEADER_NAVIGATION_PROFILE_ROOT}
                    ref={ref}
                    className={classOverride.NavigationProfileWrapper}
                >
                    <HeaderNavigationProfileDropdownOptionListWrapper
                        trigger={
                            <HeaderNavigationProfileButton
                                usernameInitials={usernameInitials}
                                tabIndex={0}
                                open={openState}
                            />
                        }
                        open={openState}
                        align="bottom-start"
                        onOpenChange={(openVal) => {
                            setOpenState(openVal);
                        }}
                        className={classOverride.NavigationProfileDropdownOptionListWrapper}
                        {...listContainerProps}
                    >
                        <HeaderNavigationProfileMenu
                            selectedValue={selectedValueProp}
                            onSelectedValueChange={setSelectedValue}
                            menuLinks={menuLinks}
                            selectorOptions={selectorOptions}
                            selectorLabel={selectorLabel}
                        />
                    </HeaderNavigationProfileDropdownOptionListWrapper>
                </HeaderNavigationProfileWrapper>
            </HeaderNavigationProfileRoot>
        </>
    );
});

HeaderNavigationProfile.displayName = HEADER_NAVIGATION_PROFILE_CLASS_PREFIX;

HeaderNavigationProfile.propTypes = {
    children: PropTypes.element,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelectedValueChange: PropTypes.func,
    usernameInitials: PropTypes.string,
    menuLinks: PropTypes.array,
    selectorOptions: PropTypes.array,
    selectorLabel: PropTypes.string,
};

export const MemoizedHeaderNavigationProfile = memo(HeaderNavigationProfile);
