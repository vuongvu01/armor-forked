import {
    FocusEvent,
    MouseEvent,
    useCallback,
    useState,
    useEffect,
    ChangeEvent,
} from 'react';
import { TextInputPropsType } from '../type';

type UseEventsHookParamsType = Pick<
    TextInputPropsType,
    | 'value'
    | 'defaultValue'
    | 'placeholder'
    | 'disableLabelEffect'
    | 'onFocus'
    | 'onBlur'
    | 'onMouseOver'
    | 'onMouseOut'
    | 'readOnly'
    | 'onChange'
>;

type LabelPositionCheckerType = {
    isFocused: boolean;
    isEmptyUncontrolled: boolean;
} & UseEventsHookParamsType;

const isControlledMode = (value: TextInputPropsType['value']) => {
    return value !== undefined;
};

const isLabelPositionInside = ({
    value,
    placeholder,
    disableLabelEffect,
    isFocused,
    isEmptyUncontrolled,
}: LabelPositionCheckerType) => {
    if (placeholder || isFocused || disableLabelEffect) {
        return false;
    }

    if (isControlledMode(value)) {
        return !value;
    }

    return isEmptyUncontrolled;
};

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
    onChange,
}: UseEventsHookParamsType) => {
    const [isEmptyUncontrolled, setEmptyUncontrolled] = useState<boolean>(
        !defaultValue,
    );
    const [isFocused, setFocused] = useState(false);
    const [isLabelInside, setLabelInside] = useState(
        isLabelPositionInside({
            value,
            defaultValue,
            placeholder,
            disableLabelEffect,
            isFocused,
            isEmptyUncontrolled,
        }),
    );
    const [isMouseInside, setMouseInside] = useState(false);

    useEffect(() => {
        setLabelInside(
            isLabelPositionInside({
                value,
                defaultValue,
                isFocused,
                placeholder,
                disableLabelEffect,
                isEmptyUncontrolled,
            }),
        );
    }, [
        value,
        defaultValue,
        isFocused,
        placeholder,
        disableLabelEffect,
        isEmptyUncontrolled,
        readOnly,
    ]);

    const onInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(event);
            }

            if (event.isPropagationStopped()) {
                return;
            }

            if (!isControlledMode(value)) {
                // we are in the uncontrolled mode
                setEmptyUncontrolled(!event.target.value.length);
            }
        },
        [onChange, value],
    );

    const onInputFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            setFocused(true);

            if (onFocus) {
                onFocus(event);
            }
        },
        [isLabelInside, setLabelInside, onFocus, readOnly],
    );

    const onInputBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
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
        onInputChange,
    };
};
