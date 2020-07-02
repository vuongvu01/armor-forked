import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';

import { getTagName, useTypographyClassNames } from './utils';
import { TypographyClassNameProvider } from './style';
import { TypographyPropsType } from './type';
import { typographyDefaultTheme } from './theme';

const CLASS_PREFIX = 'Typography';

export const Typography: FunctionComponent<TypographyPropsType> = ({
    className,
    classNames,
    children,
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
        <TypographyClassNameProvider
            {...restProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            {(forwardedProps: TypographyPropsType) => (
                <TypographyRoot {...forwardedProps}>{children}</TypographyRoot>
            )}
        </TypographyClassNameProvider>
    );
};

Typography.defaultProps = {
    pageTitle: false,
    sectionTitle: false,
    subSectionTitle: false,
    label: false,
    paragraph: false,
    large: false,
    medium: false,
    small: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
Typography.propTypes = {
    pageTitle: PropTypes.bool,
    sectionTitle: PropTypes.bool,
    subSectionTitle: PropTypes.bool,
    label: PropTypes.bool,
    paragraph: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    /** Tag name or component */
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
};
