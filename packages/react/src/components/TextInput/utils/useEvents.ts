import { FocusEvent, MouseEvent, useCallback, useState } from 'react';
import { TextInputPropsType } from '../type';

export const useEvents = ({
    value,
    defaultValue,
    placeholder,
    disableLabelEffect,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseOut,
    readOnly,
}: TextInputPropsType) => {
    const [isLabelInside, setLabelInside] = useState(
        !value && !defaultValue && !placeholder && !disableLabelEffect,
    );
    const [isMouseInside, setMouseInside] = useState(false);
    const [isFocused, setFocused] = useState(false);

    const onInputFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (event.target && isLabelInside && !readOnly) {
                setLabelInside(false);
            }

            setFocused(true);

            if (onFocus) {
                onFocus(event);
            }
        },
        [isLabelInside, setLabelInside, onFocus, readOnly],
    );

    const onInputBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (
                event.target &&
                !event.target.value &&
                !placeholder &&
                !disableLabelEffect
            ) {
                setLabelInside(true);
            }

            setFocused(false);

            if (onBlur) {
                onBlur(event);
            }
        },
        [isLabelInside, placeholder, setFocused, setLabelInside, onBlur],
    );

    const onInputMouseOver = useCallback(
        (event: MouseEvent<HTMLInputElement>) => {
            setMouseInside(true);

            if (onMouseOver) {
                onMouseOver(event);
            }
        },
        [],
    );

    const onInputMouseOut = useCallback(
        (event: MouseEvent<HTMLInputElement>) => {
            setMouseInside(false);

            if (onMouseOut) {
                onMouseOut(event);
            }
        },
        [],
    );

    return {
        isMouseInside,
        isLabelInside,
        isFocused,
        onInputMouseOver,
        onInputMouseOut,
        onInputFocus,
        onInputBlur,
    };
};
