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
    SelectContainer,
    SelectOptionList,
    SelectOptionListContainer,
    selectTextInputStyle,
    SelectWrapper,
} from './style';
import { generateId } from '../../utils';
import SelectOptionItem from './SelectOptionItem';
import SelectActionItem from './SelectActionItem';
import { OptionItemType, SelectPropsType } from './type';
import { selectDefaultTheme } from './theme';
import { TextInput } from '../TextInput';
import {
    defaultLabel,
    emptyLabelValue,
    SELECT_CLASS_PREFIX,
    selectIdPrefix,
} from './constants';

export const Select: FunctionComponent<SelectPropsType> = forwardRef(
    function Select(
        {
            className,
            classNames,
            disabled,
            error,
            id,
            isListExpanded = false,
            label,
            onSelectionChange,
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
            SELECT_CLASS_PREFIX,
            className,
            classNames,
            disabled,
        );

        useThemeOverride(SELECT_CLASS_PREFIX, theme, selectDefaultTheme);

        // internalRef is used in Select and can be exposed to the outside if the ref prop is present
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

                if (isOptionListShown && onSelectionChange && options) {
                    onSelectionChange(options[itemIndex], itemIndex);
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
            <SelectActionItem
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
            <SelectOptionItem
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
            <SelectWrapper className={classOverride.Wrapper} theme={theme}>
                <SelectContainer
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
                        styles={selectTextInputStyle}
                        theme={theme}
                        value={selectedLabelValue || emptyLabelValue}
                        {...restProps}
                    />
                    <SelectOptionListContainer
                        className={classOverride.OptionListContainer}
                        theme={theme}
                    >
                        {options && options.length > 0 ? (
                            <SelectOptionList
                                className={classOverride.OptionList}
                                isOptionListShown={isOptionListShown}
                                theme={theme}
                            >
                                {options.map(renderOptionItem)}
                            </SelectOptionList>
                        ) : null}
                    </SelectOptionListContainer>
                </SelectContainer>
            </SelectWrapper>
        );
    },
);

Select.displayName = SELECT_CLASS_PREFIX;

Select.defaultProps = {
    disabled: false,
    isListExpanded: false,
    label: defaultLabel,
    tabIndex: 0,
};

Select.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    id: PropTypes.string,
    isListExpanded: PropTypes.bool,
    label: PropTypes.string,
    onSelectionChange: PropTypes.func,
    options: PropTypes.array,
    selectedIndex: PropTypes.number,
};
