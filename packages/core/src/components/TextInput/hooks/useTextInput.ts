import { MouseEvent, useCallback, useRef, useMemo } from 'react';
import { generateId, useRootRef } from '@deliveryhero/armor-system';

import { TextInputPropsType } from '../type';
import { useEvents } from './useEvents';
import { RefType } from '../../../type';
import { textInputInput } from '../constants';

export const useTextInput = <E extends HTMLInputElement>(
    {
        label,
        before,
        after,
        disableLabelEffect,
        multiline,
        onMouseOut,
        onMouseOver,
        outlined,
        error,
        large,
        enableFocusOnRootClick,
        enableRootRef,
        onRootClick,

        // input-specific props need to be passed to Input component instead
        id: baseId,
        autoComplete,
        autoFocus,
        defaultValue,
        disabled,
        name,
        placeholder,
        readOnly,
        rows,
        value,
        onClick,
        onKeyDown,
        onKeyUp,
        onFocus,
        onBlur,
        onChange,
        type,
        max,
        maxLength,
        min,
        minLength,
        tabIndex,
        required,
        'data-testid-input': dataTestIdInput,
        step,
        ...restRootProps
    }: TextInputPropsType,
    ref: RefType<E>,
) => {
    const id = useMemo(
        () => baseId ?? generateId(undefined, 'field-'),
        [baseId],
    );

    const {
        isMouseInside,
        isLabelInside,
        isFocused,
        onInputMouseOver,
        onInputMouseOut,
        onInputFocus,
        onInputBlur,
        onInputChange,
    } = useEvents({
        value,
        defaultValue,
        placeholder,
        disableLabelEffect,
        onFocus,
        onBlur,
        onMouseOut,
        onMouseOver,
        onChange,
        readOnly,
    });

    const internalInputRef = useRootRef<E>(enableRootRef ? null : ref);
    const rootRef = useRootRef<E>(enableRootRef ? ref : null);
    const innerContainerRef = useRef<HTMLDivElement>(null);

    const onRootNodeClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (!enableFocusOnRootClick) {
                return;
            }

            onRootClick?.(event);

            if (
                event.target !== rootRef.current &&
                event.target !== innerContainerRef.current
            ) {
                return;
            }

            internalInputRef.current?.focus();
        },
        [enableFocusOnRootClick, onRootClick, rootRef, internalInputRef],
    );

    const Tag = multiline ? 'textarea' : 'input';
    const isOutlined = isMouseInside || isFocused || outlined;

    return {
        rootProps: {
            ...restRootProps,
            onClick: onRootNodeClick,
            ref: rootRef,
            error,
            multiline,
            onMouseOver: onInputMouseOver,
            onMouseOut: onInputMouseOut,
            outlined: isOutlined,
            disabled,
            enableFocusOnRootClick,
        },
        innerContainerProps: {
            multiline,
            ref: innerContainerRef,
        },
        inputProps: {
            // native
            id,
            autoComplete,
            autoFocus,
            defaultValue,
            disabled,
            name,
            placeholder,
            readOnly,
            rows,
            value,
            onClick,
            onKeyDown,
            onKeyUp,
            max,
            maxLength,
            min,
            minLength,
            tabIndex,
            required,
            'data-testid': dataTestIdInput || textInputInput,
            step,

            // custom
            multiline,
            large,
            type: multiline ? undefined : type,
            onBlur: onInputBlur,
            onFocus: onInputFocus,
            onChange: onInputChange,
            hasBeforeSection: !!before,
            hasAfterSection: !!after,
        },
        inputLabelProps: {
            disabled,
            error,
            isLabelInside,
            large,
            outlined: isOutlined,
            value,
            defaultValue,
            type,
            htmlFor: id,
        },
        inputLabelBackgroundProps: {
            disabled,
        },
        isLabelInside,
        Tag,
        before,
        after,
        disabled,
        outlined: isOutlined,
        large,
        label,
        error,
        internalInputRef,
    };
};
