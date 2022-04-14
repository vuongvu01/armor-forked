import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useLinkClassNames } from './hooks/useLinkClassNames';
import { useLink } from './hooks/useLink';
import { LinkRoot } from './style';
import { LinkPropsType, LinkRootPropsType } from './type';
import { LINK_CLASS_PREFIX } from './constants';

/**
 * # Link
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/892a25-link/b/76988e)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Link, Typography } from '@deliveryhero/armor';
 * import { MapIcon } from '@deliveryhero/armor-icons';
 *
 * <Link small>Small</Link>
 * <Link medium>Medium</Link>
 * <Link large>Large</Link>
 * <Link large>Large</Link>
 * <Link disabled>Disabled</Link>
 * <Link underline>Underlined</Link>
 * <Link>
 *     <MapIcon marginRight={2}></MapIcon>
 *     With icon
 * </Link>
 * <Typography>
 *     Please follow the <Link>link</Link> to find out more Go to{' '}
 *     <Link href="https://www.deliveryhero.com" target="_blank">
 *         DeliveryHero
 *     </Link>{' '}
 *     to find out more
 * </Typography>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Link = forwardRef<HTMLAnchorElement, LinkPropsType>(function Link(
    { className, ...props },
    ref,
) {
    const classNameComponents = useLinkClassNames(
        LINK_CLASS_PREFIX,
        className,
        props,
    );

    const { rootProps, children, Tag, tagProps } = useLink(props, ref);

    return (
        <LinkRoot {...rootProps} className={classNameComponents.Root}>
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
