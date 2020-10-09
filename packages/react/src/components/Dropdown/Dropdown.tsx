import React, {
    FunctionComponent,
    forwardRef,
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { extractMarginProps } from '../../styling';
import { useDetectClickOutsideComponent, useDropdownClassName } from './utils';
import {
    DropdownContainer,
    DropdownOptionList,
    DropdownOptionListContainer,
    DropdownWrapper,
    dropdownTextInputStyle,
} from './style';
import DropdownOptionItem from './DropdownOptionItem';
import { DropdownPropsType, OptionObjectType } from './type';
import { dropdownDefaultTheme } from './theme';
import { TextInput } from '../TextInput';
import {
    defaultLabel,
    DROPDOWN_CLASS_PREFIX,
    dropdownActionItem,
    dropdownContainer,
    dropdownOptionItem,
    dropdownOptionList,
    dropdownOptionListContainer,
} from './constants';
import { useOnValueUpdate } from './utils/useOnValueUpdate';
import { useValue } from './utils/useValue';
import { useOptions } from './utils/useOptions';
import { useSelectedValueToDisplay } from './utils/useSelectedValueToDisplay';
import { ExpansionIndicator } from '../ExpansionIndicator';

export const Dropdown: FunctionComponent<DropdownPropsType> = forwardRef(
    function Dropdown(
        {
            className,
            classNames,
            disabled,
            error,
            isListExpanded = false,
            label,
            onSelect,
            onChange,
            onRenderSelectedValue,
            options,
            value,
            defaultValue,
            tabIndex,
            multiple,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            DROPDOWN_CLASS_PREFIX,
            dropdownDefaultTheme,
        );

        const classOverride = useDropdownClassName(
            DROPDOWN_CLASS_PREFIX,
            className,
            classNames,
            disabled,
        );

        const internalInputRef = useRef(null);
        // internalRef is used in Dropdown and can be exposed to the outside if the ref prop is present
        useEffect(() => {
            if (ref && internalInputRef) {
                Object.assign(ref, internalInputRef);
            }
        }, [internalInputRef]);

        const containerRef = useRef(null);

        const [internalValue, setInternalValue] = useValue(value, defaultValue);
        const onValueUpdate = useOnValueUpdate(
            setInternalValue,
            onSelect,
            onChange,
        );
        const internalOptions = useOptions(options);

        const selectedValueToDisplay = useSelectedValueToDisplay(
            onRenderSelectedValue,
            internalValue,
            internalOptions,
        );

        const [isOptionListShown, setIsOptionListShown] = useState(
            isListExpanded,
        );

        const blurInput = useCallback(() => {
            const node = internalInputRef.current as any;

            if (node && node.blur) {
                setTimeout(() => node.blur(), 0);
            }
        }, [internalInputRef]);

        const focusOnActionItemTrigger = () => {
            const node = internalInputRef.current as any;

            if (node && node.focus && !isOptionListShown) {
                node.focus();
            }
        };

        const onOptionSelect = (itemIndex: number) => {
            if (internalOptions) {
                const selectedItem = internalOptions[itemIndex];
                onValueUpdate(
                    internalValue,
                    multiple,
                    selectedItem,
                    itemIndex,
                    options,
                );
            }

            if (!multiple) {
                setIsOptionListShown(false);
            }
            blurInput();
        };

        useDetectClickOutsideComponent(containerRef, setIsOptionListShown);

        const handleDisplayOptionListToggle = () => {
            setIsOptionListShown(!isOptionListShown);

            focusOnActionItemTrigger();
        };

        const handleActionItemClick = useMemo(
            () => (disabled ? () => {} : handleDisplayOptionListToggle),
            [disabled, isOptionListShown],
        );

        const renderActionItem = (
            <ExpansionIndicator
                disabled={disabled}
                error={error}
                displaySeparator={isOptionListShown || !!internalValue.length}
                isExpanded={isOptionListShown}
                onClick={handleActionItemClick}
                tabIndex={tabIndex}
                theme={theme}
                data-testid={dropdownActionItem}
            />
        );

        const renderOptionItem = (
            item: OptionObjectType,
            itemIndex: number,
        ) => (
            <DropdownOptionItem
                className={classOverride.OptionItem}
                isSelected={internalValue.includes(item.value)}
                item={item}
                itemIndex={itemIndex}
                key={item.value}
                onOptionSelect={onOptionSelect}
                theme={theme}
                multiple={multiple}
                data-testid={dropdownOptionItem}
            />
        );

        const { marginProps, ...otherProps } = extractMarginProps(restProps);

        return (
            <DropdownWrapper
                className={classOverride.Wrapper}
                theme={theme}
                {...marginProps}
            >
                <DropdownContainer
                    className={classOverride.Container}
                    theme={theme}
                    data-testid={dropdownContainer}
                    ref={containerRef}
                >
                    <TextInput
                        {...otherProps}
                        after={renderActionItem}
                        className={classOverride.TextInput}
                        disabled={disabled}
                        displayMode="block"
                        error={error}
                        label={label}
                        onClick={handleDisplayOptionListToggle}
                        ref={internalInputRef}
                        styles={dropdownTextInputStyle}
                        theme={theme}
                        value={selectedValueToDisplay}
                    />
                    <DropdownOptionListContainer
                        className={classOverride.OptionListContainer}
                        theme={theme}
                        data-testid={dropdownOptionListContainer}
                    >
                        {internalOptions.length > 0 ? (
                            <DropdownOptionList
                                className={classOverride.OptionList}
                                isOptionListShown={isOptionListShown}
                                theme={theme}
                                data-testid={dropdownOptionList}
                            >
                                {internalOptions.map(renderOptionItem)}
                            </DropdownOptionList>
                        ) : null}
                    </DropdownOptionListContainer>
                </DropdownContainer>
            </DropdownWrapper>
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
};

Dropdown.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    multiple: PropTypes.bool,
    isListExpanded: PropTypes.bool,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
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
    selectedIndex: PropTypes.number,
};
