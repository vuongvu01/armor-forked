import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useStackItemClassName } from './utils';
import { StackItemPropsType } from './type';
import { STACK_ITEM_CLASS_PREFIX, stackItemRoot } from './constants';
import { FlexItem } from '../Flex';

export const StackItem: FunctionComponent<StackItemPropsType> = forwardRef(
    function StackItem(
        {
            className,
            classNames,
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
            classNames,
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
    ref: PropTypes.func,
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
