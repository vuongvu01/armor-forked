import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { usePackItemClassName } from './hooks';
import { PackItemPropsType } from './type';
import { PACK_ITEM_CLASS_PREFIX, packItemRoot } from './constants';
import { FlexItem } from '../Flex';

/**
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
