import { MouseEvent, useCallback, KeyboardEvent, useState } from 'react';
import { HeaderNavigationSelectorPropsType } from '../type';
import { RefType } from '../../../../type';
import {
    useDetectClickOutsideComponent,
    useDetectEscapeKeyPressed,
    useOnValueUpdate,
    useOptions,
    useSelectedValueToDisplay,
    useValue,
} from '../../../../utils';
import { useRootRef } from '../../../../system';

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
        ...restProps
    }: HeaderNavigationSelectorPropsType,
    ref: RefType<E>,
) => {
    const containerRef = useRootRef(ref);

    const [internalValue, setInternalValue] = useValue(value, defaultValue);

    const { internalOptions, isFlat } = useOptions(options, formatOption);

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

    const handleClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            setIsOptionListShown(!isOptionListShown);

            if (onClick) {
                onClick(event);
            }
        },
        [setIsOptionListShown, isOptionListShown, onClick],
    );

    const handleEnterKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const { key } = event;

            if (key === 'Enter' && setIsOptionListShown) {
                setIsOptionListShown(!isOptionListShown);
            }
        },
        [setIsOptionListShown, isOptionListShown],
    );

    return {
        rootProps: restProps,
        optionListProps: {
            multiple: isMultiselect,
            formatOption,
            internalValue,
            onValueUpdate,
            isFlat,
            options,
            internalOptions,
            isOptionListShown,
            setIsOptionListShown,
            disabled,
            enableSelectAllOption,
            enableSearchOption,
        },
        expansionIndicatorProps: {
            isExpanded: isOptionListShown,
        },
        selectorProps: {
            separator,
            onClick: handleClick,
            onKeyDown: handleEnterKeyDown,
            tabIndex: 0,
            isOptionListShown,
        },
        containerRef,
        label,
        selectedValueToDisplay,
    };
};