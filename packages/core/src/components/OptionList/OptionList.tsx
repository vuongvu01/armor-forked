import React, { Fragment, FunctionComponent } from 'react';
import { useComponentTheme, useSortedList } from '@deliveryhero/armor-system';

import {
    OptionListGroupObjectType,
    OptionListPropsType,
    OptionObjectType,
} from './type';
import {
    OptionListBeforeSectionContainer,
    OptionListContainer,
    OptionListRoot,
    OptionListSearch,
    OptionListSearchContainer,
    OptionListVirtualPadding,
    OptionListContent,
    TopGradientEffect,
    BottomGradientEffect,
} from './style';
import { OPTION_LIST_CLASS_PREFIX } from './constants';
import { OptionListItem } from './OptionListItem';
import { useOptionList, useOptionListClassName } from './hooks';
import { ObjectLiteralType } from '../../type';
import { OptionListFooter } from './OptionListFooter';
import { OptionListItemGroup } from './OptionListItemGroup';

/**
 * @internal
 */
export const OptionList: FunctionComponent<OptionListPropsType> = ({
    className,
    ...props
}) => {
    const theme = useComponentTheme(OPTION_LIST_CLASS_PREFIX);

    const {
        rootProps,
        getOptionItemProps,
        getSelectAllItemProps,
        getOptionListSearchProps,
        listContentProps,
        listProps,
        optionListItemGroupProps,
        listContainerProps,

        enableVirtualization,
        getVirtualTopSpaceProps,
        getVirtualBottomSpaceProps,

        internalOptions,
        dynamicInternalOptions,
        disabled,
        internalValue,
        enableSearchOption,
        isOptionListHeaderRendered,
        isFooterRendered,
        optionListFooterProps,
        isSelectAllOptionRendered,
        groupIndex,
        getTopGadientProps,
        getBottomGadientProps,
    } = useOptionList(props);

    const classOverride = useOptionListClassName(
        OPTION_LIST_CLASS_PREFIX,
        className,
        disabled,
    );

    const sortedOptions = useSortedList(dynamicInternalOptions, 'groupId');
    const displayedGroups: ObjectLiteralType = {};

    return internalOptions.length ? (
        <OptionListRoot
            {...rootProps}
            className={classOverride.Root}
            theme={theme}
        >
            {isOptionListHeaderRendered && (
                <OptionListBeforeSectionContainer
                    theme={theme}
                    className={classOverride.BeforeSectionContainer}
                >
                    {enableSearchOption && (
                        <OptionListSearchContainer
                            theme={theme}
                            className={classOverride.SearchContainer}
                        >
                            <OptionListSearch
                                {...getOptionListSearchProps()}
                                theme={theme}
                                className={classOverride.Search}
                            />
                        </OptionListSearchContainer>
                    )}
                </OptionListBeforeSectionContainer>
            )}
            <OptionListContainer
                theme={theme}
                className={classOverride.OptionListContainer}
                {...listContainerProps}
            >
                <TopGradientEffect
                    {...getTopGadientProps()}
                    theme={theme}
                    className={classOverride.TopGradient}
                />
                <BottomGradientEffect
                    {...getBottomGadientProps()}
                    theme={theme}
                    className={classOverride.BottomGradient}
                />
                <OptionListContent
                    theme={theme}
                    className={classOverride.OptionListContent}
                    {...listContentProps}
                >
                    {isSelectAllOptionRendered && (
                        <OptionListItem
                            {...getSelectAllItemProps()}
                            optionIndex={0}
                            className={classOverride.SelectAllItem}
                        />
                    )}
                    <div {...listProps}>
                        {enableVirtualization && (
                            <OptionListVirtualPadding
                                {...getVirtualTopSpaceProps()}
                                className={classOverride.VirtualPaddingTop}
                                theme={theme}
                            />
                        )}

                        {sortedOptions.map(
                            (option: OptionObjectType, index) => {
                                const { value, groupId } = option;
                                let group: OptionListGroupObjectType | null =
                                    null;
                                if (
                                    groupId &&
                                    groupId in groupIndex &&
                                    !displayedGroups[groupId]
                                ) {
                                    group = groupIndex[groupId];
                                    displayedGroups[groupId] = true;
                                }

                                return (
                                    <Fragment key={value}>
                                        {!!group && (
                                            <OptionListItemGroup
                                                {...optionListItemGroupProps(
                                                    group,
                                                )}
                                                enableSeparator={index > 0}
                                                className={
                                                    classOverride.ItemGroup
                                                }
                                            >
                                                {group.label}
                                            </OptionListItemGroup>
                                        )}
                                        <OptionListItem
                                            {...getOptionItemProps(option)}
                                            optionIndex={
                                                isSelectAllOptionRendered
                                                    ? index + 1
                                                    : index
                                            }
                                            className={`${classOverride.Item} ${
                                                internalValue.includes(value)
                                                    ? 'active'
                                                    : ''
                                            }`}
                                        />
                                    </Fragment>
                                );
                            },
                        )}

                        {enableVirtualization && (
                            <OptionListVirtualPadding
                                {...getVirtualBottomSpaceProps()}
                                className={classOverride.VirtualPaddingBottom}
                                theme={theme}
                            />
                        )}
                    </div>
                </OptionListContent>
            </OptionListContainer>
            {isFooterRendered && (
                <OptionListFooter
                    {...optionListFooterProps}
                    className={classOverride.Footer}
                />
            )}
        </OptionListRoot>
    ) : null;
};
