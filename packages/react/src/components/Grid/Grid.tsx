import React, { forwardRef, FunctionComponent, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useGridClassName } from './utils';
import { GridPropsType } from './type';
import { GRID_CLASS_PREFIX, gridRoot } from './constants';
import { GridContext } from './utils/GridContext';
import { GridRoot } from './style';
import { useComponentTheme } from '../../utils/hooks';
import { gridTheme } from './theme';

export const Grid: FunctionComponent<GridPropsType> = forwardRef(function Grid(
    {
        className,
        classNames,
        gutterSpacing,
        gutterSpacingVertical,
        gutterSpacingHorizontal,
        ...restProps
    },
    ref,
) {
    const theme = useComponentTheme(GRID_CLASS_PREFIX, gridTheme);

    const classOverride = useGridClassName(
        GRID_CLASS_PREFIX,
        className,
        classNames,
    );

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
                {...restProps}
                className={classOverride.Root}
                gutterSpacing={gutterSpacing}
                gutterSpacingVertical={gutterSpacingVertical}
                gutterSpacingHorizontal={gutterSpacingHorizontal}
                ref={ref}
                theme={theme}
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