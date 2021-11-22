import React, { FunctionComponent, useContext } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import {
    HandleOptionItemClickParamsType,
    HeaderNavigationMenuContentBodyOptionsPropsType,
    OptionCategoryObjectType,
    OptionObjectType,
    OptionType,
} from './type';
import {
    HeaderNavigationMenuContentBodyOptionsCategory,
    HeaderNavigationMenuContentBodyOptionsItem,
    HeaderNavigationMenuContentBodyOptionsRoot,
} from './style';
import {
    HEADER_NAVIGATION_MENU_CONTENT_BODY_OPTIONS_CLASS_PREFIX,
    headerNavigationMenuContentBodyOptionsCategory,
    headerNavigationMenuContentBodyOptionsItem,
    headerNavigationMenuContentBodyOptionsRoot,
} from './constants';
import HeaderNavigationMenuContentContext from '../HeaderNavigationMenuContentContext';
import { useHeaderNavigationMenuContentBodyOptionsClassName } from './hooks';
import { headerNavigationMenuContentBodyOptionsTheme } from './theme';

const setActiveClass = (isActive: boolean) => (isActive ? 'active' : '');

export const HeaderNavigationMenuContentBodyOptions: FunctionComponent<HeaderNavigationMenuContentBodyOptionsPropsType> = ({
    className,
    options,
    selectedValue,
    onOptionSelect,
    ...restProps
}) => {
    const { isExpanded, setIsExpanded } = useContext(
        HeaderNavigationMenuContentContext,
    );

    const theme = useComponentTheme(
        HEADER_NAVIGATION_MENU_CONTENT_BODY_OPTIONS_CLASS_PREFIX,
        headerNavigationMenuContentBodyOptionsTheme,
    );

    const classOverride = useHeaderNavigationMenuContentBodyOptionsClassName(
        HEADER_NAVIGATION_MENU_CONTENT_BODY_OPTIONS_CLASS_PREFIX,
        className,
    );

    const handleClick = ({
        event,
        selectedOption,
    }: HandleOptionItemClickParamsType) => {
        if (onOptionSelect) {
            onOptionSelect(selectedOption);
        }

        if (isExpanded && setIsExpanded) {
            setTimeout(() => setIsExpanded(false), 0);
        }
    };

    const handleOnClick = (selectedOption: OptionType) => (
        event: React.MouseEvent<HTMLInputElement>,
    ) => handleClick({ event, selectedOption });

    return (
        <HeaderNavigationMenuContentBodyOptionsRoot
            data-testid={headerNavigationMenuContentBodyOptionsRoot}
            {...restProps}
            theme={theme}
            className={classOverride.Root}
        >
            {// @ts-ignore todo: fix this somehow
            options.map(
                (option: OptionObjectType | OptionCategoryObjectType) => {
                    if (!option.category) {
                        const { value, label } = option;

                        return (
                            <HeaderNavigationMenuContentBodyOptionsItem
                                theme={theme}
                                className={`${
                                    classOverride.Item
                                } ${setActiveClass(selectedValue === value)}`}
                                key={value}
                                data-testid={
                                    headerNavigationMenuContentBodyOptionsItem
                                }
                                onClick={handleOnClick(option)}
                                isActive={selectedValue === value}
                            >
                                {label}
                            </HeaderNavigationMenuContentBodyOptionsItem>
                        );
                    }

                    const { value, label, options: items } = option;
                    let optionItems = [];

                    const categoryItem = (
                        <HeaderNavigationMenuContentBodyOptionsCategory
                            theme={theme}
                            className={classOverride.Category}
                            key={value}
                            data-testid={
                                headerNavigationMenuContentBodyOptionsCategory
                            }
                        >
                            {label}
                        </HeaderNavigationMenuContentBodyOptionsCategory>
                    );

                    if (items) {
                        optionItems = items.map((item: OptionObjectType) => {
                            const {
                                value: optionValue,
                                label: optionLabel,
                            } = item;
                            return (
                                <HeaderNavigationMenuContentBodyOptionsItem
                                    theme={theme}
                                    className={`${
                                        classOverride.Item
                                    } ${setActiveClass(
                                        selectedValue === optionValue,
                                    )}`}
                                    key={optionValue}
                                    data-testid={
                                        headerNavigationMenuContentBodyOptionsItem
                                    }
                                    onClick={handleOnClick(item)}
                                    isActive={selectedValue === optionValue}
                                >
                                    {optionLabel}
                                </HeaderNavigationMenuContentBodyOptionsItem>
                            );
                        });
                    }

                    return [categoryItem, ...optionItems];
                },
            )}
        </HeaderNavigationMenuContentBodyOptionsRoot>
    );
};

HeaderNavigationMenuContentBodyOptions.defaultProps = {};

HeaderNavigationMenuContentBodyOptions.propTypes = {
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onOptionSelect: PropTypes.func,
    // options: PropTypes.oneOfType([
    //     PropTypes.arrayOf(
    //         PropTypes.shape({
    //             value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    //                 .isRequired,
    //             label: PropTypes.string.isRequired,
    //         }).isRequired,
    //     ),
    //     PropTypes.arrayOf(
    //         PropTypes.shape({
    //             category: PropTypes.string.isRequired,
    //             value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    //                 .isRequired,
    //             label: PropTypes.string.isRequired,
    //             options: PropTypes.arrayOf(
    //                 PropTypes.shape({
    //                     value: PropTypes.oneOfType([
    //                         PropTypes.number,
    //                         PropTypes.string,
    //                     ]).isRequired,
    //                     label: PropTypes.string.isRequired,
    //                 }).isRequired,
    //             ),
    //         }).isRequired,
    //     ),
    // ]),
};
