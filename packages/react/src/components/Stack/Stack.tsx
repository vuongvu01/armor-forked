import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useStackClassName } from './hooks';
import { StackPropsType } from './type';
import { STACK_CLASS_PREFIX, stackRoot } from './constants';
import { Flex } from '../Flex';

/**
 * @armor-docs-component
 */
export const Stack = forwardRef<HTMLDivElement, StackPropsType>(function Stack(
    { className, reverse, justifyContent, alignItems, flexWrap, ...restProps },
    ref,
) {
    const classOverride = useStackClassName(STACK_CLASS_PREFIX, className);

    return (
        <Flex
            data-testid={stackRoot}
            {...restProps}
            className={classOverride.Root}
            direction={reverse ? 'column-reverse' : 'column'}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            ref={ref}
            alignItems={alignItems}
        />
    );
});

Stack.defaultProps = {
    flexWrap: 'nowrap',
};

Stack.propTypes = {
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
