import React, { FunctionComponent } from 'react';

import { HeaderNavigationItemRoot } from './style';
import { HeaderNavigationItemPropsType } from './type';
import {
    HEADER_NAVIGATION_ITEM_CLASS_PREFIX,
    headerNavigationItemRoot,
} from './constants';
import { useHeaderNavigationItemClassName } from './hooks';

/**
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
