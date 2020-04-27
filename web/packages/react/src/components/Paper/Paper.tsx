import React, { FunctionComponent } from 'react';
// import PropTypes from 'prop-types';
import { useObject } from '../../utils/hooks';
import { useTheme } from '../../styling';

import { useClassNamePaper, useStylesOverridePaper } from './utils';
import { PaperRoot } from './style';
import { PaperPropsType } from './type';

const CLASS_PREFIX = 'Paper';

export const Paper: FunctionComponent<PaperPropsType> = ({
    className,
    classNames,
    styles,
    attributes,
    ...restProps
}) => {
    const theme = useTheme();
    const classNameRoot = useClassNamePaper(
        CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesSafe = useStylesOverridePaper(styles);
    const attributesSafe = useObject(attributes);

    return (
        <PaperRoot
            theme={theme}
            {...restProps}
            {...attributesSafe.Root}
            className={classNameRoot}
            styles={stylesSafe.Root}
        />
    );
};

Paper.defaultProps = {};

/** Support of prop-types is here for project that don't use TypeScript */
Paper.propTypes = {};
