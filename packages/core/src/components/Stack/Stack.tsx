import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useStackClassName } from './hooks';
import { StackPropsType } from './type';
import { STACK_CLASS_PREFIX, stackRoot } from './constants';
import { Flex } from '../Flex';

/**
 * # Stack
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/03c9ab-stack/b/280576)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Stack, StackItem } from '@deliveryhero/armor';
 *
 * const style1 = {
 *     background: 'yellowgreen',
 *     padding: '20px',
 *     color: 'white',
 * };
 *
 * const style2 = { background: 'green', padding: '20px', color: 'white' };
 *
 * const style3 = {
 *     background: 'darkseagreen',
 *     padding: '20px',
 *     color: 'white',
 * };
 *
 * <Stack>
 *     <StackItem>
 *         <div style={style1}>Item 1</div>
 *     </StackItem>
 *     <StackItem>
 *         <div style={style2}>Item 2</div>
 *     </StackItem>
 *     <StackItem>
 *         <div style={style3}>Item 3</div>
 *     </StackItem>
 * </Stack>
 * ```
 * ***
 *
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

export const MemoizedStack = memo(Stack);
