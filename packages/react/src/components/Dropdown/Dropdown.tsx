import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useDropdownClassName } from './utils';
import {
    DropdownContainer,
    DropdownExpansionIndicator,
    DropdownOptionList,
    DropdownOptionListContainer,
    DropdownRoot,
    ExpansionIndicatorContainer,
} from './style';
import DropdownOptionItem from './DropdownOptionItem';
import { DropdownPropsType, OptionObjectType } from './type';
import { dropdownDefaultTheme } from './theme';
import {
    defaultLabel,
    DROPDOWN_CLASS_PREFIX,
    dropdownActionItem,
    dropdownContainer,
    dropdownOptionItem,
    dropdownOptionList,
    dropdownOptionListContainer,
} from './constants';
import { useDropdown } from './utils/useDropdown';
import { TextInput } from '../TextInput';

export const Dropdown: FunctionComponent<DropdownPropsType> = forwardRef(
    function Dropdown({ className, ...props }, ref) {
        const theme = useComponentTheme(
            DROPDOWN_CLASS_PREFIX,
            dropdownDefaultTheme,
        );

        const {
            rootProps,
            containerProps,
            textInputProps,
            optionListContainerProps,
            optionListProps,

            // todo: pass this via rest props
            disabled,
            displaySeparator,
            isOptionListShown,
            handleActionItemClick,
            internalValue,
            onOptionSelect,
            internalOptions,
            error,
            multiple,
        } = useDropdown(props, ref);

        const classOverride = useDropdownClassName(
            DROPDOWN_CLASS_PREFIX,
            className,
            disabled,
        );

        // todo: move render functions out and use rest props for props
        const renderActionItem = (
            <ExpansionIndicatorContainer
                theme={theme}
                className={classOverride.ExpansionIndicatorContainer}
            >
                <DropdownExpansionIndicator
                    disabled={disabled}
                    error={error}
                    displaySeparator={displaySeparator}
                    isExpanded={isOptionListShown}
                    onClick={handleActionItemClick}
                    // tabIndex={tabIndex}
                    theme={theme}
                    data-testid={dropdownActionItem}
                    className={classOverride.ExpansionIndicator}
                />
            </ExpansionIndicatorContainer>
        );

        const renderOptionItem = (item: OptionObjectType) => (
            <DropdownOptionItem
                className={classOverride.OptionItem}
                isSelected={internalValue.includes(item.value)}
                item={item}
                itemIndex={item.value}
                key={item.value}
                onOptionSelect={onOptionSelect}
                theme={theme}
                multiple={multiple}
                data-testid={dropdownOptionItem}
            />
        );

        return (
            <DropdownRoot
                {...rootProps}
                className={classOverride.Root}
                theme={theme}
            >
                <DropdownContainer
                    {...containerProps}
                    className={classOverride.Container}
                    theme={theme}
                    data-testid={dropdownContainer}
                >
                    <TextInput
                        {...textInputProps}
                        after={renderActionItem}
                        className={classOverride.TextInput}
                        theme={theme}
                    />
                    <DropdownOptionListContainer
                        {...optionListContainerProps}
                        className={classOverride.OptionListContainer}
                        theme={theme}
                        data-testid={dropdownOptionListContainer}
                    >
                        {internalOptions.length > 0 ? (
                            <DropdownOptionList
                                {...optionListProps}
                                className={classOverride.OptionList}
                                theme={theme}
                                data-testid={dropdownOptionList}
                            >
                                {internalOptions.map(renderOptionItem)}
                            </DropdownOptionList>
                        ) : null}
                    </DropdownOptionListContainer>
                </DropdownContainer>
            </DropdownRoot>
        );
    },
);

Dropdown.displayName = DROPDOWN_CLASS_PREFIX;

Dropdown.defaultProps = {
    disabled: false,
    isListExpanded: false,
    label: defaultLabel,
    tabIndex: 0,
    multiple: false,
    isActionSeparatorDisplayed: true,
};

Dropdown.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    multiple: PropTypes.bool,
    isListExpanded: PropTypes.bool,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    isActionSeparatorDisplayed: PropTypes.bool,
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string.isRequired),
        PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                    .isRequired,
                label: PropTypes.string.isRequired,
            }).isRequired,
        ),
    ]),
};
