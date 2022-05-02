import React, { forwardRef, useMemo, memo } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@deliveryhero/armor-system';
import { useGridClassName } from './utils';
import { GridPropsType } from './type';
import { GRID_CLASS_PREFIX, gridRoot } from './constants';
import { GridContext } from './utils/GridContext';
import { GridRoot } from './style';

/**
 * # Grid
 *
 * It's the base of how we design. The grid holds all the components, typography and patterns to create a well balanced visual representation of the solution.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/56ab44-grid/b/868790)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Grid, GridItem } from '@deliveryhero/armor';
 *
 * const gridItemStyle = {
 *     padding: '10px',
 *     color: 'black',
 *     borderWidth: '1px',
 *     borderStyle: 'dashed',
 *     borderColor: 'grey',
 *     textAlign: 'center',
 * };
 *
 * <Grid>
 *     <GridItem style={gridItemStyle} xs={12} sm={8} md={4}>
 *         xs=12 sm=8 md=4
 *     </GridItem>
 *     <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
 *         xs=12 sm=4 md=4
 *     </GridItem>
 *     <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
 *         xs=12 sm=4 md=4
 *     </GridItem>
 * </Grid>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Grid = forwardRef<HTMLDivElement, GridPropsType>(function Grid(
    {
        className,
        gutterSpacing,
        gutterSpacingVertical,
        gutterSpacingHorizontal,
        ...restProps
    },
    ref,
) {
    const theme = useTheme();
    const classOverride = useGridClassName(GRID_CLASS_PREFIX, className);

    const contextValue = useMemo(
        () => ({
            gutterSpacing,
            gutterSpacingVertical,
            gutterSpacingHorizontal,
        }),
        [gutterSpacing, gutterSpacingVertical, gutterSpacingHorizontal],
    );

    return (
        <GridContext.Provider value={contextValue}>
            <GridRoot
                data-testid={gridRoot}
                theme={theme}
                {...restProps}
                className={classOverride.Root}
                gutterSpacing={gutterSpacing}
                gutterSpacingVertical={gutterSpacingVertical}
                gutterSpacingHorizontal={gutterSpacingHorizontal}
                ref={ref}
            />
        </GridContext.Provider>
    );
});

Grid.defaultProps = {
    gutterSpacing: 0,
};

Grid.propTypes = {
    // TODO (nmelnikov 2020-10-23): there is currently no upper cap on spacing.
    //  Didn't want to set something like 10, since there might be gaps e.g. of 60px between content sections.
    //  Check w/Sergei on what he thinks
    gutterSpacing: PropTypes.number,
    gutterSpacingVertical: PropTypes.number,
    gutterSpacingHorizontal: PropTypes.number,
};

export const MemoizedGrid = memo(Grid);
