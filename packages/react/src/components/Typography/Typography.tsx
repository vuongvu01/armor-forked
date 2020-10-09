import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { getTagName, useTypographyClassNames } from './utils';
import { TypographyStyle } from './style';
import { TypographyPropsType } from './type';
import { typographyDefaultTheme } from './theme';
import { TYPOGRAPHY_CLASS_PREFIX } from './constants';

export const Typography: FunctionComponent<TypographyPropsType> = ({
    className,
    classNames,
    children,
    disabled,
    error,
    ...restProps
}) => {
    const theme = useComponentTheme(
        TYPOGRAPHY_CLASS_PREFIX,
        typographyDefaultTheme,
    );

    const classNameComponents = useTypographyClassNames(
        TYPOGRAPHY_CLASS_PREFIX,
        className,
        classNames,
        restProps,
    );

    const TypographyRoot = getTagName(restProps);

    return (
        <TypographyStyle
            {...restProps}
            className={classNameComponents.Root}
            disabled={disabled}
            error={error}
            theme={theme}
        >
            {(forwardedProps: TypographyPropsType) => (
                <TypographyRoot {...forwardedProps}>{children}</TypographyRoot>
            )}
        </TypographyStyle>
    );
};

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
