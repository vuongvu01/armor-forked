import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import {
    HEADER_NAVIGATION_TITLE_CLASS_PREFIX,
    headerNavigationTitleRoot,
} from './constants';
import { headerNavigationTitle } from './theme';
import {
    useHeaderNavigationTitle,
    useHeaderNavigationTitleClassName,
} from './utils';
import { HeaderNavigationTitleRoot } from './style';
import { HeaderNavigationTitlePropsType } from './type';
import { useComponentTheme } from '../../../utils/hooks';
import HeaderNavigationLinksContext from '../HeaderNavigationLinks/HeaderNavigationLinksContext';
import { ButtonPropsType } from '../../Button/type';

export const HeaderNavigationTitle: FunctionComponent<HeaderNavigationTitlePropsType> = forwardRef(
    function HeaderNavigationTitle(
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
        const theme = useComponentTheme(
            HEADER_NAVIGATION_TITLE_CLASS_PREFIX,
            headerNavigationTitle,
        );

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
                    theme={theme}
                    className={classOverride.Root}
                    to={to}
                    href={href}
                    target={target}
                    rel={rel}
                    name={name}
                    ref={ref}
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
    },
);

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
