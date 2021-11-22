import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { usePackClassName } from './hooks';
import { PackPropsType } from './type';
import { PACK_CLASS_PREFIX, packRoot } from './constants';
import { Flex } from '../Flex';

/**
 * @armor-docs-component
 */
export const Pack = forwardRef<HTMLDivElement, PackPropsType>(function Pack(
    { className, reverse, justifyContent, alignItems, flexWrap, ...restProps },
    ref,
) {
    const classOverride = usePackClassName(PACK_CLASS_PREFIX, className);

    return (
        <Flex
            data-testid={packRoot}
            {...restProps}
            className={classOverride.Root}
            direction={reverse ? 'row-reverse' : 'row'}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            ref={ref}
            alignItems={alignItems}
        />
    );
});

Pack.defaultProps = {
    flexWrap: 'nowrap',
};

Pack.propTypes = {
    reverse: PropTypes.bool,
    justifyContent: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'start',
        'end',
        'left',
        'right',
    ]),
    alignItems: PropTypes.oneOf([
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'first baseline',
        'last baseline',
        'start',
        'end',
        'self-start',
        'self-end',
    ]),
    flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
};
