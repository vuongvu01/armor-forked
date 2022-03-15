import React, { forwardRef } from 'react';

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
import {
    SideSheet,
    SideSheetBody,
    SideSheetFooter,
    SideSheetHeader,
} from '../../SideSheet';
import { FilterEditorSettingsContextProvider } from '../FilterEditor/utils/FilterEditorSettingsContext';
import { FilterEditorActions } from '../FilterEditorActions';
import { FilterEditorHeader } from '../FilterEditorHeader';

/**
 * @armor-docs-component
 */
export const FilterLayout = forwardRef<HTMLDivElement, FilterLayoutPropsType>(
    function FilterLayout({ className, children, ...props }, ref) {
        const classNames = useFilterLayoutClassNames(
            FILTER_LAYOUT_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            filterEditor,
            getLeftBarProps,
            showLeftBar,
            showSideSheet,
            getSideSheetProps,
            getEditorHeaderProps,
            getEditorActionProps,
            editorSettingsContextProviderProps,
        } = useFilterLayout<HTMLDivElement>(props, ref);

        return (
            <FilterLayoutRoot {...rootProps} className={classNames.Root}>
                <FilterEditorSettingsContextProvider
                    {...editorSettingsContextProviderProps}
                >
                    {showLeftBar && (
                        <FilterLayoutLeftBar
                            {...getLeftBarProps()}
                            className={classNames.LeftBar}
                        >
                            <FilterLayoutLeftBarContainer
                                className={classNames.LeftBarContainer}
                            >
                                {filterEditor}
                            </FilterLayoutLeftBarContainer>
                        </FilterLayoutLeftBar>
                    )}
                    {showSideSheet && (
                        <SideSheet {...getSideSheetProps()}>
                            <SideSheetHeader>
                                <FilterEditorHeader
                                    {...getEditorHeaderProps()}
                                />
                            </SideSheetHeader>
                            <SideSheetBody paddingY={2}>
                                {filterEditor}
                            </SideSheetBody>
                            <SideSheetFooter>
                                <FilterEditorActions
                                    {...getEditorActionProps()}
                                />
                            </SideSheetFooter>
                        </SideSheet>
                    )}
                </FilterEditorSettingsContextProvider>
                <FilterLayoutMain className={classNames.Main}>
                    {children}
                </FilterLayoutMain>
            </FilterLayoutRoot>
        );
    },
);

FilterLayout.defaultProps = {};

/** prop-types are required here for run-time checks */
FilterLayout.propTypes = {};
