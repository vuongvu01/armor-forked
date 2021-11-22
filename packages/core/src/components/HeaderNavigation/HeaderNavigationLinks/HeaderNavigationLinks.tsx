import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import {
    HeaderNavigationLinksContainer,
    HeaderNavigationLinksRoot,
} from './style';
import { HeaderNavigationLinksPropsType } from './type';
import {
    HEADER_NAVIGATION_LINKS_CLASS_PREFIX,
    headerNavigationLinksRoot,
} from './constants';
import useHeaderNavigationLinksClassName from './hooks/useHeaderNavigationLinksClassName';
import { headerNavigationLinks } from './theme';
import HeaderNavigationLinksContext from './HeaderNavigationLinksContext';
import { useHeaderNavigationLinks } from './hooks/useHeaderNavigationLinks';

export const HeaderNavigationLinks = forwardRef<
    HTMLDivElement,
    HeaderNavigationLinksPropsType
>(function HeaderNavigationLinks({ className, children, ...restProps }, ref) {
    const theme = useComponentTheme(
        HEADER_NAVIGATION_LINKS_CLASS_PREFIX,
        headerNavigationLinks,
    );

    const classOverride = useHeaderNavigationLinksClassName(
        HEADER_NAVIGATION_LINKS_CLASS_PREFIX,
        className,
    );

    const { result, restProps: restRootProps } = useHeaderNavigationLinks(
        restProps,
    );

    return (
        <HeaderNavigationLinksContext.Provider
            value={result.headerNavigationLinksContextValue}
        >
            <HeaderNavigationLinksRoot
                data-testid={headerNavigationLinksRoot}
                {...restRootProps}
                theme={theme}
                className={classOverride.Root}
            >
                <HeaderNavigationLinksContainer
                    theme={theme}
                    className={classOverride.Container}
                >
                    {children}
                </HeaderNavigationLinksContainer>
            </HeaderNavigationLinksRoot>
        </HeaderNavigationLinksContext.Provider>
    );
});

HeaderNavigationLinks.defaultProps = {
    locationTracking: true,
};

HeaderNavigationLinks.propTypes = {
    onLinkClick: PropTypes.func,
};
