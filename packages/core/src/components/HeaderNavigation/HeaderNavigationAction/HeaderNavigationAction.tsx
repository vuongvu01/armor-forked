import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { HeaderNavigationActionPropsType } from './type';
import { useHeaderNavigationActionClassName } from './hooks';
import {
    HeaderNavigationActionContainer,
    HeaderNavigationActionRoot,
} from './style';
import { headerNavigationActionTheme } from './theme';
import {
    HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
    headerNavigationActionRoot,
} from './constants';

export const HeaderNavigationAction = forwardRef<
    HTMLDivElement,
    HeaderNavigationActionPropsType
>(function HeaderNavigationAction({ className, children, ...restProps }, ref) {
    const theme = useComponentTheme(
        HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
        headerNavigationActionTheme,
    );

    const classOverride = useHeaderNavigationActionClassName(
        HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationActionRoot
            data-testid={headerNavigationActionRoot}
            {...restProps}
            theme={theme}
            className={classOverride.Action}
        >
            <HeaderNavigationActionContainer
                className={classOverride.ActionContainer}
            >
                {children}
            </HeaderNavigationActionContainer>
        </HeaderNavigationActionRoot>
    );
});

HeaderNavigationAction.defaultProps = {};

HeaderNavigationAction.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
};
