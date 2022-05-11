import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { usePackItemClassName } from './hooks';
import { PackItemPropsType } from './type';
import { PACK_ITEM_CLASS_PREFIX, packItemRoot } from './constants';
import { FlexItem } from '../Flex';

/**
 * # PackItem
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/80e3d6-pack/b/93ded7)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Pack, PackItem } from '@deliveryhero/armor';
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
 * <Pack>
 *     <PackItem>
 *         <div style={style1}>Item 1</div>
 *     </PackItem>
 *     <PackItem>
 *         <div style={style2}>Item 2</div>
 *     </PackItem>
 *     <PackItem>
 *         <div style={style3}>Item 3</div>
 *     </PackItem>
 * </Pack>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const PackItem = forwardRef<HTMLDivElement, PackItemPropsType>(
    function PackItem(
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
        const classOverride = usePackItemClassName(
            PACK_ITEM_CLASS_PREFIX,
            className,
        );

        return (
            <FlexItem
                data-testid={packItemRoot}
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

PackItem.defaultProps = {};

PackItem.propTypes = {
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

export const MemoizedPackItem = memo(PackItem);
