import { MouseEvent, useCallback, useRef } from 'react';
import { useRootRef } from '@deliveryhero/armor-system';

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

        ...restRootProps
    }: TextInputPropsType,
    ref: RefType<E>,
) => {
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

            // custom
            multiline,
            large,
            type: multiline ? undefined : type,
            onBlur: onInputBlur,
            onFocus: onInputFocus,
            onChange: onInputChange,
        },
        inputLabelProps: {
            disabled,
            error,
            inside: isLabelInside,
            large,
            outlined: isOutlined,
            value,
            defaultValue,
            type,
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
