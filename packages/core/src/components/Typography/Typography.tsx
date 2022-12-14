import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useTypographyClassNames } from './hooks/useTypographyClassNames';
import { TypographyRoot } from './style';
import { TypographyPropsType } from './type';
import { TYPOGRAPHY_CLASS_PREFIX } from './constants';
import { useTypography } from './hooks/useTypography';

/**
 * # Typography
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/6198e0-typography/b/63beb3)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Typography } from '@deliveryhero/armor';
 *
 * <Typography pageTitle>
 *     Welcome to Black Mesa
 * </Typography>
 * <Typography sectionTitle>
 *     The temperature on the surface is 62 degrees
 * </Typography>
 * <Typography subSectionTitle>
 *     This train arrives at Sector C
 * </Typography>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Typography = forwardRef<HTMLDivElement, TypographyPropsType>(
    function Typography({ className, children, ...props }, ref) {
        const { rootProps, tagProps, Tag } = useTypography(props, ref);

        const classNameComponents = useTypographyClassNames(
            TYPOGRAPHY_CLASS_PREFIX,
            className,
            props,
        );

        return (
            <TypographyRoot {...rootProps} className={classNameComponents.Root}>
                {(forwardedProps: TypographyPropsType) => (
                    <Tag {...forwardedProps} {...tagProps}>
                        {children}
                    </Tag>
                )}
            </TypographyRoot>
        );
    },
);

Typography.defaultProps = {
    label: false,
    large: false,
    medium: false,
    pageTitle: false,
    paragraph: false,
    sectionTitle: false,
    small: false,
    subSectionTitle: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
Typography.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    pageTitle: PropTypes.bool,
    paragraph: PropTypes.bool,
    sectionTitle: PropTypes.bool,
    small: PropTypes.bool,
    subSectionTitle: PropTypes.bool,
    /** Tag name or component */
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
};

export const MemoizedTypography = memo(Typography);
