import React, {
    forwardRef,
    FunctionComponent,
    useContext,
    useRef,
} from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../../utils/hooks';
import {
    HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
    headerNavigationMenuContentRoot,
} from './constants';
import { HeaderNavigationMenuContentRoot } from './style';
import { useHeaderNavigationMenuContentClassName } from './utils';
import { HeaderNavigationMenuContentPropsType } from './type';
import { headerNavigationMenuContentTheme } from './theme';
import {
    useDetectClickOutsideComponent,
    useInternalRef,
} from '../../../../utils';
import HeaderNavigationMenuContentContext from './HeaderNavigationMenuContentContext';

export const HeaderNavigationMenuContent: FunctionComponent<HeaderNavigationMenuContentPropsType> = forwardRef(
    function HeaderNavigationMenuContent(
        { className, children, ...restProps },
        ref,
    ) {
        const menuContentRef = useRef<HTMLDivElement>(null);
        const { isExpanded, setIsExpanded } = useContext(
            HeaderNavigationMenuContentContext,
        );

        const theme = useComponentTheme(
            HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
            headerNavigationMenuContentTheme,
        );

        const classOverride = useHeaderNavigationMenuContentClassName(
            HEADER_NAVIGATION_MENU_CONTENT_CLASS_PREFIX,
            className,
        );

        useInternalRef(ref, menuContentRef);

        useDetectClickOutsideComponent(
            menuContentRef,
            setIsExpanded,
            isExpanded,
        );

        return (
            <HeaderNavigationMenuContentRoot
                data-testid={headerNavigationMenuContentRoot}
                {...restProps}
                theme={theme}
                className={classOverride.Root}
                ref={menuContentRef}
            >
                {children}
            </HeaderNavigationMenuContentRoot>
        );
    },
);

HeaderNavigationMenuContent.defaultProps = {};

HeaderNavigationMenuContent.propTypes = {
    setIsExpanded: PropTypes.func,
};
