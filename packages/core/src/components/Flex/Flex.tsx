import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useFlexClassName } from './utils';
import { FlexPropsType } from './type';
import { FLEX_CLASS_PREFIX, flexRoot } from './constants';
import { FlexRoot } from './style';

/**
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
    const theme = useComponentTheme(FLEX_CLASS_PREFIX);
    const classOverride = useFlexClassName(FLEX_CLASS_PREFIX, className);

    return (
        <FlexRoot
            data-testid={flexRoot}
            {...restProps}
            theme={theme}
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
