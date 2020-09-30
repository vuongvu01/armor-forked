import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { usePackItemClassName } from './utils';
import { PackItemPropsType } from './type';
import { PACK_ITEM_CLASS_PREFIX, packItemRoot } from './constants';
import { FlexItem } from '../Flex';

export const PackItem: FunctionComponent<PackItemPropsType> = forwardRef(
    function PackItem(
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

        useThemeOverride(PACK_ITEM_CLASS_PREFIX, theme, {});

        const classOverride = usePackItemClassName(
            PACK_ITEM_CLASS_PREFIX,
            className,
            classNames,
        );

        return (
            <FlexItem
                className={classOverride.Root}
                data-testid={packItemRoot}
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

PackItem.defaultProps = {};

PackItem.propTypes = {
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
