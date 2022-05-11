import React, { FunctionComponent, memo } from 'react';

import { HeaderNavigationItemRoot } from './style';
import { HeaderNavigationItemPropsType } from './type';
import {
    HEADER_NAVIGATION_ITEM_CLASS_PREFIX,
    headerNavigationItemRoot,
} from './constants';
import { useHeaderNavigationItemClassName } from './hooks';

/**
 * # HeaderNavigationItem
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/111bcf-header-navigation/b/440e0c)
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
            data-testid={headerNavigationItemRoot}
            {...restProps}
            className={classOverride.Root}
        />
    );
};

export const MemoizedHeaderNavigationItem = memo(HeaderNavigationItem);
