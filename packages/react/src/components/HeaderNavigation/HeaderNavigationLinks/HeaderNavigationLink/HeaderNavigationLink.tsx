import React, { forwardRef, FunctionComponent, useContext } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationLinkRoot } from './style';
import { HeaderNavigationLinkPropsType } from './type';
import { useComponentTheme } from '../../../../utils/hooks';
import {
    HEADER_NAVIGATION_LINK_CLASS_PREFIX,
    headerNavigationLinkRoot,
} from './constants';
import { headerNavigationLink } from './theme';
import HeaderNavigationLinksContext from '../HeaderNavigationLinksContext';
import { useHeaderNavigationLinkClassName } from './utils';
import { ButtonPropsType } from '../../../Button/type';
import { useHeaderNavigationLink } from './utils/useHeaderNavigationLink';

export const HeaderNavigationLink: FunctionComponent<HeaderNavigationLinkPropsType> = forwardRef(
    function HeaderNavigationLink(
        { className, children, tag: Tag = 'span', ...restProps },
        ref,
    ) {
        const headerNavigationLinksContext = useContext(
            HeaderNavigationLinksContext,
        );

        const theme = useComponentTheme(
            HEADER_NAVIGATION_LINK_CLASS_PREFIX,
            headerNavigationLink,
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
                theme={theme}
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
