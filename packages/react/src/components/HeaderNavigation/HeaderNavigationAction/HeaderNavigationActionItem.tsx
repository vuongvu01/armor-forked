import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationActionItemPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import { useHeaderNavigationActionClassName } from './utils';
import { HeaderNavigationActionItemRoot } from './style';
import { headerNavigationActionTheme } from './theme';
import {
    HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
    headerNavigationActionItemRoot,
} from './constants';

export const HeaderNavigationActionItem: FunctionComponent<HeaderNavigationActionItemPropsType> = forwardRef(
    function HeaderNavigationActionItem(
        { className, children, ...restProps },
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
            >
                {children}
            </HeaderNavigationActionItemRoot>
        );
    },
);

HeaderNavigationActionItem.defaultProps = {};

HeaderNavigationActionItem.propTypes = {
    children: PropTypes.element,
};
