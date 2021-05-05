import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationActionItemPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import { useHeaderNavigationActionClassName } from './hooks';
import { HeaderNavigationActionItemRoot } from './style';
import { headerNavigationActionTheme } from './theme';
import {
    HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
    headerNavigationActionItemRoot,
} from './constants';

export const HeaderNavigationActionItem = forwardRef<
    HTMLDivElement,
    HeaderNavigationActionItemPropsType
>(function HeaderNavigationActionItem(
    { className, children, tabIndex = 0, ...restProps },
    ref,
) {
    const theme = useComponentTheme(
        HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
        headerNavigationActionTheme,
    );

    const classOverride = useHeaderNavigationActionClassName(
        HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationActionItemRoot
            data-testid={headerNavigationActionItemRoot}
            {...restProps}
            theme={theme}
            className={classOverride.NavigationActionItem}
            ref={ref}
            tabIndex={tabIndex}
        >
            {children}
        </HeaderNavigationActionItemRoot>
    );
});

HeaderNavigationActionItem.defaultProps = {};

HeaderNavigationActionItem.propTypes = {
    children: PropTypes.element,
};
