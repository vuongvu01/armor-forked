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
    useDropdownClassName,
} from './utils';
import {
    DropdownActionItem,
    DropdownContainer,
    DropdownOptionList,
    DropdownOptionListContainer,
    dropdownTextInputStyle,
} from './style';
import { generateId } from '../../utils';
import DropdownOptionItem from './DropdownOptionItem';
import { DropdownPropsType } from './type';
import { dropdownDefaultTheme } from './theme';
import { TextInput } from '../TextInput';
import {
    defaultLabel,
    DROPDOWN_CLASS_PREFIX,
    dropdownIdPrefix,
} from './constants';

export const Dropdown: FunctionComponent<DropdownPropsType> = forwardRef(
    function Dropdown(
        {
            className,
            classNames,
            disabled,
            id,
            isListExpanded = false,
            label,
            onSelectionChange,
            options,
            selectedIndex: initialSelectedItemIndex,
        },
        ref,
    ) {
        const theme = useTheme();

        const internalInputRef = useRef(null);

        const initialIndex =
            typeof initialSelectedItemIndex === 'number'
                ? // eslint-disable-next-line  @typescript-eslint/no-array-constructor
                  new Set(Array(initialSelectedItemIndex))
                : // eslint-disable-next-line  @typescript-eslint/no-array-constructor
                  new Set(Array());
        const [selectedIndex, setSelectedIndices] = useState(initialIndex);
        const [selectedLabelValue, setSelectedLabelValue] = useState('');
        const [isOptionListShown, setIsOptionListShown] = useState(
            isListExpanded,
        );

        const classOverride = useDropdownClassName(
            DROPDOWN_CLASS_PREFIX,
            className,
            classNames,
            disabled,
        );

        // internal ref is used for certain logic, and can be exposed to the outside if the prop is present
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
            const selectedItem = options ? options[itemIndex] : {};

            setSelectedIndices(newIndex);
            setSelectedLabelValue(getItemLabel(selectedItem));

            blurInput();

            if (isOptionListShown && onSelectionChange && options) {
                onSelectionChange(options[itemIndex], itemIndex);
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

        useThemeOverride(DROPDOWN_CLASS_PREFIX, theme, dropdownDefaultTheme);

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

        return (
            <DropdownContainer
                className={classOverride.Container}
                theme={theme}
            >
                <TextInput
                    after={
                        <DropdownActionItem
                            className={classOverride.ActionItem}
                            isOptionListShown={isOptionListShown}
                            onClick={handleDisplayOptionListToggle}
                            theme={theme}
                        />
                    }
                    className={classOverride.TextInput}
                    disabled={disabled}
                    displayMode="block"
                    id={generateId(id, dropdownIdPrefix)}
                    label={label || defaultLabel}
                    onChange={() => {}}
                    onClick={handleDisplayOptionListToggle}
                    ref={internalInputRef}
                    styles={dropdownTextInputStyle}
                    theme={theme}
                    value={selectedLabelValue || ''}
                />
                <DropdownOptionListContainer
                    className={classOverride.OptionListContainer}
                    theme={theme}
                >
                    {isOptionListShown && options && options.length > 0 ? (
                        <DropdownOptionList
                            className={classOverride.OptionList}
                            theme={theme}
                        >
                            {options.map((item, itemIndex: any) => (
                                <DropdownOptionItem
                                    className={classOverride.OptionItem}
                                    isSelected={selectedIndex.has(itemIndex)}
                                    item={item}
                                    itemIndex={itemIndex}
                                    key={uniqueId()}
                                    onOptionSelect={handleOnItemSelect}
                                />
                            ))}
                        </DropdownOptionList>
                    ) : null}
                </DropdownOptionListContainer>
            </DropdownContainer>
        );
    },
);

Dropdown.displayName = DROPDOWN_CLASS_PREFIX;

Dropdown.defaultProps = {};

Dropdown.propTypes = {
    disabled: PropTypes.bool,
};
