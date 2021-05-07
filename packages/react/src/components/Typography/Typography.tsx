import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useTypographyClassNames } from './hooks/useTypographyClassNames';
import { TypographyRoot } from './style';
import { TypographyPropsType } from './type';
import { typographyDefaultTheme } from './theme';
import { TYPOGRAPHY_CLASS_PREFIX } from './constants';
import { useTypography } from './hooks/useTypography';

export const Typography = forwardRef<HTMLDivElement, TypographyPropsType>(
    function Typography({ className, children, ...props }, ref) {
        const theme = useComponentTheme(
            TYPOGRAPHY_CLASS_PREFIX,
            typographyDefaultTheme,
        );

        const { rootProps, Tag } = useTypography(props, ref);

        const classNameComponents = useTypographyClassNames(
            TYPOGRAPHY_CLASS_PREFIX,
            className,
            props,
        );

        return (
            <TypographyRoot
                {...rootProps}
                className={classNameComponents.Root}
                theme={theme}
            >
                {(forwardedProps: TypographyPropsType) => (
                    <Tag {...forwardedProps}>{children}</Tag>
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
