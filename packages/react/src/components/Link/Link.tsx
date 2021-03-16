import React, { FC, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useLinkClassNames } from './hooks/useLinkClassNames';
import { useLink } from './hooks/useLink';
import { LinkRoot } from './style';
import { LinkPropsType } from './type';
import { LINK_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../utils/hooks';

export const Link: FC<LinkPropsType> = forwardRef(function Link(
    { className, ...props },
    ref,
) {
    const theme = useComponentTheme(LINK_CLASS_PREFIX);
    const classNameComponents = useLinkClassNames(
        LINK_CLASS_PREFIX,
        className,
        props,
    );

    const { rootProps } = useLink(props, ref);

    return (
        <LinkRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
            ref={ref}
        />
    );
});

Link.defaultProps = {
    small: false,
    medium: false,
    large: false,
    pressed: false,
    disabled: false,
    inline: false,
};

/** prop-types are required here for run-time checks */
Link.propTypes = {
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    pressed: PropTypes.bool,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
};
