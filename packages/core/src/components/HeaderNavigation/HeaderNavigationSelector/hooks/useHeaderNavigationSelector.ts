import {
    MouseEvent,
    useCallback,
    KeyboardEvent,
    useState,
    useRef,
    useEffect,
} from 'react';
import {
    useOverlay,
    usePopper,
    useRootRef,
    useDetectEscapeKeyPressed,
    useOuterClick,
} from '@deliveryhero/armor-system';

import {
    useOnValueUpdate,
    useOptions,
    useSelectedValueToDisplay,
    useValue,
} from '../../../../utils/dropdown';

import { HeaderNavigationSelectorPropsType } from '../type';
import { RefType } from '../../../../type';

export const useHeaderNavigationSelector = <E extends HTMLDivElement>(
    {
        navigationSelectorParams: {
            label = 'Country',
            value,
            defaultValue,
            options,
            formatOption,
            isMultiselect,
            isExpanded,
            disabled,
        },
        onOptionSelect,
        separator = true,
        onChange,
        onRenderSelectedValue,
        onClick,
        enableSelectAllOption,
        enableSearchOption,
        enablePortal,
        zIndex,
        maxDropdownHeight,
        ...restProps
    }: HeaderNavigationSelectorPropsType,
    ref: RefType<E>,
) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const containerRef = useRootRef(ref);

    const [internalValue, setInternalValue] = useValue(value, defaultValue);

    const {
        isFlat,
        internalOptions,
        dynamicInternalOptions,
        setDynamicInternalOptions,
    } = useOptions(options, formatOption);

    const onValueUpdate = useOnValueUpdate(
        setInternalValue,
        onOptionSelect,
        onChange,
    );

    const selectedValueToDisplay = useSelectedValueToDisplay(
        internalValue,
        internalOptions,
        onRenderSelectedValue,
    );

    const [isOptionListShown, setIsOptionListShown] = useState(isExpanded);

    const { panelProps } = usePopper(dropdownRef, containerRef, {
        align: 'bottom-end',
        offset: [0, 0],
        allowedAutoPlacements: ['bottom'],
    });

    const { zIndex: realZIndex } = useOverlay(isOptionListShown, { zIndex });

    const onOuterClick = useCallback(() => {
        setIsOptionListShown(false);
    }, []);

    useOuterClick([containerRef, dropdownRef], onOuterClick, isOptionListShown);

    useDetectEscapeKeyPressed(
        containerRef,
        setIsOptionListShown,
        isOptionListShown,
    );

    const handleClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            setIsOptionListShown((isShown) => !isShown);
            onClick?.(event);
        },
        [onClick],
    );

    const handleEnterKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const { key } = event;

            if (key === 'Enter') {
                setIsOptionListShown((isShown) => !isShown);
            }
        },
        [],
    );

    // Keep dropdown width in sync with
    // the width of the container
    useEffect(() => {
        const container = containerRef.current?.parentElement;

        const { current: dropdown } = dropdownRef;

        if (!dropdown || !container) {
            return;
        }

        dropdown.style.width = `${container.offsetWidth}px`;
    });

    return {
        rootProps: restProps,
        optionListProps: {
            multiple: isMultiselect,
            formatOption,
            internalValue,
            setInternalValue,
            onValueUpdate,
            isFlat,
            options,
            internalOptions,
            isOptionListShown,
            setIsOptionListShown,
            disabled,
            enableSelectAllOption,
            enableSearchOption,
            dynamicInternalOptions,
            setInternalOptions: setDynamicInternalOptions,
            autoFocus: true,
            enableScrollGradientEffect: true,
            maxDropdownHeight,
        },
        expansionIndicatorProps: {
            isExpanded: isOptionListShown,
        },
        selectorProps: {
            separator,
            onKeyDown: handleEnterKeyDown,
            tabIndex: 0,
            isOptionListShown,
        },
        selectedOptionsProps: {
            onClick: handleClick,
        },
        containerRef,
        label,
        selectedValueToDisplay,
        portalProps: {
            enablePortal,
        },
        listContainerProps: {
            ref: dropdownRef,
            zIndex: realZIndex,
            containerRef,
            ...panelProps,
        },
        isOpen: isOptionListShown,
    };
};
