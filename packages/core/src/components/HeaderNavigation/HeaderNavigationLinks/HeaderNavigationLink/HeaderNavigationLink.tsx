import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationLinkRoot } from './style';
import { HeaderNavigationLinkPropsType } from './type';
import {
    HEADER_NAVIGATION_LINK_CLASS_PREFIX,
    headerNavigationLinkRoot,
} from './constants';
import HeaderNavigationLinksContext from '../HeaderNavigationLinksContext';
import { useHeaderNavigationLinkClassName } from './hooks';
import { ButtonPropsType } from '../../../Button/type';
import { useHeaderNavigationLink } from './hooks/useHeaderNavigationLink';

/**
 * # HeaderNavigationLink
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/111bcf-header-navigation/b/440e0c)
 *
 * @armor-docs-component
 */
export const HeaderNavigationLink = forwardRef<
    HTMLDivElement,
    HeaderNavigationLinkPropsType
>(function HeaderNavigationLink(
    { className, children, tag: Tag = 'span', ...restProps },
    ref,
) {
    const headerNavigationLinksContext = useContext(
        HeaderNavigationLinksContext,
    );

    const classOverride = useHeaderNavigationLinkClassName(
        HEADER_NAVIGATION_LINK_CLASS_PREFIX,
        className,
    );

    const { isActive, onClick, restRootProps } = useHeaderNavigationLink({
        headerNavigationLinksContext,
        ...restProps,
    });

    return (
        <HeaderNavigationLinkRoot
            data-testid={headerNavigationLinkRoot}
            {...restRootProps}
            className={classOverride.Root}
            isActive={isActive}
            onClick={onClick}
        >
            {(forwardedProps: ButtonPropsType) => (
                <Tag {...forwardedProps} ref={ref}>
                    {children}
                </Tag>
            )}
        </HeaderNavigationLinkRoot>
    );
});

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
