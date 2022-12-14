import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationActionPropsType } from './type';
import { useHeaderNavigationActionClassName } from './hooks';
import {
    HeaderNavigationActionContainer,
    HeaderNavigationActionRoot,
} from './style';
import {
    HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
    headerNavigationActionRoot,
} from './constants';

/**
 * # HeaderNavigationAction
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/111bcf-header-navigation/b/440e0c)
 *
 * @armor-docs-component
 */
export const HeaderNavigationAction = forwardRef<
    HTMLDivElement,
    HeaderNavigationActionPropsType
>(function HeaderNavigationAction({ className, children, ...restProps }, ref) {
    const classOverride = useHeaderNavigationActionClassName(
        HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationActionRoot
            data-testid={headerNavigationActionRoot}
            {...restProps}
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

export const MemoizedHeaderNavigationAction = memo(HeaderNavigationAction);
