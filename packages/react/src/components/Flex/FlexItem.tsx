import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useFlexItemClassName } from './utils';
import { FlexItemPropsType } from './type';
import { FLEX_ITEM_CLASS_PREFIX, flexItemRoot } from './constants';
import { FlexItemRoot } from './style';
import { useTheme } from '../../styling';

export const FlexItem: FunctionComponent<FlexItemPropsType> = forwardRef(
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
        const theme = useTheme().armor;
        const classOverride = useFlexItemClassName(
            FLEX_ITEM_CLASS_PREFIX,
            className,
        );

        return (
            <FlexItemRoot
                data-testid={flexItemRoot}
                {...restProps}
                theme={theme}
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
