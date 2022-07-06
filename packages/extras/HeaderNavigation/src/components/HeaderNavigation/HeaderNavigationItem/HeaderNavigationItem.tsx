import React, { FunctionComponent, memo } from 'react';

import { HeaderNavigationItemRoot } from './style';
import { HeaderNavigationItemPropsType } from './type';
import {
    HEADER_NAVIGATION_ITEM_CLASS_PREFIX,
    HEADER_NAVIGATION_ITEM_ROOT,
} from './constants';
import { useHeaderNavigationItemClassName } from './hooks';

/**
 * # HeaderNavigationItem
 *
 *
 * @armor-docs-component
 */
export const HeaderNavigationItem: FunctionComponent<
    HeaderNavigationItemPropsType
> = ({ className, ...restProps }) => {
    const classOverride = useHeaderNavigationItemClassName(
        HEADER_NAVIGATION_ITEM_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationItemRoot
            data-testid={HEADER_NAVIGATION_ITEM_ROOT}
            {...restProps}
            className={classOverride.Root}
        />
    );
};

HeaderNavigationItem.displayName = HEADER_NAVIGATION_ITEM_CLASS_PREFIX;

export const MemoizedHeaderNavigationItem = memo(HeaderNavigationItem);
