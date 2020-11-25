import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import {
    HeaderNavigationLinksContainer,
    HeaderNavigationLinksRoot,
} from './style';
import { HeaderNavigationLinksPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import {
    HEADER_NAVIGATION_LINKS_CLASS_PREFIX,
    headerNavigationLinksRoot,
} from './constants';
import useHeaderNavigationLinksClassName from './utils/useHeaderNavigationLinksClassName';
import { headerNavigationLinks } from './theme';
import HeaderNavigationLinksContext from './HeaderNavigationLinksContext';
import { useHeaderNavigationLinks } from './utils/useHeaderNavigationLinks';

export const HeaderNavigationLinks: FunctionComponent<HeaderNavigationLinksPropsType> = forwardRef(
    function HeaderNavigationLinks({ className, children, ...restProps }, ref) {
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
                    flexGrow={1}
                    ref={ref}
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
    },
);

HeaderNavigationLinks.defaultProps = {
    locationTracking: true,
};

HeaderNavigationLinks.propTypes = {
    onLinkClick: PropTypes.func,
};
