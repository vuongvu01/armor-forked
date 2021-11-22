import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme, PortalToBody } from '@deliveryhero/armor-system';

import { useDropdown, useDropdownClassName } from './hooks';
import {
    DropdownContainer,
    DropdownExpansionIndicator,
    DropdownOptionListContainer,
    DropdownRoot,
    DropdownTextInput,
    DropdownArrow,
    ExpansionIndicatorContainer,
} from './style';
import { DropdownPropsType } from './type';
import {
    DROPDOWN_CLASS_PREFIX,
    DROPDOWN_OPTION_LIST_CONTAINER,
} from './constants';
import { OptionList } from '../OptionList';
import { DropdownBeforeSection } from './DropdownBeforeSection';

/**
 * @armor-docs-component
 */
export const Dropdown = forwardRef<HTMLInputElement, DropdownPropsType>(
    function Dropdown({ className, ...props }, ref) {
        const theme = useTheme().armor;

        const {
            rootProps,
            containerProps,
            textInputProps,
            portalProps,
            listContainerProps,
            arrowProps,
            optionListProps,
            dropdownExpansionIndicatorProps,
            dropdownBeforeSectionProps,
            disabled,
            internalValue,
            open,
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
            // @ts-ignore todo: the fix is only available with loose of backward compatibility
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
                    <PortalToBody {...portalProps}>
                        {open && (
                            <DropdownOptionListContainer
                                data-testid={DROPDOWN_OPTION_LIST_CONTAINER}
                                {...listContainerProps}
                                className={classOverride.OptionListContainer}
                                theme={theme}
                            >
                                <OptionList
                                    {...optionListProps}
                                    className={classOverride.OptionList}
                                />
                                <DropdownArrow {...arrowProps} />
                            </DropdownOptionListContainer>
                        )}
                    </PortalToBody>
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
