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
} from './style';
import { generateId } from '../../utils';
import SelectOptionItem from './SelectOptionItem';
import SelectActionItem from './SelectActionItem';
import { SelectPropsType } from './type';
import { selectDefaultTheme } from './theme';
import { TextInput } from '../TextInput';
import { defaultLabel, SELECT_CLASS_PREFIX, selectIdPrefix } from './constants';

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
            ...restProps
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

        const classOverride = useSelectClassName(
            SELECT_CLASS_PREFIX,
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

        useThemeOverride(SELECT_CLASS_PREFIX, theme, selectDefaultTheme);

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
            <SelectContainer className={classOverride.Container} theme={theme}>
                <TextInput
                    after={
                        <SelectActionItem
                            className={classOverride.ActionItem}
                            disabled={disabled}
                            error={error}
                            isFocused={
                                isOptionListShown ||
                                typeof selectedIndex.values().next().value ===
                                    'number'
                            }
                            isOptionListShown={isOptionListShown}
                            onClick={
                                disabled
                                    ? () => {}
                                    : handleDisplayOptionListToggle
                            }
                            theme={theme}
                        />
                    }
                    className={classOverride.TextInput}
                    disabled={disabled}
                    displayMode="block"
                    error={error}
                    id={generateId(id, selectIdPrefix)}
                    label={label || defaultLabel}
                    onChange={() => {}}
                    onClick={handleDisplayOptionListToggle}
                    ref={internalInputRef}
                    styles={selectTextInputStyle}
                    theme={theme}
                    value={selectedLabelValue || ''}
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
                            {options.map((item, itemIndex: any) => (
                                <SelectOptionItem
                                    className={classOverride.OptionItem}
                                    isSelected={selectedIndex.has(itemIndex)}
                                    item={item}
                                    itemIndex={itemIndex}
                                    key={uniqueId()}
                                    onOptionSelect={handleOnItemSelect}
                                    theme={theme}
                                />
                            ))}
                        </SelectOptionList>
                    ) : null}
                </SelectOptionListContainer>
            </SelectContainer>
        );
    },
);

Select.displayName = SELECT_CLASS_PREFIX;

Select.defaultProps = {};

Select.propTypes = {
    disabled: PropTypes.bool,
};
