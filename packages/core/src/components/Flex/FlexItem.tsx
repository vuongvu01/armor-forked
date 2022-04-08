import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useFlexItemClassName } from './utils';
import { FlexItemPropsType } from './type';
import { FLEX_ITEM_CLASS_PREFIX, flexItemRoot } from './constants';
import { FlexItemRoot } from './style';

/**
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
