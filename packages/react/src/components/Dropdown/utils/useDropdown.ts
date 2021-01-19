import { useCallback, useMemo, useRef, useState } from 'react';
import { DropdownPropsType } from '../type';
import {
    useDetectClickOutsideComponent,
    useDetectEscapeKeyPressed,
    useInternalRef,
    useOnValueUpdate,
    useValue,
    useSelectedValueToDisplay,
    useOptions,
} from '../../../utils';
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

    const { internalOptions, isFlat } = useOptions(options, formatOption);

    const onValueUpdate = useOnValueUpdate(
        setInternalValue,
        onSelect,
        onChange,
        name,
    );

    const selectedValueToDisplay = useSelectedValueToDisplay(
        internalValue,
        internalOptions,
        onRenderSelectedValue,
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

        if (!isOptionListShown) {
            if (node && node.focus) {
                node.focus();
            }
        } else {
            blurInput();
        }
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
            disabled,
            options,
            multiple,
            formatOption,
            internalValue,
            blurInput,
            isOptionListShown,
            setIsOptionListShown,
            onValueUpdate,
            isFlat,
            internalOptions,
        },

        // todo: move render functions out and use rest props for props
        disabled,
        displaySeparator:
            isActionSeparatorDisplayed &&
            (isOptionListShown || !!internalValue.length),
        isOptionListShown,
        handleActionItemClick,
        error,

        blurInput,
        internalInputRef,
    };
};
