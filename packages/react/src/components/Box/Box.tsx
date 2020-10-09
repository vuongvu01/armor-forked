import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useClassName, useComponentTheme } from '../../utils/hooks';
import { BoxRoot } from './style';
import { BoxPropsType } from './type';
import { useStyleOverrideBox } from './utils';
import { BOX_CLASS_PREFIX } from './constants';

export const Box: FunctionComponent<BoxPropsType> = ({
    className,
    classNames,
    styles,
    ...restProps
}) => {
    const theme = useComponentTheme(BOX_CLASS_PREFIX);
    const classNameRoot = useClassName(BOX_CLASS_PREFIX, className, classNames);
    const stylesSafe = useStyleOverrideBox(styles);

    return (
        <BoxRoot
            {...restProps}
            theme={theme}
            className={classNameRoot}
            styles={stylesSafe.Root}
        />
    );
};

Box.propTypes = {
    /** Defines element margin */
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element margin top */
    marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element margin bottom */
    marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element margin left */
    marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element margin right */
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element margin left and right */
    marginX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element margin top and bottom */
    marginY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Defines element padding */
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element padding top */
    paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element padding bottom */
    paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element padding left */
    paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element padding right */
    paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element padding left and right */
    paddingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element padding top and bottom */
    paddingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Defines element width */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element minimum width */
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element maximum width */
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Defines element height */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element minimum height */
    minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Defines element maximum height */
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Defines element text alignment */
    textAlign: PropTypes.oneOf(['left', 'middle', 'right']),

    /** Defines element display type */
    display: PropTypes.oneOf([
        'initial',
        'inherit',
        'flex',
        'inline-flex',
        'block',
        'inline-block',
        'inline',
    ]),
};
