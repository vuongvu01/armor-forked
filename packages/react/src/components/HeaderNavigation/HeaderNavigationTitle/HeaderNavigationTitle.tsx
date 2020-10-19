import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import {
    HEADER_NAVIGATION_TITLE_CLASS_PREFIX,
    headerNavigationTitleRoot,
} from './constants';
import { headerNavigationTitle } from './theme';
import { useHeaderNavigationTitleClassName } from './utils';
import { HeaderNavigationTitleRoot } from './style';
import { HeaderNavigationTitlePropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import HeaderNavigationLinksContext from '../HeaderNavigationLinks/HeaderNavigationLinksContext';

export const HeaderNavigationTitle: FunctionComponent<HeaderNavigationTitlePropsType> = forwardRef(
    function HeaderNavigationLink(
        {
            className,
            classNames,
            to,
            tag: LinkRoot,
            href,
            target,
            rel,
            name,
            children,
            onLinkClick,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            HEADER_NAVIGATION_TITLE_CLASS_PREFIX,
            headerNavigationTitle,
        );

        const classOverride = useHeaderNavigationTitleClassName(
            HEADER_NAVIGATION_TITLE_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <HeaderNavigationLinksContext.Provider value={{ onLinkClick }}>
                <HeaderNavigationTitleRoot
                    data-testid={headerNavigationTitleRoot}
                    {...restProps}
                    theme={theme}
                    className={classOverride.Root}
                    to={to}
                    tag={LinkRoot}
                    href={href}
                    target={target}
                    rel={rel}
                    name={name}
                    ref={ref}
                >
                    {children}
                </HeaderNavigationTitleRoot>
            </HeaderNavigationLinksContext.Provider>
        );
    },
);

HeaderNavigationTitle.defaultProps = {};

HeaderNavigationTitle.propTypes = {
    isActive: PropTypes.bool,
    name: PropTypes.string.isRequired,
    to: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    onLinkClick: PropTypes.func,
};
