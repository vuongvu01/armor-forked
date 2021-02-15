import { MouseEvent, useCallback, useRef } from 'react';
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

    const internalInputRef = useRef<HTMLInputElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const innerContainerRef = useRef<HTMLDivElement>(null);

    useInternalRef(ref, enableRootRef ? rootRef : internalInputRef);

    if (autoFocus && internalInputRef.current) {
        internalInputRef.current.focus({
            preventScroll: true,
        });
    }
    const onRootNodeClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (!enableFocusOnRootClick) {
                return;
            }

            if (onRootClick) {
                onRootClick(event);
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
        [internalInputRef, enableFocusOnRootClick, onRootClick],
    );

    const Tag = multiline ? 'textarea' : 'input';
    const isOutlined = isMouseInside || isFocused || outline;

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
        },
        inputLabelBackgroundProps: {
            disabled,
        },

        isLabelInside,
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
