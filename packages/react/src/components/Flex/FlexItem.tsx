import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useFlexItemClassName } from './utils';
import { FlexItemPropsType } from './type';
import { flexDefaultTheme } from './theme';
import { FLEX_ITEM_CLASS_PREFIX, flexItemRoot } from './constants';
import { FlexItemRoot } from './style';

export const FlexItem: FunctionComponent<FlexItemPropsType> = forwardRef(
    function FlexItem(
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
        const theme = useTheme();

        useThemeOverride(FLEX_ITEM_CLASS_PREFIX, theme, flexDefaultTheme);

        const classOverride = useFlexItemClassName(
            FLEX_ITEM_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <FlexItemRoot
                className={classOverride.Root}
                data-testid={flexItemRoot}
                flexGrow={flexGrow}
                flexShrink={flexShrink}
                flexBasis={flexBasis}
                alignSelf={alignSelf}
                order={order}
                ref={ref}
                theme={theme}
                {...restProps}
            />
        );
    },
);

FlexItem.defaultProps = {};

FlexItem.propTypes = {
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
