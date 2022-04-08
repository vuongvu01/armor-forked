import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { PortalToBody } from '@deliveryhero/armor-system';

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
                className={classOverride.ExpansionIndicatorContainer}
            >
                <DropdownExpansionIndicator
                    {...dropdownExpansionIndicatorProps}
                    className={classOverride.ExpansionIndicator}
                />
            </ExpansionIndicatorContainer>
        );

        return (
            // @ts-ignore todo: the fix is only available with loose of backward compatibility
            <DropdownRoot {...rootProps} className={classOverride.Root}>
                <DropdownContainer
                    {...containerProps}
                    className={classOverride.Container}
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
                    />
                    <PortalToBody {...portalProps}>
                        {open && (
                            <DropdownOptionListContainer
                                data-testid={DROPDOWN_OPTION_LIST_CONTAINER}
                                {...listContainerProps}
                                className={classOverride.OptionListContainer}
                            >
                                <OptionList
                                    {...optionListProps}
                                    className={classOverride.OptionList}
                                    autoFocus
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
