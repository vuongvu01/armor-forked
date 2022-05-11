import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { usePackClassName } from './hooks';
import { PackPropsType } from './type';
import { PACK_CLASS_PREFIX, packRoot } from './constants';
import { Flex } from '../Flex';

/**
 * # Pack
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

export const MemoizedPack = memo(Pack);
