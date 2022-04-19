import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { BoxRoot } from './style';
import { BoxPropsType } from './type';
import { BOX_CLASS_PREFIX } from './constants';
import { useBoxClassName } from './utils/useBoxClassName';

/**
 * # Box
 *
 * Box is used to wrap around and provide margins, paddings and also actual content.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/30fb7c-box/b/30ddfb)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Box } from '@deliveryhero/armor';
 *
 * <div style={{ border: '1px solid green' }}>
 *     <Box
 *         padding="2rem"
 *         margin={20}
 *         style={{ border: '1px solid red' }}
 *     >
 *         80px margin, 2rem padding
 *     </Box>
 * </div>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Box: FunctionComponent<BoxPropsType> = ({
    className,
    ...restProps
}) => {
    const classNameComponents = useBoxClassName(BOX_CLASS_PREFIX, className);

    return <BoxRoot {...restProps} className={classNameComponents.Root} />;
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
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),

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
