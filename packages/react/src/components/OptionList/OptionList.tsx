import React, { FunctionComponent, Fragment } from 'react';
import {
    OptionListPropsType,
    OptionObjectType,
    OptionListGroupObjectType,
} from './type';
import {
    OptionListBeforeSectionContainer,
    OptionListRoot,
    OptionListSearch,
    OptionListSearchContainer,
    OptionListItemGroup,
} from './style';
import { OPTION_LIST_CLASS_PREFIX } from './constants';
import { OptionListItem } from './OptionListItem';
import { useOptionList, useOptionListClassName } from './hooks';
import { useComponentTheme } from '../../utils/hooks';
import { ObjectLiteralType } from '../../type';

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

        internalOptions,
        dynamicInternalOptions,
        disabled,
        internalValue,
        enableSearchOption,
        isOptionListHeaderRendered,
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
                    {isSelectAllOptionRendered && (
                        <OptionListItem
                            {...getSelectAllItemProps()}
                            theme={theme}
                            className={classOverride.SelectAllItem}
                        />
                    )}
                </OptionListBeforeSectionContainer>
            )}
            {dynamicInternalOptions.map((option: OptionObjectType, index) => {
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
                            theme={theme}
                            className={`${classOverride.Item} ${
                                internalValue.includes(value) ? 'active' : ''
                            }`}
                        />
                    </Fragment>
                );
            })}
        </OptionListRoot>
    ) : null;
};
