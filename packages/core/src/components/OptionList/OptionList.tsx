import React, { Fragment, FC, memo } from 'react';
import { useSortedList } from '@deliveryhero/armor-system';

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
export const OptionList: FC<React.PropsWithChildren<OptionListPropsType>> =
    memo(({ className, ...props }) => {
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
            enableSearchOption,
            isOptionListHeaderRendered,
            isFooterRendered,
            optionListFooterProps,
            isSelectAllOptionRendered,
            groupIndex,
            getTopGradientProps,
            getBottomGradientProps,
        } = useOptionList(props);

        const classOverride = useOptionListClassName(
            OPTION_LIST_CLASS_PREFIX,
            className,
            disabled,
        );

        const sortedOptions = useSortedList(dynamicInternalOptions, 'groupId');
        const displayedGroups: ObjectLiteralType = {};

        return internalOptions.length ? (
            <OptionListRoot {...rootProps} className={classOverride.Root}>
                {isOptionListHeaderRendered && (
                    <OptionListBeforeSectionContainer
                        className={classOverride.BeforeSectionContainer}
                    >
                        {enableSearchOption && (
                            <OptionListSearchContainer
                                className={classOverride.SearchContainer}
                            >
                                <OptionListSearch
                                    {...getOptionListSearchProps()}
                                    className={classOverride.Search}
                                />
                            </OptionListSearchContainer>
                        )}
                    </OptionListBeforeSectionContainer>
                )}
                <OptionListContainer
                    className={classOverride.OptionListContainer}
                    {...listContainerProps}
                >
                    <TopGradientEffect
                        {...getTopGradientProps()}
                        className={classOverride.TopGradient}
                    />
                    <BottomGradientEffect
                        {...getBottomGradientProps()}
                        className={classOverride.BottomGradient}
                    />
                    <OptionListContent
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

                                    const optionItemProps =
                                        getOptionItemProps(option);

                                    const { isSelected } = optionItemProps;

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
                                                {...optionItemProps}
                                                optionIndex={
                                                    isSelectAllOptionRendered
                                                        ? index + 1
                                                        : index
                                                }
                                                className={`${
                                                    classOverride.Item
                                                } ${
                                                    isSelected ? 'active' : ''
                                                }`}
                                            />
                                        </Fragment>
                                    );
                                },
                            )}

                            {enableVirtualization && (
                                <OptionListVirtualPadding
                                    {...getVirtualBottomSpaceProps()}
                                    className={
                                        classOverride.VirtualPaddingBottom
                                    }
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
    });

OptionList.displayName = OPTION_LIST_CLASS_PREFIX;
