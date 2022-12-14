import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import {
    HEADER_NAVIGATION_TITLE_CLASS_PREFIX,
    headerNavigationTitleRoot,
} from './constants';
import {
    useHeaderNavigationTitle,
    useHeaderNavigationTitleClassName,
} from './hooks';
import { HeaderNavigationTitleRoot } from './style';
import { HeaderNavigationTitlePropsType } from './type';
import HeaderNavigationLinksContext from '../HeaderNavigationLinks/HeaderNavigationLinksContext';
import { ButtonPropsType } from '../../Button/type';

/**
 * # HeaderNavigationTitle
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/111bcf-header-navigation/b/440e0c)
 *
 * @armor-docs-component
 */
export const HeaderNavigationTitle = forwardRef<
    HTMLDivElement,
    HeaderNavigationTitlePropsType
>(function HeaderNavigationTitle(
    {
        className,
        to,
        tag: Tag = 'span',
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
    const classOverride = useHeaderNavigationTitleClassName(
        HEADER_NAVIGATION_TITLE_CLASS_PREFIX,
        className,
    );

    const { onClick, restRootProps } = useHeaderNavigationTitle({
        onLinkClick,
        name,
        ...restProps,
    });

    return (
        <HeaderNavigationLinksContext.Provider value={{ onLinkClick }}>
            <HeaderNavigationTitleRoot
                data-testid={headerNavigationTitleRoot}
                {...restRootProps}
                className={classOverride.Root}
                to={to}
                href={href}
                target={target}
                rel={rel}
                name={name}
                onClick={onClick}
            >
                {(forwardedProps: ButtonPropsType) => (
                    <Tag {...forwardedProps} ref={ref}>
                        {children}
                    </Tag>
                )}
            </HeaderNavigationTitleRoot>
        </HeaderNavigationLinksContext.Provider>
    );
});

HeaderNavigationTitle.defaultProps = {};

HeaderNavigationTitle.propTypes = {
    isActive: PropTypes.bool,
    name: PropTypes.string,
    to: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    onLinkClick: PropTypes.func,
};

export const MemoizedHeaderNavigationTitle = memo(HeaderNavigationTitle);
