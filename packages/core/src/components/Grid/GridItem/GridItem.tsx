import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@deliveryhero/armor-system';

import { GRID_ITEM_CLASS_PREFIX, gridItemRoot } from './constants';
import { GridItemPropsType } from './type';
import { useGridItemClassName } from './hooks/useGridItemClassName';
import { GridContext } from '../utils/GridContext';
import { GridItemRoot } from './style';

/**
 * @armor-docs-component
 */
export const GridItem = forwardRef<HTMLDivElement, GridItemPropsType>(
    function GridItem({ className, ...restProps }, ref) {
        const theme = useTheme();

        const {
            gutterSpacing,
            gutterSpacingVertical,
            gutterSpacingHorizontal,
        } = useContext(GridContext);

        const classOverride = useGridItemClassName(
            GRID_ITEM_CLASS_PREFIX,
            className,
            gutterSpacing,
        );

        return (
            <GridItemRoot
                data-testid={gridItemRoot}
                theme={theme}
                {...restProps}
                className={classOverride.Root}
                ref={ref}
                gutterSpacing={gutterSpacing}
                gutterSpacingVertical={gutterSpacingVertical}
                gutterSpacingHorizontal={gutterSpacingHorizontal}
            />
        );
    },
);

GridItem.defaultProps = {};

GridItem.propTypes = {
    xs: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]),
    sm: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]),
    md: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]),
    lg: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]),
    xl: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]),
};
