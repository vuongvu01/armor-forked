import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';

import { getTagName, useTypographyClassNames } from './utils';
import { TypographyStyle } from './style';
import { TypographyPropsType } from './type';
import { typographyDefaultTheme } from './theme';

const CLASS_PREFIX = 'Typography';

export const Typography: FunctionComponent<TypographyPropsType> = ({
    className,
    classNames,
    children,
    disabled,
    error,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, typographyDefaultTheme);

    const classNameComponents = useTypographyClassNames(
        CLASS_PREFIX,
        className,
        classNames,
        restProps,
    );

    const TypographyRoot = getTagName(restProps);

    return (
        <TypographyStyle
            disabled={disabled}
            error={error}
            theme={theme}
            className={classNameComponents.Root}
            {...restProps}
        >
            {(forwardedProps: TypographyPropsType) => (
                <TypographyRoot {...forwardedProps}>{children}</TypographyRoot>
            )}
        </TypographyStyle>
    );
};

Typography.defaultProps = {
    disabled: false,
    error: false,
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
