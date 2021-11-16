import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useLinkClassNames } from './hooks/useLinkClassNames';
import { useLink } from './hooks/useLink';
import { LinkRoot } from './style';
import { LinkPropsType, LinkRootPropsType } from './type';
import { LINK_CLASS_PREFIX } from './constants';

/**
 * @armor-docs-component
 */
export const Link = forwardRef<HTMLAnchorElement, LinkPropsType>(function Link(
    { className, ...props },
    ref,
) {
    const theme = useComponentTheme(LINK_CLASS_PREFIX);
    const classNameComponents = useLinkClassNames(
        LINK_CLASS_PREFIX,
        className,
        props,
    );

    const { rootProps, children, Tag, tagProps } = useLink(props, ref);

    return (
        <LinkRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            {(forwardedProps: LinkRootPropsType) => (
                <Tag {...forwardedProps} {...tagProps}>
                    {children}
                </Tag>
            )}
        </LinkRoot>
    );
});

Link.defaultProps = {
    small: false,
    medium: false,
    large: false,
    pressed: false,
    disabled: false,
    underline: false,
};

/** prop-types are required here for run-time checks */
Link.propTypes = {
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    pressed: PropTypes.bool,
    disabled: PropTypes.bool,
    underline: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
    to: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
};
