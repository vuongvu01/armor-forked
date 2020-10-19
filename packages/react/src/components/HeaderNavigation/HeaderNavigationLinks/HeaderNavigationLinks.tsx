import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationLinksRoot, NavigationPackItemLinks } from './style';
import { HeaderNavigationLinksPropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import {
    HEADER_NAVIGATION_LINKS_CLASS_PREFIX,
    headerNavigationLinksRoot,
} from './constants';
import useHeaderNavigationLinksClassName from './utils/useHeaderNavigationLinksClassName';
import { headerNavigationLinks } from './theme';
import HeaderNavigationLinksContext from './HeaderNavigationLinksContext';

export const HeaderNavigationLinks: FunctionComponent<HeaderNavigationLinksPropsType> = forwardRef(
    function HeaderNavigationLinks(
        { className, classNames, onLinkClick, ...restProps },
        ref,
    ) {
        const theme = useComponentTheme(
            HEADER_NAVIGATION_LINKS_CLASS_PREFIX,
            headerNavigationLinks,
        );

        const classOverride = useHeaderNavigationLinksClassName(
            HEADER_NAVIGATION_LINKS_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <HeaderNavigationLinksContext.Provider value={{ onLinkClick }}>
                <NavigationPackItemLinks
                    theme={theme}
                    className={classOverride.PackItem}
                    flexGrow={1}
                >
                    <HeaderNavigationLinksRoot
                        data-testid={headerNavigationLinksRoot}
                        {...restProps}
                        theme={theme}
                        className={classOverride.NavigationLinksRoot}
                        ref={ref}
                    />
                </NavigationPackItemLinks>
            </HeaderNavigationLinksContext.Provider>
        );
    },
);

HeaderNavigationLinks.defaultProps = {};

HeaderNavigationLinks.propTypes = {
    onLinkClick: PropTypes.func,
};
