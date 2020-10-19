import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useFlexClassName } from './utils';
import { FlexPropsType } from './type';
import { FLEX_CLASS_PREFIX, flexRoot } from './constants';
import { FlexRoot } from './style';

export const Flex: FunctionComponent<FlexPropsType> = forwardRef(function Flex(
    {
        className,
        classNames,
        direction,
        justifyContent,
        alignItems,
        flexWrap,
        ...restProps
    },
    ref,
) {
    const classOverride = useFlexClassName(
        FLEX_CLASS_PREFIX,
        className,
        classNames,
    );

    return (
        <FlexRoot
            data-testid={flexRoot}
            {...restProps}
            className={classOverride.Root}
            direction={direction}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
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
    ref: PropTypes.func,
};