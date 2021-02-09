import React, { FunctionComponent } from 'react';
import { OptionListPropsType, OptionObjectType } from './type';
import {
    OptionListBeforeSectionContainer,
    OptionListRoot,
    OptionListSearch,
    OptionListSearchContainer,
} from './style';
import { OPTION_LIST_CLASS_PREFIX } from './constants';
import { OptionListItem } from './OptionListItem';
import { useOptionList, useOptionListClassName } from './utils';
import { useComponentTheme } from '../../utils/hooks';

export const OptionList: FunctionComponent<OptionListPropsType> = ({
    className,
    ...props
}) => {
    const theme = useComponentTheme(OPTION_LIST_CLASS_PREFIX);

    const {
        rootProps,
        dropdownOptionItemProps,
        selectAllItemProps,
        dropdownOptionListSearchProps,

        internalOptions,
        dynamicInternalOptions,
        disabled,
        internalValue,
        enableSearchOption,
        isOptionListHeaderRendered,
        isSelectAllOptionRendered,
    } = useOptionList(props);

    const classOverride = useOptionListClassName(
        OPTION_LIST_CLASS_PREFIX,
        className,
        disabled,
    );

    const renderOptionItem = (item: OptionObjectType) => (
        <OptionListItem
            {...dropdownOptionItemProps(item)}
            theme={theme}
            className={`${classOverride.Item} ${
                internalValue.includes(item.value) ? 'active' : ''
            }`}
        />
    );

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
                                {...dropdownOptionListSearchProps}
                                theme={theme}
                                className={classOverride.Search}
                            />
                        </OptionListSearchContainer>
                    )}
                    {isSelectAllOptionRendered && (
                        <OptionListItem
                            {...selectAllItemProps}
                            theme={theme}
                            className={classOverride.SelectAllItem}
                        />
                    )}
                </OptionListBeforeSectionContainer>
            )}
            {dynamicInternalOptions.map(renderOptionItem)}
        </OptionListRoot>
    ) : null;
};
