import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { HEADER_NAVIGATION_PROFILE_CLASS_PREFIX } from './constants';
import { useHeaderNavigationProfileClassName } from './hooks';
import {
    HeaderNavigationProfileButtonRoot,
    HeaderNavigationProfileButtonText,
} from './style';

import { HeaderNavigationProfileButtonPropsType } from './type';

/**
 * # HeaderNavigationProfileButton
 *
 * @armor-docs-component
 */
export const HeaderNavigationProfileButton = forwardRef<
    HTMLDivElement,
    HeaderNavigationProfileButtonPropsType
>(function HeaderNavigationProfileButton(
    { usernameInitials, className, ...restProps },
    ref,
) {
    const classOverride = useHeaderNavigationProfileClassName(
        HEADER_NAVIGATION_PROFILE_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationProfileButtonRoot
            className={classOverride.NavigationProfileButton}
            {...restProps}
            ref={ref}
        >
            <HeaderNavigationProfileButtonText
                className={classOverride.NavigationProfileButtonText}
            >
                {usernameInitials}
            </HeaderNavigationProfileButtonText>
        </HeaderNavigationProfileButtonRoot>
    );
});

/** prop-types are required here for run-time checks */
HeaderNavigationProfileButton.propTypes = {
    usernameInitials: PropTypes.string,
};
