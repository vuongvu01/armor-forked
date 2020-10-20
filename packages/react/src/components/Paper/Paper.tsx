import React, { FunctionComponent } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useClassNamePaper, useStylesOverridePaper } from './utils';
import { PaperRoot } from './style';
import { PaperPropsType } from './type';
import { paperDefaultTheme } from './theme';
import { PAPER_CLASS_PREFIX } from './constants';

export const Paper: FunctionComponent<PaperPropsType> = ({
    className,
    classNames,
    styles,
    ...restProps
}) => {
    const theme = useComponentTheme(PAPER_CLASS_PREFIX, paperDefaultTheme);

    const classNameRoot = useClassNamePaper(
        PAPER_CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesSafe = useStylesOverridePaper(styles);

    return (
        <PaperRoot
            {...restProps}
            theme={theme}
            className={classNameRoot}
            styles={stylesSafe.Root}
        />
    );
};

Paper.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Paper.propTypes = {};
