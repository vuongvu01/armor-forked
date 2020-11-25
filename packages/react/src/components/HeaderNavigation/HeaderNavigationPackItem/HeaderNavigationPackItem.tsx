import React, { FunctionComponent } from 'react';

import { HeaderNavigationPackItemRoot } from './style';
import { HeaderNavigationPackItemPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import {
    HEADER_NAVIGATION_PACK_ITEM_CLASS_PREFIX,
    headerNavigationPackItemRoot,
} from './constants';
import { headerNavigationPackItemDefaultTheme } from './theme';
import { useHeaderNavigationPackItemClassName } from './utils';

export const HeaderNavigationPackItem: FunctionComponent<HeaderNavigationPackItemPropsType> = ({
    className,
    ...restProps
}) => {
    const theme = useComponentTheme(
        HEADER_NAVIGATION_PACK_ITEM_CLASS_PREFIX,
        headerNavigationPackItemDefaultTheme,
    );

    const classOverride = useHeaderNavigationPackItemClassName(
        HEADER_NAVIGATION_PACK_ITEM_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationPackItemRoot
            data-testid={headerNavigationPackItemRoot}
            {...restProps}
            theme={theme}
            className={classOverride.Root}
        />
    );
};
