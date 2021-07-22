import React, { Fragment, FunctionComponent } from 'react';
import {
    OptionListGroupObjectType,
    OptionListPropsType,
    OptionObjectType,
} from './type';
import {
    OptionListBeforeSectionContainer,
    OptionListContainer,
    OptionListItemGroup,
    OptionListRoot,
    OptionListSearch,
    OptionListSearchContainer,
    OptionListVirtualPadding,
} from './style';
import { OPTION_LIST_CLASS_PREFIX } from './constants';
import { OptionListItem } from './OptionListItem';
import { useOptionList, useOptionListClassName } from './hooks';
import { useComponentTheme } from '../../utils/hooks';
import { ObjectLiteralType } from '../../type';
import { OptionListFooter } from './OptionListFooter';

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
        listContainerProps,
        listProps,

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
    } = useOptionList(props);

    const classOverride = useOptionListClassName(
        OPTION_LIST_CLASS_PREFIX,
        className,
        disabled,
    );

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
                {isSelectAllOptionRendered && (
                    <OptionListItem
                        {...getSelectAllItemProps()}
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

                    {// @ts-ignore
                    dynamicInternalOptions.map(
                        // @ts-ignore
                        (option: OptionObjectType, index) => {
                            const { value, groupId } = option;
                            let group: OptionListGroupObjectType | null = null;
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
                                            enableSeparator={index > 0}
                                            theme={theme}
                                            className={classOverride.ItemGroup}
                                        >
                                            {group.label}
                                        </OptionListItemGroup>
                                    )}
                                    <OptionListItem
                                        {...getOptionItemProps(option)}
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
