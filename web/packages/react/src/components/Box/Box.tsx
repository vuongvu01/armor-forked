import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../styling';

import { useClassName, useObject } from '../../utils/hooks';

import { BoxRoot } from './style';
import { BoxPropsType } from './type';
import { useStyleOverrideBox } from './utils';

const CLASS_PREFIX = 'Box';

export const Box: FunctionComponent<BoxPropsType> = ({
    className,
    classNames,
    styles,
    attributes,
    ...restProps
}) => {
    const theme = useTheme();
    const classNameRoot = useClassName(CLASS_PREFIX, className, classNames);
    const stylesSafe = useStyleOverrideBox(styles);
    const attributesSafe = useObject(attributes);

    return (
        <BoxRoot
            {...restProps}
            {...attributesSafe.Root}
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
    textAlignment: PropTypes.oneOf(['left', 'middle', 'right']),
};
