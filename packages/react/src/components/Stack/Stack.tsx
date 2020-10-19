import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useStackClassName } from './utils';
import { StackPropsType } from './type';
import { STACK_CLASS_PREFIX, stackRoot } from './constants';
import { Flex } from '../Flex';
import { useTheme } from '../../styling';

export const Stack: FunctionComponent<StackPropsType> = forwardRef(
    function Stack(
        {
            className,
            classNames,
            reverse,
            justifyContent,
            alignItems,
            flexWrap,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();

        const classOverride = useStackClassName(
            STACK_CLASS_PREFIX,
            className,
            classNames,
        );

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
                theme={theme}
            />
        );
    },
);

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
    ref: PropTypes.func,
};
