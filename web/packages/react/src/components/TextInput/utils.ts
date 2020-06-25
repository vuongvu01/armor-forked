import { FocusEvent, MouseEvent, useCallback, useMemo, useState } from 'react';
import { TextInputPropsType, TextInputStylesPropsType } from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useTextInputStylesOverride = (
    styles?: TextInputStylesPropsType,
): Required<TextInputStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            Input: returnEmptyString,
            Label: returnEmptyString,
            LabelBackground: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useTextInputClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    big?: boolean,
    error?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const rootStateClassNames: string[] = [];
        if (disabled) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'disabled'));
        }
        if (big) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'big'));
        }
        if (error) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'error'));
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`,
            Input: makeBEM(classPrefix, 'Input'),
            Label: makeBEM(classPrefix, 'Label'),
            LabelBackground: makeBEM(classPrefix, 'LabelBackground'),
        };
    }, [classPrefix, className, classNames, disabled, big, error]);

export const useEvents = ({
    value,
    defaultValue,
    placeholder,
    disableLabelEffect,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseOut,
}: TextInputPropsType) => {
    const [isLabelInside, setLabelInside] = useState(
        !value && !defaultValue && !placeholder && !disableLabelEffect,
    );
    const [isMouseInside, setMouseInside] = useState(false);
    const [isFocused, setFocused] = useState(false);

    const onInputFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            // @ts-ignore
            if (event.target && isLabelInside) {
                setLabelInside(false);
            }

            setFocused(true);

            if (onFocus) {
                onFocus(event);
            }
        },
        [isLabelInside, setLabelInside, onFocus],
    );

    const onInputBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (
                event.target &&
                // @ts-ignore
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
