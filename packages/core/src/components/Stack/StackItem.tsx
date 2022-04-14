import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useStackItemClassName } from './hooks';
import { StackItemPropsType } from './type';
import { STACK_ITEM_CLASS_PREFIX, stackItemRoot } from './constants';
import { FlexItem } from '../Flex';

/**
 * # StackItem
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
export const StackItem = forwardRef<HTMLDivElement, StackItemPropsType>(
    function StackItem(
        {
            className,
            flexGrow,
            flexShrink,
            flexBasis,
            alignSelf,
            order,
            ...restProps
        },
        ref,
    ) {
        const classOverride = useStackItemClassName(
            STACK_ITEM_CLASS_PREFIX,
            className,
        );

        return (
            <FlexItem
                data-testid={stackItemRoot}
                {...restProps}
                className={classOverride.Root}
                flexGrow={flexGrow}
                flexShrink={flexShrink}
                flexBasis={flexBasis}
                alignSelf={alignSelf}
                order={order}
                ref={ref}
            />
        );
    },
);

StackItem.defaultProps = {};

StackItem.propTypes = {
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    flexBasis: PropTypes.string,
    order: PropTypes.number,
    alignSelf: PropTypes.oneOf([
        'auto',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'stretch',
    ]),
};
