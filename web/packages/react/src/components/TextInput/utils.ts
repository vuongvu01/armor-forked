import { FocusEvent, MouseEvent, useCallback, useMemo, useState } from 'react';

import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { TextInputPropsType, TextInputStylesPropsType } from './type';
import { ClassNamesType } from '../type';

export const useTextInputStylesOverride = (
    styles?: TextInputStylesPropsType,
): Required<TextInputStylesPropsType> => {
    const selectStyle = (
        stylesProp: TextInputStylesPropsType,
        component: string,
    ) => {
        if (stylesProp && component in stylesProp) {
            // @ts-ignore
            return () => stylesProp[component];
        }

        return returnEmptyString;
    };

    return useMemo(
        () => ({
            // @ts-ignore
            Root: selectStyle(styles, 'Root'),
            // @ts-ignore
            Input: selectStyle(styles, 'Input'),
            // @ts-ignore
            Label: selectStyle(styles, 'Label'),
            // @ts-ignore
            LabelBackground: selectStyle(styles, 'LabelBackground'),
            ...styles,
        }),
        [styles],
    );
};

export const useTextInputClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    large?: boolean,
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
        if (large) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'large'));
        }
        if (error) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'error'));
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`.trim(),
            Input: makeBEM(classPrefix, 'Input'),
            Label: makeBEM(classPrefix, 'Label'),
            LabelBackground: makeBEM(classPrefix, 'LabelBackground'),
        };
    }, [classPrefix, className, classNames, disabled, large, error]);

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
