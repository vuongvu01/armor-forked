import React, {
    forwardRef,
    FunctionComponent,
    useCallback,
    useContext,
} from 'react';
import PropTypes from 'prop-types';

import {
    HeaderNavigationLinkRoot,
    HrefLinkRoot,
    reactRouterLinkStyle,
} from './style';
import { HeaderNavigationLinkPropsType } from './type';
import { useComponentTheme } from '../../../../utils/hooks';
import {
    HEADER_NAVIGATION_LINK_CLASS_PREFIX,
    headerNavigationLinkRoot,
} from './constants';
import { headerNavigationLink } from './theme';
import HeaderNavigationLinksContext from '../HeaderNavigationLinksContext';
import { useHeaderNavigationLinkClassName } from './utils';

export const HeaderNavigationLink: FunctionComponent<HeaderNavigationLinkPropsType> = forwardRef(
    function HeaderNavigationLink(
        {
            className,
            classNames,
            children,
            isActive,
            to,
            tag: LinkRoot = 'span',
            href,
            target,
            rel = 'noreferrer',
            name,
            ...restProps
        },
        ref,
    ) {
        const { onLinkClick, locationTracking, pathname } = useContext(
            HeaderNavigationLinksContext,
        );

        const theme = useComponentTheme(
            HEADER_NAVIGATION_LINK_CLASS_PREFIX,
            headerNavigationLink,
        );

        const classOverride = useHeaderNavigationLinkClassName(
            HEADER_NAVIGATION_LINK_CLASS_PREFIX,
            className,
            classNames,
        );

        // todo: put all of this inside of a hook
        const handleLinkClick = useCallback(() => {
            if (onLinkClick && name) {
                onLinkClick(name);
            }
        }, [onLinkClick, name]);

        const isLink = to && LinkRoot;
        const isHrefLink = href;

        const url = to || href;
        let isReallyActive = false;
        if (isActive !== undefined) {
            isReallyActive = isActive;
        } else if (locationTracking && url) {
            let currentPathname = pathname;
            if (currentPathname === undefined && window) {
                currentPathname = window.location.pathname;
            }
            if (currentPathname) {
                isReallyActive = currentPathname.startsWith(url);
            }
        }

        let childElements = null;

        if (isLink) {
            childElements = (
                <LinkRoot
                    theme={theme}
                    className={classOverride.Link}
                    style={reactRouterLinkStyle}
                    to={to}
                >
                    {children}
                </LinkRoot>
            );
        } else if (isHrefLink) {
            childElements = (
                <HrefLinkRoot
                    theme={theme}
                    className={classOverride.Href}
                    isActive={isReallyActive}
                    href={href}
                    rel={rel}
                    target={target}
                >
                    {children}
                </HrefLinkRoot>
            );
        }

        return (
            <HeaderNavigationLinkRoot
                data-testid={headerNavigationLinkRoot}
                {...restProps}
                {...(!isLink && isHrefLink ? { href } : {})}
                theme={theme}
                className={classOverride.Root}
                ref={ref}
                isActive={isReallyActive}
                onClick={handleLinkClick}
                to={to}
            >
                {isLink || isHrefLink ? childElements : children}
            </HeaderNavigationLinkRoot>
        );
    },
);

HeaderNavigationLink.defaultProps = {};

HeaderNavigationLink.propTypes = {
    isActive: PropTypes.bool,
    name: PropTypes.string,
    to: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
};
