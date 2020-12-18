import { useCallback, useMemo, useRef, useState } from 'react';
import { DropdownPropsType, OptionObjectType } from '../type';
import {
    useDetectClickOutsideComponent,
    useDetectEscapeKeyPressed,
    useInternalRef,
} from '../../../utils';
import { useValue } from './useValue';
import { useOnValueUpdate } from './useOnValueUpdate';
import { useOptions } from './useOptions';
import { useSelectedValueToDisplay } from './useSelectedValueToDisplay';
import { ReferenceType } from '../../../type';

export const useDropdown = (
    {
        disabled,
        isActionSeparatorDisplayed,
        isListExpanded,
        error,
        label,
        onSelect,
        onRenderSelectedValue,
        options,
        onChange,
        multiple,
        formatOption,

        // other native text input props
        autoFocus,
        defaultValue,
        name,
        placeholder,
        value,
        tabIndex,

        ...restProps
    }: DropdownPropsType,
    ref: ReferenceType,
) => {
    const internalInputRef = useRef(null);
    const containerRef = useRef(null);

    useInternalRef(ref, internalInputRef);

    const [internalValue, setInternalValue] = useValue(value, defaultValue);
    const onValueUpdate = useOnValueUpdate(
        setInternalValue,
        onSelect,
        onChange,
        name,
    );
    const { internalOptions, isFlat } = useOptions(options, formatOption);

    const selectedValueToDisplay = useSelectedValueToDisplay(
        onRenderSelectedValue,
        internalValue,
        internalOptions,
    );

    const [isOptionListShown, setIsOptionListShown] = useState(isListExpanded);

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

    const onOptionSelect = (item: OptionObjectType) => {
        if (internalOptions) {
            onValueUpdate(
                internalValue,
                multiple,
                item,
                item.value,
                options,
                isFlat,
            );
        }

        if (!multiple) {
            setIsOptionListShown(false);
        }
        blurInput();
    };

    useDetectClickOutsideComponent(
        containerRef,
        setIsOptionListShown,
        isOptionListShown,
    );

    useDetectEscapeKeyPressed(
        containerRef,
        setIsOptionListShown,
        isOptionListShown,
    );

    const handleDisplayOptionListToggle = () => {
        setIsOptionListShown(!isOptionListShown);

        focusOnActionItemTrigger();
    };

    const handleActionItemClick = useMemo(
        () => (disabled ? () => {} : handleDisplayOptionListToggle),
        [disabled, isOptionListShown],
    );

    return {
        rootProps: restProps,
        containerProps: {
            ref: containerRef,
        },
        textInputProps: {
            onClick: handleDisplayOptionListToggle,
            ref: internalInputRef,
            value: selectedValueToDisplay,
            disabled,
            error,
            label,
            name,
            displayMode: 'block',

            // other native props
            autoComplete: 'off',
            readOnly: true,
            autoFocus,
            placeholder,
            tabIndex,
        },
        optionListContainerProps: {},
        optionListProps: {
            isOptionListShown,
        },

        // todo: move render functions out and use rest props for props
        disabled,
        displaySeparator:
            isActionSeparatorDisplayed &&
            (isOptionListShown || !!internalValue.length),
        isOptionListShown,
        handleActionItemClick,
        internalValue,
        onOptionSelect,
        internalOptions,
        error,
        multiple,
        formatOption,
    };
};
