import React, { FunctionComponent } from 'react';
// import PropTypes from 'prop-types';
import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';

import { useClassNamePaper, useStylesOverridePaper } from './utils';
import { PaperRoot } from './style';
import { PaperPropsType } from './type';
import { paperDefaultTheme } from './theme';

const CLASS_PREFIX = 'Paper';

export const Paper: FunctionComponent<PaperPropsType> = ({
    className,
    classNames,
    styles,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, paperDefaultTheme);

    const classNameRoot = useClassNamePaper(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesSafe = useStylesOverridePaper(styles);

    return (
        <PaperRoot
            theme={theme}
            {...restProps}
            className={classNameRoot}
            styles={stylesSafe.Root}
        />
    );
};

Paper.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Paper.propTypes = {};
