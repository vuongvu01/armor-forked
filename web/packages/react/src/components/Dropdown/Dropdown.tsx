import React, {
    FunctionComponent,
    forwardRef,
    useState,
    useEffect,
    useRef,
} from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';
import {
    detectClickOutsideComponent,
    getItemLabel,
    useSelectClassName,
} from './utils';
import {
    DropdownContainer,
    DropdownOptionList,
    DropdownOptionListContainer,
    DropdownWrapper,
    dropdownTextInputStyle,
} from './style';
import { generateId } from '../../utils';
import DropdownOptionItem from './DropdownOptionItem';
import DropdownActionItem from './DropdownActionItem';
import { OptionItemType, DropdownPropsType } from './type';
import { selectDefaultTheme } from './theme';
import { TextInput } from '../TextInput';
import {
    defaultLabel,
    emptyLabelValue,
    DROPDOWN_CLASS_PREFIX,
    selectIdPrefix,
} from './constants';

export const Dropdown: FunctionComponent<DropdownPropsType> = forwardRef(
    function Dropdown(
        {
            className,
            classNames,
            disabled,
            error,
            id,
            isListExpanded = false,
            label,
            onSelect,
            options,
            selectedIndex: initialSelectedItemIndex,
            tabIndex,
            ...restProps
        },
        ref,
    ) {
        const theme = useTheme();
        const internalInputRef = useRef(null);

        // eslint-disable-next-line  @typescript-eslint/no-array-constructor
        let initialIndex = new Set(Array());
        let isDisableLabelEffect = false;

        if (initialSelectedItemIndex && initialSelectedItemIndex >= 0) {
            // eslint-disable-next-line  @typescript-eslint/no-array-constructor
            initialIndex = new Set(Array(initialSelectedItemIndex));
            isDisableLabelEffect = true;
        }

        const [selectedIndex, setSelectedIndices] = useState(initialIndex);
        const [selectedLabelValue, setSelectedLabelValue] = useState(
            emptyLabelValue,
        );
        const [isOptionListShown, setIsOptionListShown] = useState(
            isListExpanded,
        );
        const classOverride = useSelectClassName(
            DROPDOWN_CLASS_PREFIX,
            className,
            classNames,
            disabled,
        );

        useThemeOverride(DROPDOWN_CLASS_PREFIX, theme, selectDefaultTheme);

        // internalRef is used in Dropdown and can be exposed to the outside if the ref prop is present
        useEffect(() => {
            if (ref && internalInputRef) {
                Object.assign(ref, internalInputRef);
            }
        }, [internalInputRef]);

        const blurInput = () => {
            const node = internalInputRef.current as any;

            if (node && node.blur) {
                setTimeout(() => node.blur(), 0);
            }
        };

        const focusOnActionItemTrigger = () => {
            const node = internalInputRef.current as any;

            if (node && node.focus && !isOptionListShown) {
                node.focus();
            }
        };

        const blurOnInputWithSelection = () => {
            if (!selectedIndex.size && isOptionListShown) {
                blurInput();
            }
        };

        const handleOnItemSelect = (itemIndex: number) => {
            const newIndex = new Set([itemIndex]) as any;

            if (options) {
                const selectedItem = options[itemIndex];

                setSelectedIndices(newIndex);
                setSelectedLabelValue(getItemLabel(selectedItem));

                blurInput();

                if (isOptionListShown && onSelect && options) {
                    onSelect(options[itemIndex], itemIndex);
                }
            }
        };

        // support pre-selected value
        useEffect(() => {
            const latestIndex = selectedIndex.values().next().value;

            if (typeof initialSelectedItemIndex === 'number' && !latestIndex) {
                return handleOnItemSelect(initialSelectedItemIndex);
            }

            return undefined;
        }, []);

        const hideOptions = () =>
            setTimeout(() => setIsOptionListShown(false), 0);

        detectClickOutsideComponent(
            internalInputRef,
            isOptionListShown,
            hideOptions,
        );

        const handleDisplayOptionListToggle = () => {
            setIsOptionListShown(!isOptionListShown);

            focusOnActionItemTrigger();
            blurOnInputWithSelection();
        };

        const isValueSelected =
            typeof selectedIndex.values().next().value === 'number';

        const renderActionItem = (
            <DropdownActionItem
                className={classOverride.ActionItem}
                disabled={disabled}
                error={error}
                isActionSeparatorDisplayed={
                    isOptionListShown || isValueSelected
                }
                isOptionListShown={isOptionListShown}
                onClick={disabled ? () => {} : handleDisplayOptionListToggle}
                tabIndex={tabIndex}
                theme={theme}
            />
        );

        const renderOptionItem = (item: OptionItemType, itemIndex: number) => (
            <DropdownOptionItem
                className={classOverride.OptionItem}
                isSelected={selectedIndex.has(itemIndex)}
                item={item}
                itemIndex={itemIndex}
                key={uniqueId()}
                onOptionSelect={handleOnItemSelect}
                theme={theme}
            />
        );

        return (
            <DropdownWrapper className={classOverride.Wrapper} theme={theme}>
                <DropdownContainer
                    className={classOverride.Container}
                    theme={theme}
                >
                    <TextInput
                        after={renderActionItem}
                        className={classOverride.TextInput}
                        disableLabelEffect={isDisableLabelEffect}
                        disabled={disabled}
                        displayMode="block"
                        error={error}
                        id={generateId(id, selectIdPrefix)}
                        label={label}
                        onChange={() => {}}
                        onClick={handleDisplayOptionListToggle}
                        ref={internalInputRef}
                        styles={dropdownTextInputStyle}
                        theme={theme}
                        value={selectedLabelValue || emptyLabelValue}
                        {...restProps}
                    />
                    <DropdownOptionListContainer
                        className={classOverride.OptionListContainer}
                        theme={theme}
                    >
                        {options && options.length > 0 ? (
                            <DropdownOptionList
                                className={classOverride.OptionList}
                                isOptionListShown={isOptionListShown}
                                theme={theme}
                            >
                                {options.map(renderOptionItem)}
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
};

Dropdown.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    isListExpanded: PropTypes.bool,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    options: PropTypes.array,
    selectedIndex: PropTypes.number,
};
