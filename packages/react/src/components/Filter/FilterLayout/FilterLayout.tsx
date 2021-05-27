import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';

import { useFilterLayoutClassNames } from './hooks/useFilterLayoutClassNames';
import { useFilterLayout } from './hooks/useFilterLayout';
import {
    FilterLayoutRoot,
    FilterLayoutMain,
    FilterLayoutLeftBar,
    FilterLayoutLeftBarContainer,
} from './style';
import { FilterLayoutPropsType } from './type';
import { FILTER_LAYOUT_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';

export const FilterLayout = forwardRef<HTMLDivElement, FilterLayoutPropsType>(
    function FilterLayout({ className, children, ...props }, ref) {
        const theme = useComponentTheme(FILTER_LAYOUT_CLASS_PREFIX);
        const classNames = useFilterLayoutClassNames(
            FILTER_LAYOUT_CLASS_PREFIX,
            className,
        );

        const { rootProps, filterEditor, leftBarProps } = useFilterLayout<
            HTMLDivElement
        >(props, ref);

        return (
            <FilterLayoutRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                <FilterLayoutLeftBar
                    {...leftBarProps}
                    theme={theme}
                    className={classNames.LeftBar}
                >
                    <FilterLayoutLeftBarContainer
                        theme={theme}
                        className={classNames.LeftBarContainer}
                    >
                        {filterEditor}
                    </FilterLayoutLeftBarContainer>
                </FilterLayoutLeftBar>
                <FilterLayoutMain theme={theme} className={classNames.Main}>
                    {children}
                </FilterLayoutMain>
            </FilterLayoutRoot>
        );
    },
);

FilterLayout.defaultProps = {};

/** prop-types are required here for run-time checks */
FilterLayout.propTypes = {};
