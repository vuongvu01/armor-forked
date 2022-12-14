import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationActionItemPropsType } from './type';
import { useHeaderNavigationActionClassName } from './hooks';
import { HeaderNavigationActionItemRoot } from './style';
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
    const classOverride = useHeaderNavigationActionClassName(
        HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationActionItemRoot
            data-testid={headerNavigationActionItemRoot}
            {...restProps}
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

export const MemoizedHeaderNavigationActionItem = memo(
    HeaderNavigationActionItem,
);
