import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useStackItemClassName } from './hooks';
import { StackItemPropsType } from './type';
import { STACK_ITEM_CLASS_PREFIX, stackItemRoot } from './constants';
import { FlexItem } from '../Flex';

/**
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
