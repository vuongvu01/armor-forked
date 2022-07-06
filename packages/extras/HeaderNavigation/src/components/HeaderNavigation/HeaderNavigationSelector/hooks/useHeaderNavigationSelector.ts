import React, {
    MouseEvent,
    useCallback,
    KeyboardEvent,
    useState,
    useRef,
    ForwardedRef,
    ReactElement,
} from 'react';
import {
    useOverlay,
    usePopper,
    useRootRef,
    useDetectEscapeKeyPressed,
    useOuterClick,
    RIGHT,
} from '@deliveryhero/armor-system';

import {
    useOnValueUpdate,
    useOptions,
    useSelectedValueToDisplay,
    useValue,
} from '../../../../utils/headernavigation';

import { HeaderNavigationSelectorPropsType } from '../type';

export const useHeaderNavigationSelector = <E extends HTMLDivElement>(
    {
        navigationSelectorParams: {
            label = 'Plugins',
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
        dropdownWidth,
        maxDropdownWidth,
        minDropdownWidth,
        maxDropdownHeight,
        selectorIcon,
        iconAlign = RIGHT,
        ...restProps
    }: HeaderNavigationSelectorPropsType,
    ref: ForwardedRef<E>,
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

    const { panelProps, arrowProps } = usePopper(dropdownRef, containerRef, {
        align: 'bottom-end',
        offset: [0, 16],
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

    const Icon = React.cloneElement(selectorIcon as ReactElement, {
        isExpanded: isOptionListShown,
        ...(iconAlign === RIGHT ? { marginLeft: 2 } : { marginRight: 2 }),
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
            arrowProps,
            ...panelProps,
        },
        dropdownContainerProps: {
            width: dropdownWidth,
            maxWidth: maxDropdownWidth,
            minWidth: minDropdownWidth,
        },
        isOpen: isOptionListShown,
        selectorIcon: { Icon, iconAlign },
    };
};
