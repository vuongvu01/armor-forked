import React, { forwardRef, FunctionComponent, useContext } from 'react';
import PropTypes from 'prop-types';

import { GRID_ITEM_CLASS_PREFIX, gridItemRoot } from './constants';
import { GridItemPropsType } from './type';
import { useGridItemClassName } from './utils/useGridItemClassName';
import { GridContext } from '../utils/GridContext';
import { GridItemRoot } from './style';
import { useComponentTheme } from '../../../utils/hooks';
import { gridItemTheme } from './theme';

export const GridItem: FunctionComponent<GridItemPropsType> = forwardRef(
    function GridItem({ className, classNames, ...restProps }, ref) {
        const theme = useComponentTheme(GRID_ITEM_CLASS_PREFIX, gridItemTheme);
        const {
            gutterSpacing,
            gutterSpacingVertical,
            gutterSpacingHorizontal,
        } = useContext(GridContext);

        const classOverride = useGridItemClassName(
            GRID_ITEM_CLASS_PREFIX,
            className,
            classNames,
            gutterSpacing,
        );

        return (
            <GridItemRoot
                data-testid={gridItemRoot}
                {...restProps}
                className={classOverride.Root}
                ref={ref}
                theme={theme}
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
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
    sm: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
    md: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
    lg: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
    xl: PropTypes.oneOf([
        // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
        // true,
        // false,
        // 'auto',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
    ]),
};