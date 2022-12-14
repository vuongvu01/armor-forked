import React, { forwardRef, memo } from 'react';

import {
    SideSheet,
    SideSheetBody,
    SideSheetFooter,
    SideSheetHeader,
} from '@deliveryhero/armor';
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
import { FilterEditorSettingsContextProvider } from '../FilterEditor/utils/FilterEditorSettingsContext';
import { MemoizedFilterEditorActions as FilterEditorActions } from '../FilterEditorActions';
import { MemoizedFilterEditorHeader as FilterEditorHeader } from '../FilterEditorHeader';

/**
 * # FilterLayout
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/082f5b-filter/b/19f42c)
 *
 * ## Examples
 *
 * ***
 *
 *
 * ```
 * import { useState, useCallback } from 'react';
 * import { FilterLayout, FilterEditor } from '@deliveryhero/armor';
 *
 * const filterSchema: FilterConditionSchemaType = {
 *     conditions: [
 *         {
 *             id: 'name',
 *             label: 'Name',
 *         },
 *         {
 *             id: 'email',
 *             label: 'Email',
 *         },
 *         {
 *             id: 'phoneNumber',
 *             label: 'Phone number',
 *         },
 *     ],
 * };
 *
 * const [filterValue, setFilterValue] = useState<FilterConditionValueType | undefined>();
 * const [filterOpen, setFilterOpen] = useState(false);
 *
 * const setFilterValueCommon = useCallback(
 *     (value: FilterConditionValueType) => {
 *         setStoredValue(value);
 *         setFilterValue(value);
 *     },
 *     [setStoredValue, setFilterValue],
 * );
 *
 * <FilterLayout
 *     tall
 *     filterOpen={filterOpen}
 *     filterEditor={
 *         <FilterEditor
 *             schema={filterSchema}
 *             value={filterValue}
 *             types={conditionTypes}
 *             onValueChange={setFilterValueCommon}
 *             onClose={() => setFilterOpen(false)}
 *             paddingTop={6}
 *             paddingLeft={2}
 *             paddingRight={6}
 *             paddingBottom={6}
 *         />
 *     }
 *     >
 *     Data grid here...
 * </FilterLayout>
 * ```
 *
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

export const MemoizedFilterLayout = memo(FilterLayout);
