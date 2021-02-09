import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useDropdown, useDropdownClassName } from './utils';
import {
    DropdownContainer,
    DropdownExpansionIndicator,
    DropdownOptionListContainer,
    DropdownRoot,
    DropdownTextInput,
    ExpansionIndicatorContainer,
} from './style';
import { DropdownPropsType } from './type';
import {
    DROPDOWN_CLASS_PREFIX,
    DROPDOWN_OPTION_LIST_CONTAINER,
} from './constants';
import { OptionList } from '../OptionList';
import { useTheme } from '../../styling';
import { DropdownBeforeSection } from './DropdownBeforeSection';

export const Dropdown: FunctionComponent<DropdownPropsType> = forwardRef(
    function Dropdown({ className, ...props }, ref) {
        const theme = useTheme().armor;

        const {
            rootProps,
            containerProps,
            textInputProps,
            optionListProps,
            dropdownExpansionIndicatorProps,
            dropdownBeforeSectionProps,
            disabled,
            internalValue,
        } = useDropdown(props, ref);

        const classOverride = useDropdownClassName(
            DROPDOWN_CLASS_PREFIX,
            className,
            disabled,
        );

        const renderActionItem = (
            <ExpansionIndicatorContainer
                theme={theme}
                className={classOverride.ExpansionIndicatorContainer}
            >
                <DropdownExpansionIndicator
                    {...dropdownExpansionIndicatorProps}
                    theme={theme}
                    className={classOverride.ExpansionIndicator}
                />
            </ExpansionIndicatorContainer>
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
                >
                    <DropdownTextInput
                        {...textInputProps}
                        before={
                            internalValue.length ? (
                                <DropdownBeforeSection
                                    {...dropdownBeforeSectionProps}
                                />
                            ) : null
                        }
                        after={renderActionItem}
                        className={classOverride.TextInput}
                        theme={theme}
                    />
                    <DropdownOptionListContainer
                        data-testid={DROPDOWN_OPTION_LIST_CONTAINER}
                        className={classOverride.OptionListContainer}
                        theme={theme}
                    >
                        <OptionList
                            {...optionListProps}
                            className={classOverride.OptionList}
                            theme={theme}
                        />
                    </DropdownOptionListContainer>
                </DropdownContainer>
            </DropdownRoot>
        );
    },
);

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
