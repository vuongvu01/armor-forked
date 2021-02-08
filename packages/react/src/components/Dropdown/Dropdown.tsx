import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useDropdownClassName } from './utils';
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
    defaultLabel,
    DROPDOWN_CLASS_PREFIX,
    dropdownActionItem,
    dropdownContainer,
    dropdownOptionListContainer,
} from './constants';
import { useDropdown } from './utils/useDropdown';
import { DropdownOptionList } from '../DropdownOptionList';
import { useTheme } from '../../styling';

export const Dropdown: FunctionComponent<DropdownPropsType> = forwardRef(
    function Dropdown({ className, ...props }, ref) {
        const theme = useTheme().armor;

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
            error,
            blurInput,
            internalInputRef,
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
                    theme={theme}
                    data-testid={dropdownActionItem}
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
                    data-testid={dropdownContainer}
                >
                    <DropdownTextInput
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
                        <DropdownOptionList
                            {...optionListProps}
                            className={classOverride.OptionList}
                            theme={theme}
                            blurInput={blurInput}
                            ref={internalInputRef}
                        />
                    </DropdownOptionListContainer>
                </DropdownContainer>
            </DropdownRoot>
        );
    },
);

Dropdown.displayName = DROPDOWN_CLASS_PREFIX;

Dropdown.defaultProps = {
    disabled: false,
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
