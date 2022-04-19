import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useFlexClassName } from './utils';
import { FlexPropsType } from './type';
import { FLEX_CLASS_PREFIX, flexRoot } from './constants';
import { FlexRoot } from './style';

/**
 * # Flex
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
export const Flex = forwardRef<HTMLDivElement, FlexPropsType>(function Flex(
    {
        className,
        direction,
        justifyContent,
        alignContent,
        alignItems,
        flexWrap,
        ...restProps
    },
    ref,
) {
    const classOverride = useFlexClassName(FLEX_CLASS_PREFIX, className);

    return (
        <FlexRoot
            data-testid={flexRoot}
            {...restProps}
            className={classOverride.Root}
            direction={direction}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            alignContent={alignContent}
            ref={ref}
            alignItems={alignItems}
        />
    );
});

Flex.defaultProps = {
    direction: 'row',
    flexWrap: 'nowrap',
};

Flex.propTypes = {
    direction: PropTypes.oneOf([
        'row',
        'row-reverse',
        'column',
        'column-reverse',
    ]),
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
    alignContent: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'start',
        'end',
        'stretch',
        'baseline',
        'first baseline',
        'last baseline',
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
