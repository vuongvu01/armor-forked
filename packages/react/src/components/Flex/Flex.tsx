import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../styling';
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
    const theme = useTheme();

    const classOverride = useFlexClassName(
        FLEX_CLASS_PREFIX,
        className,
        classNames,
    );

    return (
        <FlexRoot
            className={classOverride.Root}
            data-testid={flexRoot}
            direction={direction}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            ref={ref}
            theme={theme}
            alignItems={alignItems}
            {...restProps}
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
