import React, { FunctionComponent } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { usePaperClassName } from './utils/usePaperClassName';
import { PaperRoot } from './style';
import { PaperPropsType } from './type';
import { paperDefaultTheme } from './theme';
import { PAPER_CLASS_PREFIX } from './constants';

export const Paper: FunctionComponent<PaperPropsType> = ({
    className,
    ...restProps
}) => {
    const theme = useComponentTheme(PAPER_CLASS_PREFIX, paperDefaultTheme);

    const classNameRoot = usePaperClassName(PAPER_CLASS_PREFIX, className);

    return <PaperRoot {...restProps} theme={theme} className={classNameRoot} />;
};

Paper.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Paper.propTypes = {};
