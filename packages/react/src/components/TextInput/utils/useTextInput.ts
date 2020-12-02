import { MouseEvent, useCallback, useEffect, useRef } from 'react';
import { TextInputPropsType } from '../type';
import { useEvents } from './useEvents';
import { useInternalRef } from '../../../utils';
import { ReferenceType } from '../../../type';

export const useTextInput = (
    {
        label,
        before,
        after,
        disableLabelEffect,
        multiline,
        onMouseOut,
        onMouseOver,
        outline,
        error,
        large,
        enableFocusOnRootClick,

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

        ...restRootProps
    }: TextInputPropsType,
    ref: ReferenceType,
) => {
    const {
        isMouseInside,
        isLabelInside,
        isFocused,
        onInputMouseOver,
        onInputMouseOut,
        onInputFocus,
        onInputBlur,
    } = useEvents({
        value,
        defaultValue,
        placeholder,
        disableLabelEffect,
        onFocus,
        onBlur,
        onMouseOut,
        onMouseOver,
        readOnly,
    });

    const internalInputRef = useRef(null);
    const Tag = multiline ? 'textarea' : 'input';
    const isOutlined = isMouseInside || isFocused || outline;

    // Effects to control external value assignment, enabled and disabled state
    useEffect(() => {
        const node = internalInputRef.current as any;

        if (value && node && node.focus && !disabled) {
            node.focus();
        }
    }, [value, disabled]);

    useInternalRef(ref, internalInputRef);

    const rootRef = useRef<HTMLDivElement>(null);
    const innerContainerRef = useRef<HTMLDivElement>(null);
    const onRootClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (!enableFocusOnRootClick) {
                return;
            }

            if (
                event.target !== rootRef.current &&
                event.target !== innerContainerRef.current
            ) {
                return;
            }

            if (internalInputRef.current) {
                // todo: tighten this
                // @ts-ignore
                internalInputRef.current!.focus();
            }
        },
        [internalInputRef, enableFocusOnRootClick],
    );

    return {
        rootRef,
        rootProps: {
            ...restRootProps,
            onClick: onRootClick,
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
            onChange,
            max,
            maxLength,
            min,
            minLength,
            tabIndex,

            // custom
            multiline,
            large,
            type: multiline ? undefined : type,
            onBlur: onInputBlur,
            onFocus: onInputFocus,
        },
        inputLabelProps: {
            disabled,
            error,
            inside: isLabelInside,
            large,
            outlined: isOutlined,
            value,
        },
        inputLabelBackgroundProps: {
            disabled,
        },

        isOutlined,
        Tag,
        before,
        after,
        disabled,
        large,
        label,
        error,

        internalInputRef,
    };
};