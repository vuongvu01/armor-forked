import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';

import { useTypographyClassNames, useTypographyStylesOverride } from './utils';
import { TypographyRoot } from './style';
import { TypographyPropsType } from './type';
import { typographyDefaultTheme } from './theme';

const CLASS_PREFIX = 'Typography';

export const Typography: FunctionComponent<TypographyPropsType> = ({
    className,
    classNames,
    styles,
    h6,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, typographyDefaultTheme);

    const classNameComponents = useTypographyClassNames(
        CLASS_PREFIX,
        className,
        classNames,
        h6,
    );
    const stylesOverride = useTypographyStylesOverride(styles);

    return (
        <TypographyRoot
            h6={h6}
            theme={theme}
            {...restProps}
            className={classNameComponents.Root}
            styles={stylesOverride.Root}
        />
    );
};

Typography.defaultProps = {
    h6: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
Typography.propTypes = {
    /** Example description */
    h6: PropTypes.bool,
};
