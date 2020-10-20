import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationActionPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import { useHeaderNavigationActionClassName } from './utils';
import {
    HeaderNavigationActionContainer,
    HeaderNavigationActionRoot,
} from './style';
import { headerNavigationActionTheme } from './theme';
import {
    HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
    headerNavigationActionRoot,
} from './constants';

export const HeaderNavigationAction: FunctionComponent<HeaderNavigationActionPropsType> = forwardRef(
    function HeaderNavigationAction(
        { className, classNames, children, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
            headerNavigationActionTheme,
        );

        const classOverride = useHeaderNavigationActionClassName(
            HEADER_NAVIGATION_ACTION_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <HeaderNavigationActionRoot
                data-testid={headerNavigationActionRoot}
                {...restProps}
                theme={theme}
                className={classOverride.NavigationAction}
                ref={ref}
            >
                <HeaderNavigationActionContainer alignItems="flex-end">
                    {children}
                </HeaderNavigationActionContainer>
            </HeaderNavigationActionRoot>
        );
    },
);

HeaderNavigationAction.defaultProps = {};

HeaderNavigationAction.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
};
