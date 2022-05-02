import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useFlexItemClassName } from './utils';
import { FlexItemPropsType } from './type';
import { FLEX_ITEM_CLASS_PREFIX, flexItemRoot } from './constants';
import { FlexItemRoot } from './style';

/**
 * # FlexItem
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/04c651-flex/b/41637f)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Flex, FlexItem } from '@deliveryhero/armor';
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
 * <Flex>
 *     <FlexItem>
 *         <div style={style1}>Row Item 1</div>
 *     </FlexItem>
 *     <FlexItem>
 *         <div style={style2}>Row Item 2</div>
 *     </FlexItem>
 *     <FlexItem>
 *         <div style={style3}>Row Item 3</div>
 *     </FlexItem>
 * </Flex>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const FlexItem = forwardRef<HTMLDivElement, FlexItemPropsType>(
    function FlexItem(
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
        const classOverride = useFlexItemClassName(
            FLEX_ITEM_CLASS_PREFIX,
            className,
        );

        return (
            <FlexItemRoot
                data-testid={flexItemRoot}
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

FlexItem.defaultProps = {};

FlexItem.propTypes = {
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

export const MemoizedFlexItem = memo(FlexItem);
